const ListModel = require("../models/ListModel")

interface createList {
  body: {
    users: [],
    items: []
  }
}

interface result {
  send: Function
}

export const getLists = async (res: result) => {
  const lists = await ListModel.find({})

  return res.send(lists)
}

export const createList = (req: createList, res: result) => {
    const list = {
        users: req.body.users,
        items: req.body.items,
    };

    const newList = ListModel(list)

    newList.save()

    return res.send(list)
}
