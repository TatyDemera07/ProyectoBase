const pool = require("../config/dataBase.sql");
const { isLoggedIn } = require('../lib/auth');
const users = require("../models/user.model");

const Users = {};

Users.getListUsers = async (req, res) => {
    const [users] = await pool.query('SELECT * FROM  users');
    res.render('pages/users/list', { users });
};

Users.postUsers = async (req, res) => {
    const { id, email, password, name, description } = req.body;
    const newUser = { id, email, password, name, description };
    await pool.query("INSERT INTO users set ?", [newUser]);
    req.flash('success', 'creado');
    res.redirect("/users/list-users");
};

Users.deleteUser = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM users WHERE ID = ?", [id]);
    req.flash('success', 'Eliminado');
    res.redirect("/users/list-users");
};

Users.getUser = async (req, res) => {
    const { id } = req.params;
    const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    req.flash('success', 'bien');
    res.render('pages/users/edit', { user });
};

Users.updateUser = async (req, res) => {
    const { id } = req.params;
    const {  email, password, name, description } = req.body;
    const newUser = { email, password, name, description };
    await pool.query("UPDATE users set ? WHERE id = ?", [newUser, id]);
    req.flash('success', 'Actualizado');
    res.redirect('/users/list-users');
};

module.exports = Users;