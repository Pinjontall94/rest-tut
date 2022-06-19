const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() );

app.listen(
  PORT,
  () => console.log(`She's alive! On http://localhost:${PORT} anyway :3`)
);


app.get('/tfmeme', (req, res) => {
  res.status(200).send({
    desc: 'An api for explaining transfem memes'
  })
});

app.post('/tfmeme/:id', (req, res) => {

  const { id } = req.params;
  const { meaning } = req.body;

  if (meaning === null || meaning === "") {
    res.status(418).send({ message: 'We need a logo! Think of something :P' })
  };

  res.send({
    meme: id,
    glossary: meaning
  });

});
