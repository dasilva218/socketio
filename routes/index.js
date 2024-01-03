import { Router } from 'express';
import { dirname } from 'node:path';

export const route = Router();

route.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: dirname('views') });
});
