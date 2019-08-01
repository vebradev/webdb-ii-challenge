const express = require("express");
const db = require("../data/dbConfig");
const router = express.Router();

// HELPERS
function getAllCars() {
  return db("cars");
}

function addNewCar({ vin, make, model, mileage }) {
  return db("cars").insert({ vin, make, model, mileage });
}

// ENDPOINTS
router.get("/", async (req, res) => {
  const cars = await getAllCars();
  res.json(cars);
});

// POST
router.post("/", async (req, res) => {
  try {
    const { vin, make, model, mileage } = req.body;
    if (!vin || !make || !model || !mileage) {
      res.status(500).json({
        error: "All data must be provided."
      });
    } else {
      const newCar = await addNewCar({ vin, make, model, mileage });
      res.status(201).json(newCar);
    }
  } catch (error) {
    res.status(500).json({
      error: "Could not add new car."
    });
  }
});

module.exports = router;
