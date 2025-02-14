import router from "../custom-router.js";
import { UserController } from "../../controller/user-controller.js";
import database from "../../database/json.js";

const userController = new UserController();
userController.setDatabase(database);

router.get("/users/:id", (req, res) => userController.getUser(req, res));
router.get("/users", (req, res) => userController.getUsers(req, res));
router.post("/users", (req, res) => userController.createUser(req, res));
router.put("/users/:id", (req, res) => userController.updateUser(req, res));
router.patch("/users/:id", (req, res) => userController.patchUser(req, res));
router.delete("/users/:id", (req, res) => userController.deleteUser(req, res));
