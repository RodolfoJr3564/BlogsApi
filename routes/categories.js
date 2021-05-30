const express = require('express');
const controller = require('../controller');
const middleware = require('../middlewares');

const categorieRouter = express.Router();

categorieRouter.route('/')
  .post(middleware.validation.JWT, controller.categories.create);

categorieRouter.use(middleware.error);

module.exports = categorieRouter;
