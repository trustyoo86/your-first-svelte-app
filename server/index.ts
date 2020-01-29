import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/build', express.static(path.resolve(__dirname, '..', 'public', 'build')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(8080, () => {
  console.log('app listen in port 8080');
});