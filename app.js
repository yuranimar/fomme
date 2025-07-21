const express = require('express');
const app = express();
const path = require('path');
const artesanoRoutes = require('./routes/artesano');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/artesano', artesanoRoutes);

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));