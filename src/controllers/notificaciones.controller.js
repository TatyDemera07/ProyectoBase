const pool = require("../config/dataBase.sql");
const notificacions = require("../models/notificacion.model");

const Notificaciones = {};

Notificaciones.getListNotificaciones = async (req, res) => {
    const notificaciones = await pool.query("SELECT * FROM  notificaciones");
    res.render("Pages/notificacion/list-notificaciones", { notificaciones });
};

Notificaciones.getAddNotificaciones = async (req, res) => {
    res.render("Pages/notificacion/notificaciones");
};

Notificaciones.postNotificacion = async (req, res) => {
    const { id, fechaEnvio, mensaje } =
        req.body;
    const newLink = {
        id,
        fechaEnvio,
        mensaje

    };
    await pool.query("INSERT INTO notificacions set ?", [newLink]);
    // Flash
    req.flash("success", "Agregado Correctamente");
    res.redirect("/notificacions/list-notificacions");
};

Notificaciones.deleteNotificacion = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM notificaciones WHERE ID = ?", [id]);
    req.flash("success", "Eliminado correctamente");
    res.redirect("/notificacions/list-notificacions");
};

// Actualizar //
Notificaciones.getNotificacion = async (req, res) => {
    const { id } = req.params;
    const Notificacion = await pool.query("SELECT * FROM notificaciones WHERE id = ?", [id]);
    res.render("Pages/notificacion/edit-notificaciones", { notificacion: Notificacion[0] });
};

// Se mostrará actualizado en la lista //
Notificaciones.updateNotificacion = async (req, res) => {
    const { id } = req.params;
    const {  fechaEnvio, mensaje } = req.body;
    const newLink = { id, fechaEnvio, mensaje };
    console.log({ id, newLink });
    await pool.query("UPDATE notificaciones set ? WHERE id = ?", [newLink, id]);
    req.flash("success", "Editado Correctamente");
    res.redirect("/notificacions/list-notificaciones");
};

module.exports = Notificaciones;
