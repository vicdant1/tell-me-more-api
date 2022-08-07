require("dotenv").config();
const Express = require("express");
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const app = new Express();

const ProfessoresRoutes = require('./routes/professorRoutes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/professores', ProfessoresRoutes);

app.listen(PORT || 3000, () => {
  console.log("Server is running on port " + (PORT || 3000));
});
