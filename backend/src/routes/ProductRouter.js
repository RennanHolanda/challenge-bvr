const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/products", ProductController.index);
router.post("/add_product", ProductController.store);
router.put("/product/:id/edit_product", ProductController.update);
router.delete("/product/:id/delete", ProductController.destroy);

module.exports = router;
