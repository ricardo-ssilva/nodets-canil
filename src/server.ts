import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'

//inicia a configuração do ambiente
dotenv.config();

//Inicia o servidor com express
const server = express();

//Configura a template engine e as paths
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configurar arquivos estaticos
server.use(express.static(path.join(__dirname, '../public')));

//Rotas
server.use(mainRoutes);

server.use((req, res)=> {
    res.render('pages/404');
})

server.listen(process.env.PORT);