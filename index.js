const express = require('express');

const app = express();
 
app.get('/', (req,res) => res.send('Mariana cabrita tanto pula quanto grita'));

app.listen(3000);