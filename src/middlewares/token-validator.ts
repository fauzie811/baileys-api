import type { Request, RequestHandler } from 'express';

function extractToken(req: Request) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }
  return null;
}

const validate: RequestHandler = (req, res, next) => {
  const token = extractToken(req);
  if (token !== req.app.get('token')) return res.status(401).json({ error: 'Invalid token' });
  next();
};

export default validate;
