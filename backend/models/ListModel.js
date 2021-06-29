const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    users: Array,
    items: Array
});

const ListModel = mongoose.model("List", ListSchema)

module.exports = ListModel