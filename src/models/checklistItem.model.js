// models/checklistItem.model.js
module.exports = (sequelize, Sequelize) => {
    const ChecklistItem = sequelize.define('checklist_items', {
        item_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        checklist_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'checklists',
                key: 'id'
            }
        }
    }, {
        timestamps: true, // Automatically includes createdAt and updatedAt
        underscored: false // Use camelCase for column names (createdAt, updatedAt)
    });

    return ChecklistItem;
};
