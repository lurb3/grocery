const ItemModel = require("../models/ItemModel")
exports.getItems = async (req, res) => {
  const items = await ItemModel.find({})

  return res.send(items)
}

exports.createItem = (req, res) => {
    const item = {
        name: req.body.name,
        categories:req.body.categories
    };

    const newItem = ItemModel(item)

    newItem.save()

    return res.send(item)
}