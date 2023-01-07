const express = require("express");
const fs = require("fs");
const path = require("path");
const dbData = require("./db/db.json");

const app = express();
const PORT = 3000;

//middleware for parsing json and urlencoded data
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});


// returns db.json file to the user --> Check with TA
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      //// Convert string into JSON object
      const parsedTitles = JSON.parse(data);
      return res.json(parsedTitles)
    }
  });
});

// Writes an entry into dbData
app.post("/api/notes", (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} was received to add a note`);

  // Prepare a response object to send back to the client
  const { title, text } = req.body;

  //Check if there is anything in the response body
  if (title && text) {
    const newTitle = {
      title,
      text,
    };
    // Obtain existing titles
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        //// Convert string into JSON object
        const parsedTitles = JSON.parse(data);
        // Add a new title
        parsedTitles.push(newTitle);
        //Write updated titles back to the file
        fs.writeFile(
          "./db/db.json",
          JSON.stringify(parsedTitles, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info("Successfully updated reviews!")
        );
      }
    });

    const response = {
      status: "success",
      body: newTitle,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting review");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
}); 



app.listen(PORT, () => console.log(`The server is listening to port ${PORT}`));
