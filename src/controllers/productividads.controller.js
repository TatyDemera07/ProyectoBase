const pool = require("../config/dataBase.sql");
const productividads = require("../models/productividad.model");

const Productividads = {};

Productividads.getListProductividads = async (req, res) => {
    const productividads = await pool.query("SELECT * FROM  productividads");
    res.render("Pages/productividad/list-productividads", { productividads });
};

Productividads.getAddProductividads = async (req, res) => {
    res.render("Pages/productividad/productividads");
};

Productividads.postProductividad = async (req, res) => {
    const { id, pomodoro, tareaRealizada, tiempoTrabajo } =
        req.body;
    const newLink = {
        id,
     pomodoro, 
     tareaRealizada, 
     tiempoTrabajo

    };
    await pool.query("INSERT INTO productividads set ?", [newLink]);
    // Flash
    req.flash("success", "Agregado Correctamenta");
    res.redirect("/productividad/list-productividads");
};

Productividads.deleteProductividad = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM productividads WHERE ID = ?", [id]);
    req.flash("success", "Eliminado correctamente");
    res.redirect("/productividad/list-productividads");
};

// Actualizar //
Productividads.getProductividad = async (req, res) => {
    const { id } = req.params;
    const Productividad = await pool.query("SELECT * FROM productividads WHERE id = ?", [id]);
    res.render("Pages/productividad/edit-productividads", { productividad: Productividad[0] });
};

// Se mostrará actualizado en la lista //
Productividads.updateProductividad = async (req, res) => {
    const { id } = req.params;
    const { pomodoro, tareaRealizada, tiempoTrabajo } = req.body;
    const newLink = { id, pomodoro, tareaRealizada, tiempoTrabajo };
    console.log({ id, newLink });
    await pool.query("UPDATE productividads set ? WHERE id = ?", [newLink, id]);
    req.flash("success", "Editado Correctamente");
    res.redirect("/productividad/list-productividads");
};

module.exports = Productividads;
