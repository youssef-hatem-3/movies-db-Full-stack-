import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

export const auth = (req , res , next) =>
{
    const token = req.header('token') ;
    if (!token.startsWith(process.env.bearerKey)) {
        res.json({message : "error in this token"})
    } else {
        const realToken = token.split(process.env.bearerKey)[1]
        jwt.verify(realToken, `${process.env.tokenSignature}`, async function(err, decoded) {
            if(err)
            {
                res.json({message : "error in this token"})
            }
            else 
            {
                req.id = decoded.userId ;
                next();
            }
          }
    
    );
    }
}
