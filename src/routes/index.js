const { v4: uuid } = require('uuid');

const { Router } = require('express');
const Carga = require('../models/Carga');

const router = Router();

router.get('/', async (req, res) => {
    const t_cargas = await Carga.find();
    res.render('index', { t_cargas });
});

router.post('/add', async (req, res) => {
    console.log("you are adding a new data")
    console.log(req.body);
    const carga = new Carga(req.body);
    
    await carga.save();
    // carga.product = 'Infinia'
    res.redirect('/');
});

router.get('/delete', async (req, res) => {
    // const carga= new Carga();
    await Carga.remove({}, ()=>{
        console.log("deleted!");
        res.redirect('/');
    });
});
module.exports = router;