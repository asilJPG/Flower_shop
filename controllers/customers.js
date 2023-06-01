const db = require("../config/db");

//get all customers
exports.getCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (error, result, fields) => {
    if (error) {
      console.log("Error retrieving customers:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
    // console.log(fields);
  });
};

//create a new customer
exports.createCustomer = (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO customers (name, email) values (?,?)",
    [name, email],
    (error, results) => {
      if (error) {
        console.log("Error creating customer:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log(results);
      res.json({
        message: "customer created successfully",
        flowerId: results.insertId,
      });
    }
  );
};
// get by id
exports.getCustomerbyId = (req, res) => {
  const customerId = req.params.id;
  db.query(
    "SELECT * FROM customers WHERE id = ?",
    [customerId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving customer:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (results.length == 0) {
        return res.status(404).json({ error: "customer not found" });
      }
      res.json(results[0]);
      // tut viberaet perviy potomushto on daetsa v massive
    }
  );
};
// update by id
exports.updateCustomer = (req, res) => {
  const customerId = req.params.id;
  const { name, email } = req.body;
  db.query(
    "UPDATE customers SET name = ?, email = ? where id=?",
    [name, email, customerId],
    (error) => {
      if (error) {
        console.log("Error retrieving customers:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ message: "customer successfully updated" });
    }
  );
};
// delete by id
exports.deleteCustomer = (req, res) => {
  const customerId = req.params.id;
  db.query("DELETE FROM customers WHERE id=?", [customerId], (error) => {
    if (error) {
      console.log("Error retrieving customer:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ message: "customer successfully deleted" });
  });
};
