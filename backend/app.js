//express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const SSHConnection = require('node-ssh-forward').SSHConnection;
const jsonParser = bodyParser.json()

const port = 3000;

app.use(jsonParser);

const runPython = "python3 hue/phue/examples/";

app.post('/flicker', (req, res) => {
    if (!req.body.username || !req.body.password || !req.body.targetIpAddress) {
        res.status(404);
        res.send("Failed auth");
        return;
    }
    try {
        connectSSH(req.body.username, req.body.password, req.body.targetIpAddress).executeCommand(`${runPython}flicker.py`);
        res.send(200);
    } catch (e) {
        res.send(e);
    }
});

app.listen(port, () => {
    console.log(`Philps api listening on port ${port}`);
});

function connectSSH(username, password, targetIpAddress) {
    return new SSHConnection({
        endHost: targetIpAddress,
        username: username,
        password: password
    });
};