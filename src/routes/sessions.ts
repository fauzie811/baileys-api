import { Router } from 'express';
import { body } from 'express-validator';
import * as controller from '../controllers/session';
import requestValidator from '../middlewares/request-validator';
import sessionValidator from '../middlewares/session-validator';
import tokenValidator from '../middlewares/token-validator';

const router = Router();
router.get('/:sessionId', tokenValidator, sessionValidator, controller.find);
router.get('/:sessionId/status', tokenValidator, sessionValidator, controller.status);
router.post(
  '/add',
  tokenValidator,
  body('sessionId').isString().notEmpty(),
  requestValidator,
  controller.add
);
router.get('/:sessionId/add-sse', tokenValidator, controller.addSSE);
router.delete('/:sessionId', tokenValidator, sessionValidator, controller.del);

export default router;
