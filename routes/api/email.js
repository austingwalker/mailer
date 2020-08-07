const router = require("express").Router();
const emailController = require("../../controllers/emailController");

// router.route("/:type")
//   .get(volunteerController.discern)
//   .post(volunteerController.create);


// Matches with "/api/volunteers/:id"
router
  .route("/")
  .post(emailController.findTemplate)



module.exports = router;
