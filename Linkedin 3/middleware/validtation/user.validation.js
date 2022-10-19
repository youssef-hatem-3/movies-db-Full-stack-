import Joi  from 'joi';

const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        age : Joi.number().min(16).max(50).required()
    })

export const userValidation = (req,res,next) => 
{
    let errorArray = [] ;
        let {error} = schema.validate(req.body ,{abortEarly : false})
        if (error)
        {
            error.details.map((msg)=>{
                errorArray.push(msg.message)
            })
        } 
    if (errorArray.length > 0) {
        res.json(errorArray)
    } else {
        next();
    }
}