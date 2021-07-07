const { Schema, model } = require('mongoose');

const cargaSchema = new Schema({
    to: { type: String, default: '@Consumidor final' },
    litros_ch: { type: Number, require: true },
    price: { type: Number },
    n_ticket: { type: String, default: '65a98fc4-8891-4f37-9b8d-000000000000' },
    product: { type: String, default: 'Diesel-Premium' },
    created_at: { type: Date, default: Date.now() }
});

module.exports = model('Carga', cargaSchema);