import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface RequestWithUser extends Request {
  user?: string | JwtPayload;
}

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Access Denied!" });

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.user = user;
      next();
    });
  } catch (error: any) {
    console.error(error);
    res.status(401);
    res.json({ message: error.message });
  }
};

export { authMiddleware };
