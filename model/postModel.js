const db = require('../db/database'); // Suponha que este arquivo contém a configuração da conexão com o banco de dados

function getAll() {
  return db.query('SELECT * FROM posts');
}

function getPost(id) {
  return db.query('SELECT * FROM posts WHERE id = ?', [id]);
}

function save(post) {
  return db.query('INSERT INTO posts (titulo, texto) VALUES (?, ?)', [post.titulo, post.texto]);
}

function alterar(post) {
  return db.query('UPDATE posts SET titulo = ?, texto = ? WHERE id = ? ', [post.titulo, post.texto, post.id])
}

function excluir(post_id) {
  return db.query('DELETE FROM posts WHERE id = ?', [post_id])
}
module.exports = {
  getAll,
  getPost,
  save,
  alterar,
  excluir
};


  