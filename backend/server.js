import express from "express";
import pg from "pg";
import cors from "cors";
import axios from "axios";

const app=express();
const port=3000;
app.listen(3000,()=>
{
    console.log("server listening on port 3000");
})



