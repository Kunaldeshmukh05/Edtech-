const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());

const mongoURI = "mongodb://localhost:27017/amplify";
const dbname = "amplify";

const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
}

// Define your endpoints here
app.post('/register', async (req, res) => {
  try {
    const {name,mobileNumber,email,collegeName,education,passoutYear,dob,state,courses} = req.body; 
    const db = client.db(dbname);
    await db
    .collection("users")
    .insertOne({name,mobileNumber,email,collegeName,education,passoutYear,dob,state,courses} );
    res.status(201).json({ message: "You have signed up successfully" });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = client.db(dbname);

    // Insert data into the collection upon sign-in
    await db.collection("users").insertOne({ email, password, date: new Date() });

    return res.status(200).json({ message: "Sign In successful" });
  } catch (error) {
    console.error("Error signing in user:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToDatabase();
});
