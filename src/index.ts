import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import routes from './routes';
import { init } from './wa';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.all('*', (req, res) => res.status(404).json({ error: 'URL not found' }));

app.set('token', process.env.TOKEN ?? 'PiqINz6HcN8984yl7APMP927xhJ4D0Dr');

const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 3000);
const listener = () => console.log(`Server is listening on http://${host}:${port}`);

(async () => {
  await init();
  app.listen(port, host, listener);
})();
