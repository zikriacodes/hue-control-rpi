//express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

var exec = require('child_process').exec;

let interval;

const port = 3001;

app.use(jsonParser);

const runPython = "python3 ../hue/phue/examples/";

app.post('/api/flicker', (req, res) => {
    try {

	runFlicker()
        res.send(200);
    } catch (e) {
        res.send(e);
    }
});

app.delete('/api/stop', (req, res) => {
	if(interval) clearInterval(interval)
	res.send(204)
})

app.listen(port, () => {
    console.log(`Philps api listening on port ${port}`);
});

async function runFlicker() {
interval = setInterval( () => {exec(`${runPython}flicker.py`)} ,5000);
}
