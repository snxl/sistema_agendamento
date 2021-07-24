

module.exports = (Sequelize, DataTypes)=>{

    const Schedule = Sequelize.define("Schedule", {

        appointment:{
            type: DataTypes.DATE,
            allowNull: false, 
            primaryKey: true
        },
        provider_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {model: "user", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {model: "user", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
            
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull:false,
            field: "createdAt"
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull:false,
            field: "updatedAt"
        }
    },{
        tableName:"schedule"
    })

    Schedule.associate = (models)=>{
        Schedule.belongsTo(models.File, {
            foreignKey: "provider_id",
            as: "provide"
        })
    }

    return Schedule
}