import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js';
// const express = require('express')
const app = express();
app.use('/posts',postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL =
	"mongodb+srv://blog:blog123123@cluster0.o6lee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
	.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, console.log(`server running in port: ${ PORT }`))
	)
	.catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
