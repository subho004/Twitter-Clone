const mongoose = require("mongoose");
const dotenv = require("dotenv");
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useUnifiedTopology', true);

dotenv.config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("database connection successful");
      })
      .catch((err) => {
        console.log("database connection error " + err);
      });
  }
}

module.exports = new Database();
