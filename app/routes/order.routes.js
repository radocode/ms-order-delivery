module.exports = app => {
    const orders = require("../controllers/order.controller.js");

    // Create a new Order
    app.post("/orders", orders.create);

    // Retrieve all Orders
    app.get("/orders", orders.findAll);

    // Retrieve all ongoing Orders
    app.get("/ordersOngoing", orders.findAllOngoing);

    // Retrieve a single Order with orderId
    app.get("/orders/:orderId", orders.findOne);

    // Update a Order with orderId
    app.put("/orders/:orderId", orders.update);

    // Delete a Order with orderId
    app.delete("/orders/:orderId", orders.delete);

    // Create a new Order
    app.delete("/orders", orders.deleteAll);
};