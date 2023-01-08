import type { RequestHandler } from 'express';

const validate: RequestHandler = (req, res, next) => {
  if (req.query.token !== req.app.get('token'))
    return res.status(401).json({ error: 'Invalid token' });
  next();
};

export default validate;
