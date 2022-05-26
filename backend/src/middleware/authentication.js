const jwt = require('jsonwebtoken');
require('dotenv').config()

const verifyToken = (token) =>
{
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) =>{
          if (err) return reject(err);
          resolve(user);
        });
      });
}

const authentication = async(req,res,next)=>
{
    if(!req.headers.authorization)
    return res.status(400).send({message:"authorization token not found"})
    
    if(!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({message:"authorization token not found or incorrect"})
    
    const token = req.headers.authorization.trim().split(" ")[1]

    let user;
    try {
        user = await verifyToken(token);
      } catch (err) {
        return res.status(400).send({
          message: "Authorization token is not provided or is not valid",
        });
      }

  req.user = user.user  //verfied token
  return next()
 }


module.exports =authentication