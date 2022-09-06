import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.js";

const app = express();

app.use(indexRoutes); //Habilitamos el index.js export
//! La forma dinamica de poder tener una ruta absoluta
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

// Creamos el motor de plantillas de  ejs
//? Nos permite extender el html y aplicar logica
//? logica de programación pero al final todo se
//? transforma en html puro y es enviado al navegador
//! ES HTML CON CARACTERISTICAS EXTRAS
app.set("view engine", "ejs");
// * Configuramos donde van a estar las vistas con app.set
app.set("views", join(__dirname, "views"));
//! join se utiliza para concatenar independiente del S.O
console.log(join(__dirname, "views"));
app.use(express.static(join(__dirname, 'public')));
console.log(join(__dirname, "public")); 
app.listen(8000);
console.log("Servidor corriendo en el puerto ", 8000);

//! error 404
app.get('*', function(req, res){
    res.render("404");
  });