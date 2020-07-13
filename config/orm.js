const connection = require("./connection");

const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString, [tableInput], function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  // INSERT INTO burgers (burger_name, devoured) 
  //   VALUES ("Veggie Burger", false);
  insertOne: (burger_name, devoured, cb) => {
    console.log("orm: " + burger_name, devoured);
    let queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);';
    // let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES (${burger_name}, ${devoured});`;
    connection.query(queryString, [burger_name, devoured], (err, res) => {
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;