import prisma from '../config/db.config.js';
import jwt from 'jsonwebtoken';
class AuthController {
    static async login(request, response) {
        try {
            const body = request.body;
            let findUser = await prisma.user.findUnique({
                where: {
                    email: body.email
                }
            });
            if (!findUser) {
                findUser = await prisma.user.create({
                    data: body
                });
            }
            let JWTPayload = {
                name: body.name,
                email: body.email,
                id: findUser.id
            };
            const token = jwt.sign(JWTPayload, process.env.JWT_SECRET, {
                expiresIn: '365d'
            });
            return response.json({
                message: 'Logged In Successfully',
                user: {
                    ...findUser,
                    token: `Bearer ${token}`
                }
            });
        }
        catch (error) {
            response.status(500).json({
                message: "Something went wrong. Please try again."
            });
        }
    }
}
export default AuthController;
