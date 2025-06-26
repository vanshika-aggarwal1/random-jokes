import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", async (req, res) => {
  try {
    const api =
      "https://v2.jokeapi.dev/joke/Any?safe-mode&type=single&amount=6";
    const result = await axios.get(api);

    res.render("index.ejs", { jokes: result.data.jokes });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

module.export = app;
