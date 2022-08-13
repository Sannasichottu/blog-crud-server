import express from "express";
import mongoose from 'mongoose';
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//User
app.use("/api/user",router);
const PORT = process.env.PORT || 5000;
//Blog
app.use("/api/blog",blogRouter)
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@clusters.k8lwf.mongodb.net/blogcurd?retryWrites=true&w=majority`)
.then(() => app.listen(PORT))
.then(() => 
console.log(`Connected to Database and Listening to Loalhost ${PORT}`)
)
.catch((err) => console.log(err));
