const express =require ("express");
const app = express();
const port =3000;

app.use(express.json());

//persitences

let students = [];
let courses = [];

// Routes
app.get("/",(req ,res) => {
    res.send("Bienvenido al sistema de gestion academica");

})  
// 📌 Ruta para agregar un estudiante
app.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).send( `Estudiante ${newStudent.name} registrado correctamente`);
});

// 📌 Ruta para listar todos los estudiantes
app.get("/students", (req, res) => {
    res.json(students);
});

// 📌 Ruta para agregar un curso
app.post("/courses", (req, res) => {
    const newCourse = req.body;
    courses.push(newCourse);
    res.status(201).send(`Curso  ${newCourse.name} agregado correctamente`);
});

// 📌 Ruta para listar todos los cursos
app.get("/courses", (req, res) => {
    res.json(courses);
});

// Inicio del servidor Express
app.listen(port,() =>{
    console.log( `server running on http://localhost:${port}` );
})