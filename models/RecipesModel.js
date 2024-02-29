const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the enum values for difficulty
const difficultyEnum = ['Easy', 'Intermediate', 'Hard', 'Chef Level'];

// Enum for recipe categories
const CategoryLabels = {
  appetizers: 'Appetizers',
  starters: 'Starters',
  mainDish: 'Main Dish',
  dessert: 'Dessert',
};

const recipeSchema = new Schema({
  picture: {
    type: String, // Assuming the picture is stored as a URL
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  difficulty: {
    type: String,
    enum: difficultyEnum,
    required: true,
  },
  category: {
    type: String,
    enum: Object.values(CategoryLabels),
    required: true,
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  calories: {
    total: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
  },
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
