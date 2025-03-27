import { Router } from 'express';
import { deletePlayer, getPlayer, getPLayerById, postPlayer, updatePlayer } from '../controllers/players-controller';
import { getClubs } from '../controllers/clubs-controller';

const router = Router();

router.get("/players", getPlayer);
router.post("/players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

router.get("/players/:id", getPLayerById);

router.get("/clubs", getClubs);



export default router;