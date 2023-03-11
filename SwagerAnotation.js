/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Tag User sẽ quản lý API về users
 *
 * /users:
 *   get:
 *     summary: Returns a list of users
 *     description: Retrieve a list of all users
 *     tags:
 *       - Users
 *     responses:
 *       '200':
 *         description: Nếu thành công sẽ trả về 1 list user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *               properties:
 *                   id:
 *                     type: integer
 *               name:
 *                     type: string
 *       '400':
 *         description: "Bad request"
 *
 *   post:
 *     summary: Create new User
 *     description: Tạo 1 user mới và trả về chính user đó cho client
 *     tags:
 *       - Users
 *     requestBody:
 *       description: User object that needs to be added to the system
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *     parameters:
 *       - in: query
 *         name: api_key
 *         required: true
 *         schema:
 *           type: string
 *         description: an api key is required to authenticate the request
 *     responses:
 *       '201':
 *         description: Nếu thành công sẽ trả về user vừa tạo ở response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *       '400':
 *         description: "Bad request"
 *
 * */
