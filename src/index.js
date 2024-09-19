// src/index.js
require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const checklistRoutes = require('./routes/checklist.routes');
const checklistItemRoutes = require('./routes/checklistItem.routes');

app.use(express.json());

// Use auth routes
app.use('/auth', authRoutes);
app.use('/checklist', checklistRoutes);
app.use('/api/checklist', checklistItemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
