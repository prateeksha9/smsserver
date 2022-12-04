const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
const port = process.env.PORT || 3000;

const accountSid = 'ACa50ed6342f695fa378936ad4d13afc51';
const authToken = '141b3642ac3768112c032e53a5bc3809';
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
      from: '+18647277013,
    })
    .then((message) => console.log(message.body));
});
//http://localhost:4000
app.listen(port, () => console.log(`Running on Port ${port}`));
