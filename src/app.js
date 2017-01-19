import express from 'express';
import { Parser } from './parser';
const app = express();

exports.app = app;

app.get('/api/whoami', (req, res) => {
	res.status(200).send(Parser.parseRequest(req));

});
