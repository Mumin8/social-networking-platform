const {verify}  = require("jsonwebtoken")

const validateToken = (req, res, next) =>{
  const token = req.header("token")
  if (!token) return res.json({error: "Please log in first"})
  try {
    const validToken = verify(token, "secretstring")
    req.user = validToken
    next()
    }catch (e) {
    return res.json({error: e})
  }
}
module.exports = { validateToken }
