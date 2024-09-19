const express = require('express');
const router = express.Router();
const checklistItemController = require('../controllers/checklistItem.controller');
const authenticateToken = require('../middleware/auth.middleware');

// Route to get all items by checklistId (protected)
router.get('/:checklistId/item', authenticateToken, checklistItemController.getChecklistItems);

// Route to create a new checklist item in a checklist (protected)
router.post('/:checklistId/item', authenticateToken, checklistItemController.createChecklistItem);

// Route to update checklist item status (protected)
router.put('/item/:itemId/status', authenticateToken, checklistItemController.updateItemStatus);

// Route to delete a checklist item by itemId (protected)
router.delete('/item/:itemId', authenticateToken, checklistItemController.deleteChecklistItem);

// Route to rename a checklist item by itemId (protected)
router.put('/item/:itemId/name', authenticateToken, checklistItemController.renameChecklistItem);

module.exports = router;
