'use strict';
const chatbot = require('../chatbot/chatbot')


// passing app to this file
module.exports = app => {

app.get('/', (req,res) => {
res.send({'hello':'kk'});
});

//route for text query
app.post('/api/df_text_query', async (req,res) => {
   let responses = await  chatbot.textQuery(req.body.text,req.body.parameters);
res.send(responses[0].queryResult);}
  );
  app.post('/api/df_event_query', async (req, res) => {
        let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
        res.send(responses[0].queryResult);}
);
  }
