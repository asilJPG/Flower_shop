const db = require("../config/db");

//get all customers
exports.getOrders = (req, res) => {
  db.query("SELECT * FROM orders", (error, result, fields) => {
    if (error) {
      console.log("Error retrieving orders:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
    // console.log(fields);
  });
};

//create a new customer
exports.createorder = (req, res) => {
  const { customer_id, flower_id, quantity } = req.body;
  db.query(
    "INSERT INTO orders (customer_id, flower_id, quantity) values (?,?,?)",
    [customer_id, flower_id, quantity],
    (error, results) => {
      if (error) {
        console.log("Error creating order:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log(results);
      res.json({
        message: "Order created successfully",
        orderId: results.insertId,
      });
    }
  );
};
// get by id
exports.getOrderbyId = (req, res) => {
  const orderId = req.params.id;
  db.query("SELECT * FROM orders WHERE id = ?", [orderId], (error, results) => {
    if (error) {
      console.log("Error retrieving order:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    if (results.length == 0) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(results[0]);
    // tut viberaet perviy potomushto on daetsa v massive
  });
};
// update by id
exports.updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { customer_id, flower_id, quantity } = req.body;
  db.query(
    "UPDATE orders SET customer_id = ?, flower_id = ?, quantity = ? where id=?",
    [customer_id, flower_id, quantity, orderId],
    (error) => {
      if (error) {
        console.log("Error retrieving order:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ message: "Order successfully updated" });
    }
  );
};
// delete by id
exports.deleteOrder = (req, res) => {
  const orderId = req.params.id;
  db.query("DELETE FROM orders WHERE id=?", [orderId], (error) => {
    if (error) {
      console.log("Error retrieving order:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ message: "Order successfully deleted" });
  });
};
