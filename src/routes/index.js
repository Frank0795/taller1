import { application, json, Router } from "express";

import fetch from "node-fetch";
const fe = fetch
const router = Router();
//? Creamos la ruta Principal
router.get("/", (req, res) => {
  res.render("index");
  //! Render nuestro sitio web
});

//! Crear nuevas rutas

router.get("/contacto", (req, res) => {
  res.render("contacto");
  //! Render nuestro sitio web
});

router.use("/pokemon",(req,res) =>{
 
  res.render("pokemon")
  fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then(promesaFetch => promesaFetch.json()).then(contenido => console.log(contenido))
  console.log("------Nueva Consulta------")

})




export default router;
