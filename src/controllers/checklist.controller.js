const db = require("../models");
const Checklist = db.Checklist;

exports.createChecklist = async (req, res) => {
    try {
        const { name } = req.body;
        const checklist = await Checklist.create({ name });
        res.status(201).send(checklist);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// src/controllers/checklist.controller.js
exports.getAllChecklists = async (req, res) => {
    try {
        console.log(req.user); // Debugging: Check if user info is present

        // Your logic here
        const checklists = await Checklist.findAll();
        res.status(200).send(checklists);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

exports.deleteChecklist = async (req, res) => {
    const { id } = req.params;

    try {
        // Find and delete the checklist by ID
        const checklist = await Checklist.findByPk(id);
        if (!checklist) {
            return res.status(404).send({ message: 'Checklist not found' });
        }

        await checklist.destroy(); // Delete the checklist

        res.status(200).send({ message: 'Checklist deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

