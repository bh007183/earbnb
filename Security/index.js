const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

module.exports = {
  signIn: async function (args, user) {
    const match = await bcrypt.compare(args.password, user.password);
    if (!match) {
      throw new Error("Invalid Credentials!");
    }
    let token = await jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.JSON_SYDNEY,
      { expiresIn: "1hr" }
    );
    if (!token) {
      throw new Error("Issue generating token!");
    }
    return { token: token, user: { id: user.id, username: user.username, status: user.status } };
  },
  verify: async function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
   
    if (req.headers.authorization) {
      token = token.split(" ")[1];
    }

    if (!token) {
      return req;
    }

    try {
      const data = await jwt.verify(token, process.env.JSON_SYDNEY, { maxAge: "1hr" });
      req.user = data;
    } catch(err){
      console.log(err)
    }
    return req;
  },
};
