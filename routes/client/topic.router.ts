import { Router } from "express";
const router: Router = Router();
import * as controllers from "../../controllers/client/topic.controllers"

router.get('/', controllers.index)

export const topicRouter: Router = router;