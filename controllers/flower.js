const db = require("../config/db");

//get all flowers
exports.getAllFlowers = (req, res) => {
  db.query("SELECT * FROM flowers", (error, result, fields) => {
    if (error) {
      console.log("Error retrieving flowers:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
    // console.log(fields);
  });
};

//create a new flower
exports.createFlower = (req, res) => {
  const { name, color, price } = req.body;
  db.query(
    "INSERT INTO flowers (name, color, price) values (?,?,?)",
    [name, color, price],
    (error, results) => {
      if (error) {
        console.log("Error creating flowers:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log(results);
      res.json({
        message: "flower created successfully",
        flowerId: results.insertId,
      });
    }
  );
};

exports.getFlowerbyId = (req, res) => {
  const flowerId = req.params.id;
  db.query(
    "SELECT * FROM flowers WHERE id = ?",
    [flowerId],
    (error, results) => {
      if (error) {
        console.log("Error retrieving flowers:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (results.length == 0) {
        return res.status(404).json({ error: "flower not found" });
      }
      res.json(results[0]);
      // tut viberaet perviy potomushto on daetsa v massive
    }
  );
};

exports.updateflower = (req, res) => {
  const flowerId = req.params.id;
  const { name, color, price } = req.body;
  db.query(
    "UPDATE flowers SET name = ?, color = ?, price = ? where id=?",
    [name, color, price, flowerId],
    (error) => {
      if (error) {
        console.log("Error retrieving flowers:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ message: "Flower successfully updated" });
    }
  );
};
exports.deleteflower = (req, res) => {
  const flowerId = req.params.id;
  db.query("DELETE FROM flowers WHERE id=?", [flowerId], (error) => {
    if (error) {
      console.log("Error retrieving flowers:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json({ message: "Flower successfully deleted" });
  });
};
