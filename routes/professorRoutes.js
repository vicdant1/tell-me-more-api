const Express = require("express")
const router = Express.Router();
const professorController = require("../controllers/professorController");

router.get('/', professorController.getProfessores);


module.exports = router;