const express = require('express')
const router = express.Router()


const UserController = require('../controllers/userController')

router.get('/index', UserController.lista)
router.get('/new', UserController.novo)
router.post('/add', UserController.salvar)
router.get('/view/:id', UserController.visualizar)
router.get('/edit/:id', UserController.edit)
router.post('/update', UserController.alterar)
router.get('/delete/:id', UserController.excluir)


module.exports = router