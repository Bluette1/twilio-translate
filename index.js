import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { handleIncomingMessage } from './functions.js';

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.disable('x-powered-by'); // less hackers know about your stack
app.use(bodyParser.urlencoded({ extended: false }));

// Handle incoming messages
app.post('/demo-reply', async (req, res) => {
  handleIncomingMessage(req, res) 
});

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});


