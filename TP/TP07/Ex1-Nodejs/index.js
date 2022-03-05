const express = require('express')
const { readFile } = require('fs');
const app = express()

app.get('/', function (req, res) {
    readFile('./Book.html', 'utf-8', (err, html)=>{
        if(err)
            res.status(500).send("Error");
        res.send(html)
    })
});

app.get('/detail', function (req, res) {
    // res.send("Detail page");
    readFile('./Detail.html', 'utf-8', (err, html)=>{
        if(err)
            res.status(500).send("Error");
        res.send(html)
    })
});

app.listen(3000, () => {
    console.log("Your app is available on http://localhost:3000");
});