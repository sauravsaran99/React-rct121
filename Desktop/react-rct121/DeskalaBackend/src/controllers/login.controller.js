
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
 
dotenv.config();
const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
var newToken = (user) => {
    return jwt.sign({ user }, "sauravkumar99@gmail.com");
  };

  router.post("",async (req, res) => {
    try {

      const user = await User.findOne({ email: req.body.email });
          
  
      if (!user) {
        return res.send({ mess: "Either email or password is incorrect" });
      }
      const match = user.checkPassword(req.body.password);
      if (!match) {
        return res.send({messa: "Either email or password is incorrect" });
      }
      const Token = newToken(user);

      return(res.send({token:Token,id:user._id}))
    } catch (err) {
      res.send({ msg: err.message });
    }
  }) ;

  module.exports = router;
