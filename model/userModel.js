const db = require('../db/database'); // Suponha que este arquivo contém a configuração da conexão com o banco de dados

function getAll() {
  return db.query('SELECT * FROM users');
}

function getUser(id) {
  return db.query('SELECT * FROM users WHERE id = ?', [id]);
}

function save(user) {
  return db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [user.nome, user.email]);
}

function alterar(user) {
  return db.query('UPDATE users SET nome = ?, email = ? WHERE id = ? ', [user.nome, user.email, user.id])
}

function excluir(user_id) {
  return db.query('DELETE FROM users WHERE id = ?', [user_id])
}

module.exports = {
  getAll,
  getUser,
  save,
  alterar,
  excluir
};


  