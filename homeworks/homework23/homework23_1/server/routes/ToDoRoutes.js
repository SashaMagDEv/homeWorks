const express = require('express');
const Todo = require('../model/Todo');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Запит на видалення з ID:', req.params.id);
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
})

router.post('/create', async (req, res) => {
    try {
        const { title, completed } = req.body;
        const newList = new Todo({ title, completed });
        const savedList = await newList.save();
        res.json(savedList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const deletedTodo = await Todo.findByIdAndDelete(todoId);

        if (!deletedTodo) {
            return res.status(404).json({ message: 'Завдання не знайдено' });
        }

        res.status(200).json({ message: 'Завдання успішно видалено' });
    } catch (err) {
        console.error('Помилка при видаленні:', err);
        res.status(500).json({ message: 'Помилка при видаленні завдання' });
    }
});

module.exports = router;
