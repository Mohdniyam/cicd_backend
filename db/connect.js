const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

async function connectToMongoDB() {
  const url = process.env.DATABASE; //
  const dbName = "test";

  try {
    const client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    console.log("Connected to MongoDB successfully");

    // Get a reference to the database
    const db = client.db(dbName);

    return db; // Return the database connection for further use
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // Handle the error appropriately in your application
  }
}

module.exports = connectToMongoDB;
