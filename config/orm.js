const connection = require("./connection");

const orm = {
  selectAll: (tableInput, cb) => {
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString, [tableInput], function(err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  // insertOne: (tableInput, colToSearch) => {
  //   var queryString = "SELECT * FROM ?? WHERE ??";
  //   connection.query(queryString, [tableInput, colToSearch], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },

  // updateOne: (tableInput, colToSearch) => {
  //   var queryString = "SELECT * FROM ?? WHERE ??";
  //   connection.query(queryString, [tableInput, colToSearch], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // }
 
};

module.exports = orm;