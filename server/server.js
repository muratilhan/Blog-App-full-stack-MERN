const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()
const multer = require('multer')
const authRoute = require('./routes/auth')
const path = require("path");
const userRoute = require('./routes/user')
const postsRoute = require('./routes/posts')
const categoryRoute = require('./routes/categories')

app.use(express.json())
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use('/auth',authRoute)
app.use('/user',userRoute)
app.use('/posts',postsRoute)
app.use('/categories',categoryRoute)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


// connect to mongo db
mongoose.connect("mongodb+srv://muratilhan16:muratilhan16@blogappcluster.tvoel.mongodb.net/?retryWrites=true&w=majority",{
})
    .then(() => {
        app.listen(3003, () => {
            console.log('connectedasdsa to mongoDB')
        })
    })
    .catch((err) => {
        console.log(err)
    })


