const messages = require("../utilities/messages");

const message_create = (req, res) => {
  res.render("new", { title: "New Message" });
};

const message_create_post = (req, res) => {
  const { message, name } = req.body;
  messages.push({
    text: message,
    user: name,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = {
  message_create,
  message_create_post,
};
