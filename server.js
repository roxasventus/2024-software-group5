const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/Issues', (req, res)=>{
    res.send(
        [
            {
              Title: '#1',
              Description: '10h',
              Reporter: '5h',
              ReportedDate: '2h',
              Comment: '0.0',
              History: 'milestone1',
            },
          
            {
              Title: '#2',
              Description: '10h',
              Reporter: '5h',
              ReportedDate: '2h',
              Comment: '0.0',
              History: 'milestone1',
            },
          
            {
              Title: '#3',
              Description: '10h',
              Reporter: '5h',
              ReportedDate: '2h',
              Comment: '0.0',
              History: 'milestone1',
            }
          
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));