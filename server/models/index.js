const Sequelize = require('sequelize');
const env = 'development';
// const config = require('../config/config.json')[env];
require('dotenv').config();
const DB_URL = process.env.DB_URL;
console.log(DB_URL, 'asdfasdfsadf');

const sequelize = new Sequelize(DB_URL, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true // 예를들어 post, posts의 테이블 2개가 생성
  }
});
sequelize.authenticate().then(() => {
  console.log('DB connected Successful');
}).catch(e => {
  console.error('errorE', e);
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);

db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);

module.exports = db;
// export default sequelize;

