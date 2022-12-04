const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
const port = process.env.PORT || 3000;

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = new twilio(accountSid, authToken);

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Express server for twilio');
});

app.get('/send-text', (req, res) => {
  const { recipient, textmessage } = req.query;
  //send text
  client.messages
    .create({
      body: textmessage,
      to: '+91' + recipient,
      from: process.env.twilioNumber,
    })
    .then((message) => console.log(message.body));
});
//http://localhost:4000
app.listen(port, () => console.log(`Running on Port ${port}`));
