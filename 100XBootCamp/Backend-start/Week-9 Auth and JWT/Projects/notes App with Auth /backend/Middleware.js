const jwt = require('jsonwebtoken')
const JWT_Secret = "sjvbdfiwegbfjsontruigreiwthuoueyou";

function authMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        res.status(403).send({
            message: "You're not logged in"
        })
        return;
    }

    const decoded = jwt.verify(token, JWT_Secret);
    const username = decoded.username;

    if (!username) {
        res.status(403).json({
            message: "Malformed token "
        })
        return;


    }
    req. username = username
    next();
}

    module.exports = {
        authMiddleware
    }