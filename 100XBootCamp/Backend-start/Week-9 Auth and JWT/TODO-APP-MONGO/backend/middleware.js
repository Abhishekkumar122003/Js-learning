  const jwt = require('jsonwebtoken');
  const JWT_Secret = "idsodntkonfo0ewnfoiwewathwhtatidioowhatrieirti";

  function authMiddleware(req , res , next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_Secret);
    const userid = decoded.userid;
    if(!userid){
        res.status(411).json({
            message:"no user with this ID exist."
        })
        return
    }
    req.userid = userid;
    next();  
  }

  module.exports ={
    authMiddleware
  }