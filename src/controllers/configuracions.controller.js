const pool = require("../config/dataBase.sql");
const configuracions = require("../models/configuracion.model");

const Configuracions = {};

Configuracions.getListConfiguracions = async (req, res) => {
    const configuracions = await pool.query("SELECT * FROM  configuracions");
    res.render("Pages/configuracion/list-configuracions", { configuracions });
};

Configuracions.getAddConfiguracions = async (req, res) => {
    res.render("Pages/configuracion/configuracions");
};

Configuracions.postConfiguracion = async (req, res) => {
    const {email, password, name, description } =
        req.body;
    const newLink = {
        email,
        password,
        name,
        description

    };
    await pool.query("INSERT INTO configuracions set ?", [newLink]);
    // Flash
    req.flash("success", "Agregado Correctamente");
    res.redirect("/configuracions/list-configuracions");
};

Configuracions.deleteConfiguracion = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM configuracions WHERE ID = ?", [id]);
    req.flash("success", "Eliminado correctamente");
    res.redirect("/configuracions/list-configuracions");
};

// Actualizar //
Configuracions.getConfiguracion = async (req, res) => {
    const { id } = req.params;
    const Configuracion = await pool.query("SELECT * FROM configuracions WHERE id = ?", [id]);
    res.render("Pages/Configuracion/edit-configuracions", { configuracion: Configuracion[0] });
};

// Se mostrará actualizado en la lista //
Configuracions.updateConfiguracion = async (req, res) => {
    const { id } = req.params;
    const { name_president, name_Configuracion, color, creationdate, rol, categori } = req.body;
    const newLink = { name_president, name_Configuracion, color, creationdate, rol, categori };
    console.log({ id, newLink });
    await pool.query("UPDATE configuracions set ? WHERE id = ?", [newLink, id]);
    req.flash("success", "Editado Correctamente");
    res.redirect("/configuracions/list-configuracions");
};

module.exports = Configuracions;
