import FoodItem from '../models/foodItem';

// Service for adding a new food item
const addFoodItem = async ({ itemName, quantity, imagePath, expirationDate }) => {
    try {
        // Create a new instance of the FoodItem model
        const foodItem = new FoodItem({
            itemName,
            quantity,
            imagePath,
            expirationDate
        });

        // Save the new food item to the database
        await foodItem.save();

        return foodItem; // Return the saved food item
    } catch (error) {
        throw new Error('Error adding food item: ' + error.message); // Throw error if something goes wrong
    }
};

// Service for fetching all food items
const getAllFoodItems = async () => {
    try {
        return await FoodItem.find(); // Retrieve all food items from the database
    } catch (error) {
        throw new Error('Error fetching food items: ' + error.message);
    }
};

// Service for getting a food item by its ID
const getFoodItemById = async (id) => {
    try {
        const foodItem = await FoodItem.findById(id); // Find food item by ID
        if (!foodItem) {
            throw new Error('Food item not found');
        }
        return foodItem;
    } catch (error) {
        throw new Error('Error fetching food item: ' + error.message);
    }
};

// Service for updating a food item by its ID
const updateFoodItem = async (id, updateData) => {
    try {
        const updatedFoodItem = await FoodItem.findByIdAndUpdate(id, updateData, { new: true }); // Update and return the updated item
        if (!updatedFoodItem) {
            throw new Error('Food item not found');
        }
        return updatedFoodItem;
    } catch (error) {
        throw new Error('Error updating food item: ' + error.message);
    }
};

// Service for deleting a food item by its ID
const deleteFoodItem = async (id) => {
    try {
        const foodItem = await FoodItem.findByIdAndDelete(id); // Delete the food item by ID
        if (!foodItem) {
            throw new Error('Food item not found');
        }
        return foodItem;
    } catch (error) {
        throw new Error('Error deleting food item: ' + error.message);
    }
};

export default {
    addFoodItem,
    getAllFoodItems,
    getFoodItemById,
    updateFoodItem,
    deleteFoodItem
};
