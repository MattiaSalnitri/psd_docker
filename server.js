const express = require('express');
const math =require('math');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

id =math.random();

// App
const app = express();
app.get('/', (req, res) => {
    
    res.send('Hello world\n' + '<br>id: ' + id+'\n');
});




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);