const ListModel = require("../models/ListModel")

exports.getLists = async (req, res) => {
  const lists = await ListModel.find({})

  return res.send(lists)
}

exports.createList = (req, res) => {
    const list = {
        users: req.body.users,
        items: req.body.items,
    };

    const newList = ListModel(list)

    newList.save()

    return res.send(list)
}