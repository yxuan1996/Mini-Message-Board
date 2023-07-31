const Message = require('../models/message');

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
  Message.findById(id)
    .then(result => {
      res.render('details', { messages: result, title: 'Message Details' });
    })
    .catch(err => {
      console.log(err);
    });
}

const message_create_get = (req, res) => {
  res.render('create', { title: 'New Message' });
}

const message_create_post = (req, res) => {
  const message = new Message(req.body);
  message.save()
    .then(result => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
}

const message_delete = (req, res) => {
  const id = req.params.id;
  Message.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  message_index, 
  message_details, 
  message_create_get, 
  message_create_post, 
  message_delete
}