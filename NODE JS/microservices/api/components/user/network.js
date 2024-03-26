const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const Controller = require("./index");

/**
 * @openapi
 * /api/user:
 *   get:
 *     summary: Get all users
 *     description: Get all users from BD
 *     responses:
 *       200:
 *         description: user list
 */
router.get("/", async (req, res) => {
  try {
    const userList = await Controller.list();
    response.sucess(req, res, userList);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params || {};
    const user = await Controller.get(id);
    response.sucess(req, res, user);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});
/**
 * @openapi
 * /api/user:
 *  post:
 *    summary: Create user
 *    description: This can only be done by the logged in user.
 *    parameters:
 *      - name: User name
 *        description: User Name
 *        required: true
 *      - lasteName: User Lastname
 *        description: User Lastname
 *        required: true
 *    responses:
 *       201:
 *         description: Successful operation
 */
router.post("/", async (req, res) => {
  try {
    const data = req.body || {};
    const userUpsert = await Controller.upsert( data );
    response.sucess(req, res, userUpsert);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params || {};
    const deleteUser = await Controller.remove(id);
    response.sucess(req, res, deleteUser);
  } catch (error) {
    response.error(req, res, error.message, 500);
  }
});

module.exports = router;
