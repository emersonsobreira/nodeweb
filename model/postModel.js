const db = require('../db/database'); // Suponha que este arquivo contém a configuração da conexão com o banco de dados


function getAll() {
  return db.query('SELECT * FROM post');
}
function getPost(id) {
  return db.query('SELECT * FROM post WHERE id = ?', [id]);
}

function save(post) {
  return db.query('INSERT INTO post (nome) VALUES (?)', [post.nome]);
}

function alterar(post) {
  return db.query('UPDATE post SET nome = ?  WHERE id = ?', [post.nome, post.id])
}

function excluir(post_id) {
  return db.query('DELETE FROM post WHERE id = ?', [post_id])
}

module.exports = {
  getAll,
  getPost,
  save,
  alterar,
  excluir
};


  