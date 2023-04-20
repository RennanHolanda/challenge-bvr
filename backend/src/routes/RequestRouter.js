const express = require("express");
const router = express.Router();
const RequestController = require("../controllers/RequestController");

router.get("/requests", RequestController.index);
router.post("/add_request", RequestController.store);
router.put("/request/:id/edit_request", RequestController.update);
router.delete("/request/:id/delete", RequestController.destroy);

module.exports = router;
