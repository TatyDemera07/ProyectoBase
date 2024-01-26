const recordatorios =(sequelize, type) =>{
    return sequelize.define('recordatorios', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mensaje:type.STRING ,
        fecha: type.STRING,
        recordatorio:type.STRING ,

        createRecordatotios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateRecordatorios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = recordatorios
