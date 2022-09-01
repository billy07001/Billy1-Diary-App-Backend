const Database = require("@replit/database");
const users = new Database();

const allusers = [
  {
    "userID": 0,
    "userName": "Billy Lai",
    "userEmail": "abc@abc.com",
    "userPassword": "abc"
  }
];

exports.initusersdb = () => {
  for (var i = 0; i < allusers.length; i++) {
    users.set(i, allusers[i]).then(() => {});
    console.log("initial db user:" + JSON.stringify(allusers[i]))
  }
};