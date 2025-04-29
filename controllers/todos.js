const Todo = require("../model/todo");
const todoutils = require('../utils/todos');

exports.getIndex = (req, res) => {
    todoutils.getCompleteTodos((completedTodos) => {
        todoutils.getRemainingTodos((remainingTodos) => {

            Todo.fetchAll((todos) => {
                res.render("index", {
                    pageTitle: "کارهای روزمره",
                    todos,
                    completedTodos,
                    remainingTodos,
                });
            });
        })
    })
};
