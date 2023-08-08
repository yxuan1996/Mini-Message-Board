import db from '../firebase.js';
import { collection, addDoc, doc, getDocs, deleteDoc } from "firebase/firestore"; 
import asyncHandler from "express-async-handler";

const message_index = asyncHandler(async (req, res, next) => {
  const result = await getDocs(collection(db, "messages"));
  let response = [];

  result.forEach(doc => {
    let doc_object = doc.data();
    doc_object['id'] = doc.id;
    response.push(doc_object);
  });

  res.render('index', {  data: response })
})

// Find a single Document
// Function not Used
const message_details = (req, res) => {
  const id = req.params.id;
}

// Render Form Page
// Function not used
const message_create_get = (req, res) => {
  res.render('create', { title: 'New Message' });
}


const message_create_post = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      title: req.body.title,
      author: req.body.author,
      message: req.body.message
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }  
  res.redirect('/');
})

const message_delete = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  await deleteDoc(doc(db, "messages", id));

  res.json({ redirect: '/' });

})


export default {
    message_index, 
    message_details, 
    message_create_get, 
    message_create_post, 
    message_delete
  };