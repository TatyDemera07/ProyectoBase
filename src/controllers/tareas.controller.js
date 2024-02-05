const pool = require("../config/dataBase.sql");
const tareas = require("../models/tarea.model");

const Tareas = {};


//Conseguir lista De comunicado 
Tareas.getListTareas = async (req, res) => {
  const tareas = await pool.query('SELECT * FROM  tareas');
  res.render('Pages/tarea/list-tareas', { tareas })
};

//Agregar 
Tareas.getAddTareas = async (req, res) => {
  res.render('Pages/tarea/tareas')
};

//Publicar Comunicado 
Tareas.postTarea = async (req, res) => {
  const {
    titulo, fechaCreacion, fechaVencimiento, 
    description, estado
  } = req.body;
  const newLink = {
    titulo, fechaCreacion, fechaVencimiento, 
    description, estado
  };
  await pool.query('INSERT INTO tareas set ?', [newLink]);
  //Flash
  req.flash('success', 'Agregado Correctamenta');
  res.redirect("/tareas/list-tareas");
};

//Eliminar Publicado 
Tareas.deleteTarea = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM tareas WHERE ID = ?", [id]);
  req.flash('success', 'Eliminado');
  res.redirect("/tareas/list-tareas");
};

//Actualizar Comunicado 
Tareas.getTarea = async (req, res) => {
  const { id } = req.params;
  const tareas = await pool.query('SELECT * FROM tareas WHERE id = ?', [id]);
  res.render('Pages/tareas/edit-tareas', { tareas: tareas[0] });
};

//Se amostrara lo que se actualizao 
Tareas.updateTarea = async (req, res) => {
  const { id } = req.params;
  const { titulo, fechaCreacion, fechaVencimiento, 
    description, estado } = req.body;
  const newLink = {
    titulo, fechaCreacion, fechaVencimiento, 
    description, estado
  };
  console.log({ id, newLink });
  await pool.query("UPDATE tareas set ? WHERE id = ?", [newLink, id]);
  req.flash('success', 'Actualizado');
  res.redirect('/tareas/list-tareas');
};

module.exports = Tareas;