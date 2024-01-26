const productividads =(sequelize, type) =>{
    return sequelize.define('productividads', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pomodoro:type.STRING ,
        tareaRealizada: type.STRING,
        tiempoTrabajo:type.STRING ,

        createProductividads:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateProductividads:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = productividads
