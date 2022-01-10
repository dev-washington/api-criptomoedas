const { Router } = require('express')
const walletController = require('../controllers/walletController')

const router = Router()

router.get('/wallet', walletController.listarWallet)
router.get('/wallet/:id', walletController.consultarWallet)
router.post('/wallet', walletController.cadastrarWallet)
router.put('/wallet/:id', walletController.atualizaWallet)
router.delete('/wallet/:id', walletController.apagaWallet)



module.exports = router