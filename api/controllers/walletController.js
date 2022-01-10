const res = require('express/lib/response')
const { where } = require('sequelize/dist')
const database = require('../models')

class walletController{
    static async listarWallet(req, res){
        try {
            const TodasAsWallet = await database.Wallet.findAll()
            return res.status(200).json(TodasAsWallet)
        } catch (error) {
            return res.status(500).json(error.mensage)
        }
    }

    static async consultarWallet(req, res){
        const {id} = req.params
        try {
            const umaWallet = await database.Wallet.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(umaWallet)
            
        } catch (error) {
            return res.status(500).json(error.mensage)
        }
    }

    static async cadastrarWallet(req, res){
        const novaWallet = req.body
        try {
            const novaWalletCriada = await database.Wallet.create(novaWallet)
            return res.status(201).json(novaWalletCriada)
        } catch (error) {
            return res.status(500).json(error.mensage)
        }
    }

    static async atualizaWallet(req, res){
        const {id} = req.params
        const novaInfos = req.body  

        try {
            await database.Wallet.update(novaInfos, {where:{id:Number(id)}})
            const WalletAtualizado = await database.Wallet.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(201).json(WalletAtualizado)

        } catch (error) {
            return res.status(500).json(error.mensage)            
        }
    }


    static async apagaWallet(req, res){
        const {id} = req.params
        try{
            await database.Wallet.destroy( {where:{id:Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        }catch(error){
            return res.status(500).json(error.mensage)
        }

    }

}