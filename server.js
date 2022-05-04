
const express = require('express')
const knex = require('knex');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const imageUploadPath = path.join(path.resolve(), '/images');
let imageName = "";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    imageName = `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`
    cb(null, imageName)
  }
})
const imageUpload = multer({storage: storage})

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

app.get('/news/:page', function(req, res) {
    const { page } = req.params
    db.select('*')
        .from('posts')
        .paginate({
          perPage: 10,
          currentPage: page
        })
        .orderBy('date_create', 'desc')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
})

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
  console.log(post);
  db('posts')
  .insert(post)
  .then(() => {
      console.log('Post Added');
      return res.json(post);
  })
  .catch((err) => {
      console.log(err);
  });
})

app.post('/image', imageUpload.array("my-image-file"), (req, res) => {
    res.send({ filename: imageName});
})

app.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    const dirname = path.resolve();
    const fullfilepath = path.join(dirname, 'images/' + filename);
    return res.sendFile(fullfilepath);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})