const cart = require("./cart/cartRoutes");
//const urlPrefix = "/api/v1"
module.exports = (app) => {
  // Declare Routes
  app.use("/cart", cart)
  
};
