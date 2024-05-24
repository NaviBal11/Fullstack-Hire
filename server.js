import express from "express";
import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function start() {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const client = new MongoClient(uri);

  try {
    await client.connect(); //Connection Created

    const db = client.db("Employees"); //Getting the Employees database

    //Displaying all profiles
    app.get("/api/profiles", async (req, res) => {
      const profiles = await db.collection("profiles").find({}).toArray();
      res.json(profiles);
    });

    //Adding new profile
    app.post("/api/profiles", async (req, res) => {
      const { fullname, dob, position } = req.body;
      const name = await db
        .collection("profiles")
        .findOne({ fullname: fullname });
      if (name) {
        res.status(400);
        throw new Error("Name already exists");
      } else {
        const profile = await db
          .collection("profiles")
          .insertOne({ fullname: fullname, dob: dob, position: position });

        res.json("Profile successfully added");
      }
    });

    //Editing a profile with id
    app.put("/api/profiles/:profileId", async (req, res) => {
      const profileId = new ObjectId(req.params.profileId);
      const { fullname, dob, position } = req.body;

      const existingProfile = await db
        .collection("profiles")
        .findOne({ _id: profileId });

      if (!existingProfile) {
        res.status(404).json({ error: "Profile not found" });
        return;
      }

      // Update profile data
      const updatedProfile = await db
        .collection("profiles")
        .updateOne(
          { _id: profileId },
          { $set: { fullname: fullname, dob: dob, position: position } }
        );

      res.json("Profile successfully updated");
    });

    //Deleting a profile
    app.delete("/api/profiles/:profileId", async (req, res) => {
      const profileId = new ObjectId(req.params.profileId);
      const profiles = await db
        .collection("profiles")
        .deleteOne({ _id: profileId });
      res.json("profile deleted");
    });

    app.get("/", (req, res) => {
      app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
      res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit the process with failure
  }
}
start();
