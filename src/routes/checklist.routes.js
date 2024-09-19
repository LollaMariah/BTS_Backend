// src/routes/checklist.routes.js
const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklist.controller');
const authenticateToken = require('../middleware/auth.middleware');

// Route to create a new checklist (protected)
router.post('/', authenticateToken, checklistController.createChecklist);

// Route to get all checklists (protected)
router.get('/', authenticateToken, checklistController.getAllChecklists);

// Route to delete a checklist by ID (protected)
router.delete('/:id', authenticateToken, checklistController.deleteChecklist);

module.exports = router;
