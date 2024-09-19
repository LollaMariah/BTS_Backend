const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js'); // Load the config

// Create a new Sequelize instance
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Import models and add to db
db.User = require('./user.model.js')(sequelize, Sequelize);
db.Checklist = require('./checklist.model.js')(sequelize, Sequelize);
db.ChecklistItem = require('./checklistItem.model.js')(sequelize, Sequelize);

// If you have associations, add them here
db.Checklist.hasMany(db.ChecklistItem, { foreignKey: 'checklistId' });
db.ChecklistItem.belongsTo(db.Checklist, { foreignKey: 'checklistId' });

module.exports = db;
