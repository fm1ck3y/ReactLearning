
const express = require('express')
const knex = require('knex');
const multer = require('multer');
require('dotenv').config();

const imageUpload = multer({
    dest: 'images',
});

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE,
    },
});

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(express.static('build'));

// MEAN, MERN
// Mongo, Express, Angular, Nodejs
// Mongo, Express, React, Nodejs

app.get('/news', function(req, res) {
    db.select('*')
        .from('posts')
        .orderBy('date_create', 'desc')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
})

app.post('/news/add', function(req, res) {
  let post = {
    description: req.body.description,
    title: req.body.title,
    author: req.body.author,
    date_create: req.body.date_create,
    image: req.body.image
  }
  db('posts')
  .insert(post)
  .then(() => {
      console.log('Post Added');
      return res.json({ msg: 'Post Added' });
  })
  .catch((err) => {
      console.log(err);
  });
})

app.post('/image', imageUpload.single('image'), (req, res) => {
    console.log(req.file)
    res.json(req.file); 
});

app.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    const dirname = path.resolve();
    const fullfilepath = path.join(dirname, 'images/' + filename);
    return res.sendFile(fullfilepath);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})