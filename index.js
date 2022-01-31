const express = require("express");
const cors = require("cors");

const albums = require("./albums.json");
const photos = require("./photos.json");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.get("/api/albums", (req, res) => {
  res.json(albums);
});

app.get("/api/albums/:id", (req, res) => {
  const id = req.params.id;
  const album = albums.find((album) => album.id === +id);
  res.json(album);
});

app.get("/api/albums/:id/photo", (req, res) => {
  const id = req.params.id;
  const albumPhotos = photos.filter((photo) => photo.albumId === +id);
  console.log(albumPhotos);
  res.json(albumPhotos);
});

app.get("/api/photos", (req, res) => {
  res.json(photos);
});

app.get("/api/photos/:id", (req, res) => {
  const id = req.params.id;
  const photo = photos.find((photo) => photo.id === +id);
  res.json(photo);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
