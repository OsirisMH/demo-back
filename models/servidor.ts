import express, { Application } from 'express';
import cors from 'cors';
import db from '../config/connection';

import usuarioRoutes from '../routes/usuario';
import { CONEXION_BD_EXITOSA } from '../config/mensajes';

class Servidor {
  private app : Application;
  private port: string;
  private apiPaths = {
    usuarios: '/api/usuarios'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '4000';

    /* Métodos */
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log(CONEXION_BD_EXITOSA);
    } catch (error: any) {
      throw new Error( error );
    }
  }

  middlewares() {
    /* CORS */
    this.app.use( cors() );

    /* Parseo del body */
    this.app.use( express.json() );

    /* Carpeta pública */
    this.app.use( express.static('public') );
  }

  routes() {
    this.app.use( this.apiPaths.usuarios, usuarioRoutes );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Servidor corriendo en puerto:', this.port);
    });
  }
}

export default Servidor;