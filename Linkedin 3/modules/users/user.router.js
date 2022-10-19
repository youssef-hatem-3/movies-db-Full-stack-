import { signUp ,signIn , getAllUsers, emailVerify ,signOut} from './controller/user.controller.js'
import { userValidation } from './../../middleware/validtation/user.validation.js';
import {Router} from 'express'
import { auth } from './../../middleware/auth/authentication.js';

const userRouter = Router();
userRouter.post('/signUp', userValidation ,signUp)
userRouter.post('/signIn', signIn)
userRouter.post('/signOut', auth ,signOut)
userRouter.get('/verify/:token', emailVerify)
userRouter.get('/', getAllUsers)


export default userRouter ;