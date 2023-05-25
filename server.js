const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/videos', (req, res) => {
    connection.query('SELECT * FROM videos', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los videos' });
      } else {
        res.json(results);
      }
    });
  });

app.post('/videos', (req, res) => {
    //console.log(req)
    const { title, thumbnail, description,id } = req.body;
    const query = 'INSERT INTO videos (title, thumbnail, description, link) VALUES (?, ?, ? ,?)';
    connection.query(query, [title, thumbnail, description,id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al guardar el video' });
      } else {
        const insertedId = results.insertId;
        const insertedVideo = { id: insertedId, title, thumbnail, description };
        res.json(insertedVideo);
      }
    });
  });



  

app.delete('/videos/:id', (req, res) => {
  const videoId = req.params.id;
  const query = 'DELETE FROM videos WHERE id = ?';
  connection.query(query, [videoId], (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el video' });
    } else {
      res.json({ message: 'Video eliminado correctamente' });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});