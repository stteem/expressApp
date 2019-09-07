const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


const stuffCtrl = require('../controllers/stuff');


//If  multer  is registered before authentication middleware, the file will be saved before the server
// gets a chance to check the user's authentication.  In these situations, always register  multer 
// after any authentication middleware.

router.get('/', auth, stuffCtrl.getAllStuff);

router.post('/', auth, multer, stuffCtrl.createThing);

router.get('/:id', auth, stuffCtrl.getOneThing);

router.put('/:id', auth, multer, stuffCtrl.modifyThing);

router.delete('/:id', auth, stuffCtrl.deleteThing);


module.exports = router;