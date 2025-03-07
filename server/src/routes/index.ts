import { Router } from 'express';
import AuthController from '../controllers/AuthController.js';
import authMiddleware from '../middlewares/AuthMiddlewares.js';
import ChatGroupController from '../controllers/ChatGroupController.js';
const router = Router();

// auth routes
router.post("/auth/login", AuthController.login)

// Chat Group routes
router.post("/chat-group",authMiddleware, ChatGroupController.store)
router.get("/chat-group",authMiddleware, ChatGroupController.index)
router.get("/chat-group/:id",authMiddleware, ChatGroupController.show)
router.delete("/chat-group/:id",authMiddleware, ChatGroupController.destroy)
router.put("/chat-group/:id",authMiddleware, ChatGroupController.update)

export default router; 