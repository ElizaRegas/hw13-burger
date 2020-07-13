const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },
  insertOne: (burger_name, devoured, cb) => {
    orm.insertOne(burger_name, devoured, (res) => {
      cb(res);
    });
  }
};




// orm.updateOne(" ", " ");

module.exports = burger;