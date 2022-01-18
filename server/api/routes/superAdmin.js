const router = require('express').Router();
const { Login, Signup } = require('../controllers/superAdmin');

/**
 * @swagger
 * /superAdmin/login:
 *   post:
 *     summary: Login for super admin
 *     description: Login for admin with email and password to get access token for admin
 *     tags:
 *          - Super Admin
 *     security: []
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                        email:
 *                           type: string
 *                           description: Email of admin
 *                           example: "john@gmail.com"
 *                        password:
 *                          type: string
 *                          description: Password of admin
 *                          example: "12345678"
 *     responses:
 *         200:
 *            description: Successfully created
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      access_token:
 *                        type: string
 *                        description: Access token for admin
 *                        example: "access_token"
 *         "401":
 *            description: UnAuthorized Request
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Error message
 *                       example: "Invalid email or password"
 *
 *
 */

router.post('/login', Login);
/**
 * @swagger
 * /superAdmin/signup:
 *   post:
 *     summary: Signup for admin
 *     description: Only superAdmin can access this route
 *     tags:
 *          - Super Admin
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                        email:
 *                           type: string
 *                           description: Email of admin
 *                           example: "john@gmail.com"
 *                        password:
 *                          type: string
 *                          description: Password of admin
 *                          example: "12345678"
 *
 *     produces:
 *        - application/json
 *     responses:
 *         200:
 *            description: Successfully created
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/SuperAdmin'
 *         "401":
 *            description: UnAutorized Request
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Error message
 *                       example: "User Already Exists"
 *
 */
router.post('/signup', Signup);
module.exports = router;
