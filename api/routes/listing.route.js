import express from 'express';
<<<<<<< HEAD
import { createListing, deleteListing, updateListing, getListing } from '../controllers/listing.controller.js';
=======
import { createListing } from '../controllers/listing.controller.js';
>>>>>>> parent of 4c33dbe (complete user listing functionality)
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
<<<<<<< HEAD
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
=======
// router.delete('/delete/:id', verifyToken, deleteListing);
// router.post('/update/:id', verifyToken, updateListing);
// router.get('/get/:id', getListing);
>>>>>>> parent of 4c33dbe (complete user listing functionality)
// router.get('/get', getListings);

export default router;
