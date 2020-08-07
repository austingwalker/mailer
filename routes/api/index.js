const router = require("express").Router();
const emailRoutes = require("./email");


//Template routes
router.use("/email", emailRoutes);

module.exports = router;
