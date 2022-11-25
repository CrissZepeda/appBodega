import express from "express";
import config from "./config.js";
import usuarioRoutes from "./routes/employee.routes.js";
import bodegaRoutes from "./routes/bodega.routes.js";
import editorialRoutes from "./routes/editorial.routes.js";
import libroRoutes from "./routes/libro.routes.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express(); // inicializar express
const __dirname = dirname(fileURLToPath(import.meta.url));

//Setting app
app.set("port", config.port);

// middleware
app.use(express.json()); // para que pueda trabajar con formato json
app.use(express.urlencoded({ extended: false })); // para que pueda trabajar con formularios

// hay que indicarle a la app que utilice las rutas creadas
app.use(usuarioRoutes);
app.use(bodegaRoutes);
app.use(editorialRoutes);
app.use(libroRoutes);

console.log(__dirname);
app.use(express.static(join(__dirname, "../../client/build")));

app.listen(config.port); // escuchar servidor en el puerto 3000
console.log("Server is running on port", config.port);
