const express = require('express');
const PushNotifications = require('@pusher/push-notifications-server');

const app = express();
const port = 3000;
const beamsClient = new PushNotifications({
  instanceId: 'beb6f539-ed11-4a61-a2ea-845292c64db1',
  secretKey: 'FBA6DBEF6E9CE11B8D17392752163A09498252C67CEA6B604B40EEC9E5389D43',
});

const userId = 'alice';

app.use(express.static('public'));

app.get('/pusher/beams-auth', function(req, res) {
  const userId = req.query['user_id'];
  const beamsToken = beamsClient.generateToken(userId);
  res.send(JSON.stringify(beamsToken));
});

app.get('/publish', function(req, res) {
  beamsClient
    .publishToUsers([userId], {
      web: {
        notification: {
          title: 'Hi!',
          body: "Here's a notification!",
        },
      },
    })
    .then(() => res.send('sent'))
    .catch(e => res.status(500).send('Internal error:', e));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
