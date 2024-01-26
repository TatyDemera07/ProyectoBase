const tareas =(sequelize, type) =>{
    return sequelize.define('tareas', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo:type.STRING ,
        fechaCreacion: type.STRING,
        fechaVencimiento:type.STRING ,
        description:type.STRING,
        estado:type.STRING,

        createTareas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateTareas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = tareas
