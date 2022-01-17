const router = require('express').Router();
const { Login, Signup } = require('../controllers/admin');
const authMiddleware = require('../../middleware/AuthMiddleware');

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Login for admin
 *     description: Login for admin with email and password to get access token for admin
 *     tags:
 *          - Admin
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
 *
 */

router.post('/login', Login);
/**
 * @swagger
 * /admin/signup:
 *   post:
 *     summary: Signup for admin
 *     description: Only superAdmin can access this route
 *     tags:
 *          - Admin
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Admin'
 *
 *     security:
 *        - bearerAuth: []
 *     produces:
 *        - application/json
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
 *            description: Unauthorized Request
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       description: Error message
 *                       example: "User already exists"
 */
// Only superAdmin can access this route
router.post('/signup', authMiddleware('SUPER ADMIN'), Signup);
module.exports = router;
