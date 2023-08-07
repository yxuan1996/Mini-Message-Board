// const Message = require('../models/message');
import db from '../firebase.js';


const message_index = (req, res) => {
  res.render('index', {  title: 'Message Board' });
  // Message.find().sort({ createdAt: -1 })
  //   .then(result => {
  //     res.render('index', { messages: result, title: 'Message Board' });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

const message_details = (req, res) => {
  const id = req.params.id;
  // Message.findById(id)
  //   .then(result => {
  //     res.render('details', { messages: result, title: 'Message Details' });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

const message_create_get = (req, res) => {
  res.render('create', { title: 'New Message' });
}

const message_create_post = (req, res) => {
  // try {
  //   const docRef = await addDoc(collection(db, "users"), {
  //     first: "Ada",
  //     last: "Lovelace",
  //     born: 1815
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }
  // const message = new Message(req.body);
  console.log(req.body);
  res.redirect('/');
  // // message.save()
  //   .then(result => {
  //     res.redirect('/');
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

const message_delete = (req, res) => {
  const id = req.params.id;
  // Message.findByIdAndDelete(id)
  //   .then(result => {
  //     res.json({ redirect: '/' });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}


export default {
    message_index, 
    message_details, 
    message_create_get, 
    message_create_post, 
    message_delete
  };