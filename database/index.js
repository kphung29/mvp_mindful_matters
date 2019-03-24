const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongo connected!');
});

const date = new Date();
const newDate = date.toDateString();

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  mood: String,
  moodCount: Number,
  activity: String,
  dailyEntry: String,
  date: { type: String, default: newDate },
});

const Users = mongoose.model('Users', userSchema);

module.exports = db;
module.exports = Users;