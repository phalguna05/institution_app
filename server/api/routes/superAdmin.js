const router = require('express').Router();
const authMiddleware = require('../../middleware/AuthMiddleware');
const {
  Login,
  Signup,
  GetAllAdmins,
  GetAdminById,
  UpdateAdmin,
  DeleteAdmin,
} = require('../controllers/superAdmin');

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
 *     summary: Signup for superAdmin(To be removed)
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

/**
 * @swagger
 * /superAdmin/getAllAdmins:
 *   get:
 *     summary: Get all admins
 *     description: Only superAdmin can access this route
 *     tags:
 *          - Super Admin
 *
 *     produces:
 *        - application/json
 *     responses:
 *         200:
 *            description: Successfully created
 *            content:
 *               application/json:
 *                 schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Admin'
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

router.get('/getAllAdmins', authMiddleware('SUPER ADMIN'), GetAllAdmins);
/**
 * @swagger
 * /superAdmin/getAdmin/{id}:
 *   get:
 *     summary: Get admin by id
 *     description: Only superAdmin can access this route
 *     tags:
 *          - Super Admin
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Admin id
 *         schema:
 *           type: string
 *     produces:
 *        - application/json
 *     responses:
 *         200:
 *            description: Successfully created
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Admin'
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
router.get('/getAdmin/:id', authMiddleware('SUPER ADMIN'), GetAdminById);
/**
 * @swagger
 * /superAdmin/updateAdmin/{id}:
 *   patch:
 *     summary: Update admin by id
 *     description: Only superAdmin can access this route
 *     tags:
 *          - Super Admin
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Admin id
 *         schema:
 *           type: string
 *     requestBody:
 *         required: true
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/Admin'
 *     produces:
 *        - application/json

 *     responses:
 *         200:
 *            description: Successfully updated
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Admin'
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
router.patch('/updateAdmin/:id', authMiddleware('SUPER ADMIN'), UpdateAdmin);
/**
 * @swagger
 * /superAdmin/deleteAdmin/{id}:
 *   delete:
 *     summary: Delete admin by id
 *     description: Only superAdmin can access this route
 *     tags:
 *          - Super Admin
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Admin id
 *         schema:
 *           type: string
 *     produces:
 *        - application/json
 *     responses:
 *         200:
 *            description: Successfully updated
 *            content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Admin'
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
router.delete('/deleteAdmin/:id', authMiddleware('SUPER ADMIN'), DeleteAdmin);
module.exports = router;
