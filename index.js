import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


var app = express();


app.use(bodyParser.json({ limit: "40mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://2ingweb:2ingweb@cluster0.l4xvlhw.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5030;

mongoose.connect(CONNECTION_URL,  {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server runnig on port: ${PORT}`) ))
.catch((error) => console.log(error.message) );


mongoose.set('strictQuery', false);

