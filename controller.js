const firebaseApp = require("./db"); // reference to our db
const { getStorage, ref, uploadBytes } = require("firebase/storage");

const storage = getStorage();

// Add Image to Storage and return the file path
const addImage = async (req, res) => {
  try {
    // Grab the file
    const file = req.file;
    // // Format the filename
    console.log("file", file);
    const timestamp = Date.now();
    const name = file.originalname.split(".")[0];
    const type = file.originalname.split(".")[1];
    const fileName = `${name}_${timestamp}.${type}`;
    const storageRef = ref(storage, fileName);

    const snapshot = await uploadBytes(storageRef, req.file.buffer);

    res.json(snapshot);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
module.exports = {
  addImage,
};
