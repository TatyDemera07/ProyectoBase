const pool = require("../config/dataBase.sql");
const recordatorios = require ("../models/recordatorio.model");

const Recordatorios = {};

Recordatorios.getListRecordatorios = async (req, res) => {
    const recordatorios = await query("SELECT * FROM  recordatorios");
    res.render("Pages/recordatorio/list-recordatorios", { recordatorios });
};

Recordatorios.getAddRecordatorios = async (req, res) => {
    res.render("Pages/recordatorio/recordatorios");
};

Recordatorios.postRecordatorio = async (req, res) => {
    const { id, mensaje, fecha, recordatorio } =
        req.body;
    const newLink = {
        id, 
        mensaje,
        fecha,
        recordatorio

    };
    await query("INSERT INTO recordatorios set ?", [newLink]);
    //Flash
    req.flash("success", "Agregado Correctamenta");
    res.redirect("/recordatorios/list-recordatorios");
};

Recordatorios.deleteRecordatorio = async (req, res) => {
    const { id } = req.params;
    await query("DELETE FROM recordatorios WHERE ID = ?", [id]);
    req.flash("success", "Eliminado correctamente");
    res.redirect("/recordatorios/list-recordatorios");
};

//actualizar//
Recordatorios.getRecordatorio = async (req, res) => {
    const { id } = req.params;
    const Recordatorio = await query("SELECT * FROM recordatorios WHERE id = ?", [id]);
    res.render("Pages/recordatorio/edit-recordatorios", { recordatorio: recordatorio[0] });
};

//se mostrara actualizado en la lista//
Recordatorios.updateRecordatorio = async (req, res) => {
    const { id } = req.params;
    const {  mensaje, fecha, recordatorio } = req.body;
    const newLink = {  mensaje, fecha, recordatorio };
    console.log({ id, newLink });
    await query("UPDATE recordatorios set ? WHERE id = ?", [newLink, id]);
    req.flash("success", "Editado Correctamente");
    res.redirect("/recordatorios/list-recordatorios");
};

export default Recordatorios;