const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
    console.log(`El servidor esta escuchando en el puerto ${port}`);
});