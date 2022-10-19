import { sendMessage , myMessages , deletemyMessages } from './controller/message.controller.js'
import {Router} from 'express'
import { auth } from '../../middleware/auth/authentication.js';
const messageRouter = Router();
messageRouter.post('/message/:userId', sendMessage )
messageRouter.get('/message/', auth , myMessages )
messageRouter.delete('/message/', auth , deletemyMessages )
export default messageRouter ;