const express = require('express');
const app = express();
app.use(express.json());

const path = require('path');

const notes = []; //This is bad -- eventually we'll learn about databases { mogodb, postgres, mysql}

//POST - Create a note
app.post("/notes" , (req , res)=>{
    const note = req.body.note;
    notes.push(note);
     res.json({
        message: "Done!",
     })
})

//GET - get all notes 
app.get("/notes", (req, res)=>{
    res.json({
        notes
    })
})

app.get("/" , (req, res)=>{
    res.sendFile(path.join(__dirname, "/frontend/index.html"));
})


app.listen(3000);