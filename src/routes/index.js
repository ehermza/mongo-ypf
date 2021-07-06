
const { Router } = require('express');
const Carga = require('../models/Carga');

const router = Router();

router.get('/', async (req, res) => {
    // res.send('hello world');
    // res.render('index');
    const t_cargas = await Carga.find();
    res.render('index', { t_cargas });
});

router.post('/', async (req, res) => {
    console.log("you are adding a new data")
    const carga = new Carga();

    carga.to = 'Comercial Oeste sa';
    carga.lts_charged = 20.35;
    carga.price = 2000;
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