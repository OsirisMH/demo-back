import dotenv from 'dotenv';
import Servidor from './models/servidor';

dotenv.config();

const servidor = new Servidor();
servidor.listen();
