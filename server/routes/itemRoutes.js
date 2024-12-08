import express from 'express';
import itemController from '../controllers/itemController';

const router = express.Router();

/**
 * @swagger
 * /foodItems/add-foodItem:
 *   foodItem:
 *     summary: Add a new foodItem
 *     description: Adds a new foodItem to the database.
 *     tags:
 *       - foodItems
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the foodItem
 *               quantity:
 *                 type: Number
 *               imagePath:
 *                 type: string
 *                 description: URL of the foodItem's image
 *                 example: https://example.com/images/product1.jpg
 *               expirationDate:
 *                 type: Date
 *                 format: date-time
 *                 description: Timestamp when the foodItem will expire
 *                 example: 2024-10-02T00:00:00Z
 *     responses:
 *       201:
 *         description: foodItem added successfully
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal Server Error. Something went wrong on the server side.
 */

router.post('/add-foodItem', itemController.addFoodItem);
router.get('/get-foodItems', itemController.getAllFoodItems);
router.get('/get-foodItem/:id', itemController.getFoodItemById);
router.put('/update-foodItem/:id', itemController.updateFoodItem);
router.delete('/delete-foodItem/:id', itemController.deleteFoodItem);

export default router;
