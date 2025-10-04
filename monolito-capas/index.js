const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido al sistema de gestion academica por capas");
});


const studentsRoute = require("./routes/students");
app.use("/students", studentsRoute);

const coursesRoute = require("./routes/courses");
app.use("/courses",coursesRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

