const db = require('../models');
const ChecklistItem = db.ChecklistItem;
const Checklist = db.Checklist;

exports.createChecklistItem = async (req, res) => {
    const { checklistId } = req.params;
    const { itemName } = req.body;

    if (!itemName) {
        return res.status(400).json({ error: 'Item name is required' });
    }

    try {
        // Ensure checklist exists before creating a checklist item
        const checklist = await Checklist.findByPk(checklistId);
        if (!checklist) {
            return res.status(404).json({ error: 'Checklist not found' });
        }

        // Create the checklist item
        const newItem = await ChecklistItem.create({
            item_name: itemName,
            checklist_id: checklistId, // Ensure the correct checklist ID is passed
        });

        res.status(201).json({ message: 'Checklist item created successfully', item: newItem });
    } catch (error) {
        console.error('Error creating checklist item:', error.message);
        res.status(500).json({ error: 'Failed to create checklist item', details: error.message });
    }
};


// Get all Checklist Items by Checklist ID
exports.getChecklistItems = async (req, res) => {
    const { checklistId } = req.params;

    try {
        const items = await ChecklistItem.findAll({ where: { checklistId } }); // Using correct field name `checklistId`
        res.status(200).json({ items });
    } catch (error) {
        console.error('Error retrieving checklist items:', error.message);
        res.status(500).json({ error: 'Failed to retrieve checklist items' });
    }
};

// Update Checklist Item status (completed or pending)
exports.updateItemStatus = async (req, res) => {
    const { checklistId, itemId } = req.params;
    const { status } = req.body;

    // Assuming `status` is a boolean (true for completed, false for pending)
    if (typeof status !== 'boolean') {
        return res.status(400).json({ error: 'Invalid status value' });
    }

    try {
        await ChecklistItem.update({ completed: status }, { where: { id: itemId, checklistId } }); // Using correct field names
        res.status(200).json({ message: 'Checklist item status updated successfully' });
    } catch (error) {
        console.error('Error updating item status:', error.message);
        res.status(500).json({ error: 'Failed to update item status' });
    }
};

// Delete Checklist Item by ID
exports.deleteChecklistItem = async (req, res) => {
    const { checklistId, itemId } = req.params;

    try {
        await ChecklistItem.destroy({ where: { id: itemId, checklistId } }); // Ensure both checklistId and itemId match
        res.status(200).json({ message: 'Checklist item deleted successfully' });
    } catch (error) {
        console.error('Error deleting checklist item:', error.message);
        res.status(500).json({ error: 'Failed to delete checklist item' });
    }
};

// Rename Checklist Item by ID
exports.renameChecklistItem = async (req, res) => {
    const { checklistId, itemId } = req.params;
    const { itemName } = req.body;

    if (!itemName) {
        return res.status(400).json({ error: 'Item name is required' });
    }

    try {
        await ChecklistItem.update({ itemName }, { where: { id: itemId, checklistId } }); // Use correct field names
        res.status(200).json({ message: 'Checklist item renamed successfully' });
    } catch (error) {
        console.error('Error renaming checklist item:', error.message);
        res.status(500).json({ error: 'Failed to rename checklist item' });
    }
};
