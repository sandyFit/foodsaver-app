import itemService from '../services/itemService'; // Import the item service

// Controller for adding a new food item
exports.addFoodItem = async (req, res) => {
    try {
        const { itemName, quantity, imagePath, expirationDate } = req.body;

        // Call the service to add the food item
        const foodItem = await itemService.addFoodItem({ itemName, quantity, imagePath, expirationDate });

        // Return a success response
        res.status(201).json({
            message: 'Alimento agregado exitosamente',
            foodItem
        });
    } catch (error) {
        // Return an error response
        res.status(500).json({
            error: 'Error al registrar el alimento',
            details: error.message
        });
    }
};

// Controller for fetching all food items
exports.getAllFoodItems = async (req, res) => {
    try {
        const foodItems = await itemService.getAllFoodItems(); // Call the service to get all items
        res.status(200).json(foodItems);
    } catch (error) {
        res.status(500).json({
            error: 'Error fetching food items',
            details: error.message
        });
    }
};

// Controller for fetching a food item by ID
exports.getFoodItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const foodItem = await itemService.getFoodItemById(id); // Call the service to get a food item by ID
        res.status(200).json(foodItem);
    } catch (error) {
        res.status(500).json({
            error: 'Error fetching food item',
            details: error.message
        });
    }
};

// Controller for updating a food item
exports.updateFoodItem = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedFoodItem = await itemService.updateFoodItem(id, updateData); // Call the service to update the food item
        res.status(200).json({
            message: 'Food item updated successfully',
            updatedFoodItem
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error updating food item',
            details: error.message
        });
    }
};

// Controller for deleting a food item
exports.deleteFoodItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedFoodItem = await itemService.deleteFoodItem(id); // Call the service to delete the food item
        res.status(200).json({
            message: 'Food item deleted successfully',
            deletedFoodItem
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error deleting food item',
            details: error.message
        });
    }
};
