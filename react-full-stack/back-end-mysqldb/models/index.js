const dbConfig = require('../config/db-config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  pool: {
  max: dbConfig.pool.max,
  min: dbConfig.pool.min,
  acquire: dbConfig.pool.acquire,
  idle: dbConfig.pool.idle
}
})
const db = {}
db.sequelize = sequelize
db.models = {}
db.models.User = require('./User')(sequelize, Sequelize.DataTypes)
db.models.Comments = require('./Comments')(sequelize, Sequelize.DataTypes);
db.models.userRegForm = require('./userRegForm')(sequelize, Sequelize.DataTypes);

//Define associations
db.models.User.hasMany(db.models.Comments, {
  foreignKey: 'userId',
  onDelete: 'cascade'
});
db.models.Comments.belongsTo(db.models.User);

db.models.userRegForm.hasMany(db.models.User, {
  foreignKey: 'newUserId',
  onDelete: 'cascade'
});
db.models.User.belongsTo(db.models.userRegForm);
module.exports = db;
