const express = require("express");
const router = express.Router();
const bookcontroller = require("../controllers/book_controller")


router.get("/",bookcontroller.getAllBooks);
router.post("/",bookcontroller.addBook);
router.get("/:id",bookcontroller.getBook);
router.put("/:id",bookcontroller.updateBook);
router.delete("/:id",bookcontroller.deleteBook);

module.exports = router;