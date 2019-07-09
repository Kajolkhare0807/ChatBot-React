const express = require('express');

//importing body-parser
const bodyParser = require('body-parser');

const app = express();

//using body-parser for parsing data
app.use(bodyParser.json());

//adding routes to express app
require('./routes/dialogFlowRoutes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT);
