// registro
// login
const {
  register,
  login,
  getProductUser,
  viewOrderUser,
} = require('../controllers/auth.controller')

const { Router } = require('express')

const router = Router()

//router.METHOD // get,post, put, delete

router.post('/register', register)
router.post('/login', login)
router.get('/productcar/:id', getProductUser)
router.get('/vieworder/:id', viewOrderUser)

module.exports = router
