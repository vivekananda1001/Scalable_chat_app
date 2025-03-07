import jwt from "jsonwebtoken";
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === undefined) {
        return res.status(401).json({ status: 401, message: "No token provided." });
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err)
            return res.status(401).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};
export default authMiddleware;
