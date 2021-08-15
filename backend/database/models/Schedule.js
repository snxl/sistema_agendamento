

module.exports = (Sequelize, DataTypes)=>{

    const Schedule = Sequelize.define("Schedule", {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
            onDelete: "SET NULL",
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
        Schedule.belongsTo(models.user, {
            foreignKey: "provider_id",
            as: "provider"
        })
        Schedule.belongsTo(models.user, {
            foreignKey: "user_id",
            as: "user"
        })
    }

    return Schedule
}