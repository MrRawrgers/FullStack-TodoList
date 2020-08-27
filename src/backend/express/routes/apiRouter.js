const apiRouter = require('express').Router();
const { indexTodo, addTodo, updateTodo, idTodo } = require('../controllers/Todo');

apiRouter.route('/')
    .get(indexTodo)
    .post(addTodo);

apiRouter.route('/update/:id')
    .post(updateTodo);

apiRouter.route('/:id')
    .get(idTodo);


module.exports = apiRouter;