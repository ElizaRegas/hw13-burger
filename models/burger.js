const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  }
};

// orm.insertOne(" ", " ");

// orm.updateOne(" ", " ");

module.exports = burger;