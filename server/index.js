const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/router');
const PORT = 3001;

const corsOption = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOption));
app.use('/', router);

app.get('/', (req, res) => {});

const server = app.listen(PORT, () => console.log(`Server running in ${PORT}`));
