require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const todoRoutes = require('./routes/ToDoRoutes')

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes);

app.use(express.static(path.join(__dirname, '../src')));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
    console.log(`🚀 Сервер запущено на http://localhost:${PORT}`);
});
