import express from 'express';
import path from 'path';

const app = express();

app.use('/build', express.static(path.resolve(__dirname, '..', '..', 'public', 'build')));

app.listen(8080, () => {
  console.log('app listen in port 8080');
});