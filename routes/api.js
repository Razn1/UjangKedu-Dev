const UserController = require('../controllers/UserController');
//Routing API disebut endpoint

const express = require("express");
const KomentarController = require('../controllers/KomentarController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello Express");
});

router.get("/user", UserController.index);
router.get("/user/:id", UserController.show);
router.post("/user", UserController.store);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.destroy);
router.get("/komentar", KomentarController.index);
router.post("/komentar", KomentarController.store);
router.delete("/komentar/:id", KomentarController.destroy);


module.exports = router;