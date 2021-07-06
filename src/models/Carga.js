const { Schema, model } = require('mongoose');

const cargaSchema = new Schema({
    to: { type: String, default: '@Consumidor final' },
    litros_ch: { type: Number, require: true },
    price: { type: Number },
    n_ticket: { type: String, default: '0000-0000000' },
    product: { type: String, default: 'Diesel-Premium' },
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('Carga', cargaSchema);