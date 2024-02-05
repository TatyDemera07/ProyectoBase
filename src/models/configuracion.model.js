const configuracions =(sequelize, type) =>{
    return sequelize.define('configuracions', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email:type.STRING ,
        password: type.STRING,
        name:type.STRING ,
        description:type.STRING,

        createConfiguaracions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateConfiguracions:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = configuracions
