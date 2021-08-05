

module.exports = (Sequelize, DataTypes)=>{

    const Schedule = Sequelize.define("Schedule", {

        date:{
            type: DataTypes.DATE,
            allowNull: false, 
        },
        provider_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            references: {model: "user", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {model: "user", key: "id"},
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
        },
        canceled_at:{
            type: DataTypes.DATE,
            field: "canceled_at"
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