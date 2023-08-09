import express from "express";
import  messageController  from '../controllers/messageController.js';
import rateLimit from 'express-rate-limit'

const router = express.Router();

const limiter = rateLimit({
    windowMs: 30 * 60 * 1000, // 30 minutes
    max: 20, // limit each IP to 20 requests per windowMs
    message: "Too many accounts created from this IP, please try again after",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false
  });

// router.get('/new', messageController.message_create_get);
router.get('/', messageController.message_index);
router.post('/new', limiter, messageController.message_create_post);
// router.get('/:id', messageController.message_details);
router.delete('/:id', messageController.message_delete);

export default router;