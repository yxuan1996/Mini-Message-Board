import express from "express";
import  messageController  from '../controllers/messageController.js';

const router = express.Router();

router.get('/new', messageController.message_create_get);
router.get('/', messageController.message_index);
router.post('/new', messageController.message_create_post);
router.get('/:id', messageController.message_details);
router.delete('/:id', messageController.message_delete);

export default router;