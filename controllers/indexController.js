const messages = require("../utilities/messages");

const messageboard_index = (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
};

const message_details = (req, res) => {
  const index = req.params.index;
  const message = messages[index];
  res.render("singleMessage", { title: "Single Message", message });
};

module.exports = {
  messageboard_index,
  message_details,
};
