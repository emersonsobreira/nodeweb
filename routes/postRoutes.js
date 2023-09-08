const express = require('express')
const router = express.Router()


const PostController = require('../controllers/postController')

router.get('/index', PostController.lista)
router.get('/new', PostController.novo)
router.post('/add', PostController.salvar)
router.get('/view/:id', PostController.visualizar)
router.get('/edit/:id', PostController.edit)
router.post('/update', PostController.alterar)
router.get('/delete/:id', PostController.excluir)

module.exports = router
