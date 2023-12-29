import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import search from './routes/search';

require('dotenv').config();

const app = express();

app.set('views', './src/views');
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(helmet({
  contentSecurityPolicy: false,
}));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/clicked', (req, res) => {
  res.render('partials/good-job');
});

app.use('/search', search);
app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
