const bcrypt = require("bcryptjs")

module.exports = (sequelize, DataTypes) =>{

    const User = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            unique:true,
            allowNull:false
        },
        password:{
            type: DataTypes.STRING,
            allowNull:true
        },
        password_h:{
            type: DataTypes.VIRTUAL,
            allowNull: false
        },
        provider:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        },
        avatar_id:{
            type: DataTypes.INTEGER,
            references: {model: "File", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
            allowNull: true
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull:false,
            field: "createdAt"
        },        
        updatedAt:{
            type: DataTypes.DATE,
            allowNull:false,
            field:"updatedAt"
        },
        phone:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    },{
        tableName:"users",
        timestamps:true,

    })

    User.addHook("beforeSave", async user =>{
        if(user.password_h) user.password = await bcrypt.hash(user.password_h, 12)
    })


    User.associate = (models)=>{
        User.hasMany(models.Schedule, {
            onDelete:"SET NULL",
            foreignKey:"provider_id",
            as: "hours"
        })

        User.hasMany(models.Schedule, {
            onDelete:"SET NULL",
            foreignKey:"user_id",
            as: "hoursUsers"
        })

        User.belongsTo(models.File, {
            foreignKey: ["avatar_id"],
            as: "avatar"
        })
    }


    return User
}