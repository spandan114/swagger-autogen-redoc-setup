const app = require("express")();
const path = require("path");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require("./swagger_output.json");

app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerFile);
});

app.get("/docs", (req, res) => {
  res.sendFile(path.join(__dirname, "redoc.html"));
});

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints')(app)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port port ${port}`));
