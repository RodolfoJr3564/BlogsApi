const express = require('express');
const routes = require('./routes');

require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.use('/user', routes.user);
app.use('/login', routes.login);
app.use('/categories', routes.categories);
app.use('/post', routes.post);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
