var connection = require("./connection");

var orm = {
  selectAll: (tableInput, colToSearch) => {
    var queryString = "SELECT * FROM ?? WHERE ??";
    connection.query(queryString, [tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  insertOne: (tableInput, colToSearch) => {
    var queryString = "SELECT * FROM ?? WHERE ??";
    connection.query(queryString, [tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  updateOne: (tableInput, colToSearch) => {
    var queryString = "SELECT * FROM ?? WHERE ??";
    connection.query(queryString, [tableInput, colToSearch], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
 
};

module.exports = orm;