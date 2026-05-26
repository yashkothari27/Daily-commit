// middleware
const auth = (req, res, next) => { if (req.headers.authorization) next(); else res.status(401).end(); };
module.exports = { auth };
