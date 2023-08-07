# Mini-Message-Board
Simple App that allows users to post public messages. 

Uses Node JS for the backend. 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/yxuan1996/Mini-Message-Board)

Running the app

We need to run `npm run tailwind:css` every time we make changes to the app.

We install nodemon globally `npm install -g nodemon` and then run `nodemon index.js`

Alternatively use `npm run start`

## Development Notes

### TailwindCSS installation

For Installed Packages, see `package.json`

Guide to using tailwindCSS with Node JS and EJS / Pug: https://daily.dev/blog/how-to-use-tailwindcss-with-node-js-express-and-pug#add-tailwindcss

https://tailwindcss.com/docs/installation 

Since we have already exposed the `public` folder in `index.js`, we can just use `/styles/style.css` when referencing static files.

### ES6 Modules
We will use the ES6 import / export syntax instead of the require syntax when importing modules. 

We modify the `package.json` by adding `"type": "module"` to enable ES6 modules.

When importing a module from another file, we need to include the .js file extension
```JS
import  messageController  from '../controllers/messageController.js';
```

##### Path Module
New way to import Node JS path module

```JS
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/

### DOTENV
Secrets are stored in a separate dotenv file in dropbox. 
https://www.npmjs.com/package/dotenv

### Capturing Form Data
If you encounter errors on form data submission, check for the following:

Ensure that you have defined the following middlewares
```JS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

Ensure that you have provided the name and type attributes in the form inputs
```HTML
<input type="text" name='title' ... >
```

### Database
We will use Firestore as the main database for this app. Since Firestore is a Schemaless NoSQL database, we don't need to define a model, we can just create / read data from the controller. 

