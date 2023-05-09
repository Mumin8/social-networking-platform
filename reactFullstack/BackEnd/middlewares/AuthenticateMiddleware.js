const {verify}  = require("jsonwebtoken")

const validateToken = (req, res, next) =>{
  const token = req.header("token")
  if (!token) return res.json({error: "User not logged in"})
  try {
    const validToken = verify(token, "secretstring")
    if(validToken) return   next()
    }catch (e) {
    return res.json({error: e})
  }
}
module.exports = { validateToken }
