import express from 'express';

import { getPitchItems, createPitchItem, createPitchOffer} from '../controllers/pitchItems.js'

const router = express.Router();

router.get('/', getPitchItems);
router.post('/', createPitchItem);
router.post('/:pitch_id/makeOffer', createPitchOffer);

export default router;