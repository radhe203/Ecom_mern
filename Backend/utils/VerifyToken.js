const jwt = require("jsonwebtoken")
function VerifyToken(req,res,next) {

    const token = req.cookies.shopper_token
    if(!token){
        res.status(401).json({message:"unauthorised 401"})
        return
    }
    jwt.verify(token,process.env.JWT_SEC,(err,user)=>{

        if(err){
            res.status(403).json({message:"Forbidden 403"})
        return
        }
        req.user = user;
        next()
    })

}

module.exports = VerifyToken;