const express = require('express');
const { resolve } = require('path');

const Database = require('./infra/Database');
const router = require('./Router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/public', express.static(resolve('public')));

app.use(router);

module.exports.listen = async (port = 3000) => {
  await Database.connect();
  return new Promise((resolve) => {
    app.listen(port, () => {
      console.info(`Dashboard running on http://localhost:${port}`);
      resolve();
    });
  });
};
