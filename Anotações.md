# Criar Servidor
### Importar as bibliotecas
 > import express from 'express';
 > import dotenv from 'dotenv';
 > import mustache from 'mustache-express';
 > import path from 'path';

 ### Configurar env
No servidor: iniciar configuração de ambiente
> dotenv.config();

Na Raiz criar pasta .env: 
> PORT=4000


 ### Configurar server e template engines
No servidor: 
    Iniciar servidor :
> const server = express ();

Configurar templates engines
> server.set('view engine', 'mustache');
>server.set('views', path.join(__dirname, 'views'));
> server.engine('mustache', mustache());

 Em src:
Criar pasta View

Na Raiz: 
Criar pasta public

No servidor:
Configurar arquivos estaticos
> server.use(express.static(path.join(__dirname, '../public')));

//Local para rotas

Colocar o servidor para rodar: 
> server.listen(process.env.PORT); 

## Criar Rotas 
 - Criar pasta routes em src
 - Criar arquivo index.ts em routes
 - Importar o router from 'express' em index
 - Iniciar as rotas: 
 > const router = Router();
 >router.get('/', (req: Request , res: Response) => {
 >   res.send("Teste legalzinhos")
 > });
 > export defalt router;

### Ativar a rota no servidor: 
 - importa a rota no servidor 
 > server.use(mainRoutes);
 - criar a pagina de erro 404: 
 > 

### Criar os controllers 

### Separar as views