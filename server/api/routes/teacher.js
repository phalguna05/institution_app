const router = require('express').Router();
const authMiddleware = require('../../middleware/AuthMiddleware');
const { Login, Signup, GetTeachers } = require('../controllers/teacher');

/**
 * @swagger
 * /teacher/login:
 *   post:
 *     summary: Login for teacher
 *     description: Login for teacher with email and password to get access token for admin
 *     tags:
 *          - Teacher
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
 *                           description: Email of teacher
 *                           example: "john@gmail.com"
 *                        password:
 *                          type: string
 *                          description: Password of teacher
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
 *                        description: Access token for teacher
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
 * /teacher/signup:
 *   post:
 *     summary: Signup for Teacher
 *     description: Only Admin can access this route
 *     tags:
 *          - Teacher
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Teacher'
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
router.post('/signup', authMiddleware('ADMIN'), Signup);
/**
 * @swagger
 * /teacher/getTeachers:
 *   post:
 *     summary: Get all Teachers of a school
 *     description: Only Admin can access this route and Admin cannot get teachers of other school
 *     tags:
 *          - Teacher
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                       schoolName:
 *                         type: string
 *                         example: "ABC School"
 *     produces:
 *        - application/json
 *     responses:
 *         200:
 *            description: Successfully Fetched
 *            content:
 *               application/json:
 *                 schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Teacher'
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
 *                       example: "You donot have access to this resource"
 *
 */
router.post('/getTeachers', authMiddleware('ADMIN'), GetTeachers);

module.exports = router;
