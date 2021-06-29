const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    image: String,
    categories: Array
});

const ItemModel = mongoose.model("Item", ItemSchema)

module.exports = ItemModel