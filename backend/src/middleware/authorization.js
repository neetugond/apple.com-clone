const authorization =(permitted)=>{
    return (req,res,next)=>{
       let ispermitted =false
       const user=req.user
     
       permitted.map((role)=>{
          if(user.role.includes(role)) {
              ispermitted=true
          }
       })
       if(ispermitted){
           return next ()
       }
       else{
           return res.status(401).send("user is not authorised")
       }
    }
}
module.exports=authorization