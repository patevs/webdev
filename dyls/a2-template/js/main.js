/**
 *  js/main.js
 */

"use strict";

// IMPORTS
//import $ from "jquery";

// Data structure containing information about the products
const PRODUCTS_DATA = {
	PRODUCTS: {
		brocoli: {
			key: "brocoli",
			name: "Brocoli",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/broccoli.jpg",
			keywords: ["vegetable", "diet", "food", "fresh", "green"],
			price: 4
		},
		grapes: {
			name: "Grapes",
			key: "grapes",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/grape.jpg",
			keywords: ["food", "fresh", "fruit", "green"],
			price: 5
		},
		strawberries: {
			name: "Strawberries",
			key: "strawberries",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/strawberry.jpg",
			keywords: ["food", "fresh", "fruit", "breakfast"],
			price: 6
		},
		cheese: {
			name: "Cheese",
			key: "cheese",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/cheese2.png",
			keywords: ["dairy", "breakfast", "food"],
			price: 5
		},
		yogurt: {
			name: "Yogurt",
			key: "yogurt",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/yoghurt.png",
			keywords: ["dairy", "food", "breakfast"],
			price: 3
		},
		toothpaste: {
			name: "Toothpaste",
			key: "toothpaste",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/toothpaste.png",
			keywords: ["dental", "hygiene"],
			price: 10
		},
		shampoo: {
			name: "Shampoo",
			key: "shampoo",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/shampoo.png",
			keywords: ["hair", "hygiene"],
			price: 15
		},
		soap: {
			name: "Soap",
			key: "soap",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/soap.jpg",
			keywords: ["body", "hygiene"],
			price: 2
		},
		wine: {
			name: "Wine",
			key: "wine",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/wine.png",
			keywords: ["alcohol", "bar", "beverage"],
			price: 12
		},
		napkins: {
			name: "Napkins",
			key: "napkins",
			imageURL: "https://cdn.jsdelivr.net/gh/josecarlosgt/infosys280/napkin.png",
			keywords: ["bar", "table"],
			price: 4
		}
	},
	CO_OCCURRENCE_MATRIX: {
		brocoli: [
			{
				product: "grapes",
				count: 34
			},
			{
				product: "strawberries",
				count: 27
			},
			{
				product: "cheese",
				count: 38
			},
			{
				product: "yogurt",
				count: 87
			},
			{
				product: "toothpaste",
				count: 18
			},
			{
				product: "shampoo",
				count: 18
			},
			{
				product: "soap",
				count: 20
			},
			{
				product: "wine",
				count: 33
			},
			{
				product: "napkins",
				count: 38
			}
		],
		grapes: [
			{
				product: "brocoli",
				count: 34
			},
			{
				product: "strawberries",
				count: 56
			},
			{
				product: "cheese",
				count: 66
			},
			{
				product: "yogurt",
				count: 67
			},
			{
				product: "toothpaste",
				count: 11
			},
			{
				product: "shampoo",
				count: 7
			},
			{
				product: "soap",
				count: 13
			},
			{
				product: "wine",
				count: 49
			},
			{
				product: "napkins",
				count: 40
			}
		],
		strawberries: [
			{
				product: "brocoli",
				count: 27
			},
			{
				product: "grapes",
				count: 56
			},
			{
				product: "cheese",
				count: 45
			},
			{
				product: "yogurt",
				count: 70
			},
			{
				product: "toothpaste",
				count: 12
			},
			{
				product: "shampoo",
				count: 13
			},
			{
				product: "soap",
				count: 13
			},
			{
				product: "wine",
				count: 44
			},
			{
				product: "napkins",
				count: 30
			}
		],
		cheese: [
			{
				product: "brocoli",
				count: 38
			},
			{
				product: "grapes",
				count: 66
			},
			{
				product: "strawberries",
				count: 45
			},
			{
				product: "yogurt",
				count: 69
			},
			{
				product: "toothpaste",
				count: 13
			},
			{
				product: "shampoo",
				count: 19
			},
			{
				product: "soap",
				count: 2
			},
			{
				product: "wine",
				count: 74
			},
			{
				product: "napkins",
				count: 27
			}
		],
		yogurt: [
			{
				product: "brocoli",
				count: 87
			},
			{
				product: "grapes",
				count: 67
			},
			{
				product: "strawberries",
				count: 70
			},
			{
				product: "cheese",
				count: 69
			},
			{
				product: "toothpaste",
				count: 10
			},
			{
				product: "shampoo",
				count: 15
			},
			{
				product: "soap",
				count: 4
			},
			{
				product: "wine",
				count: 10
			},
			{
				product: "napkins",
				count: 30
			}
		],
		toothpaste: [
			{
				product: "brocoli",
				count: 18
			},
			{
				product: "grapes",
				count: 11
			},
			{
				product: "strawberries",
				count: 12
			},
			{
				product: "cheese",
				count: 13
			},
			{
				product: "yogurt",
				count: 10
			},
			{
				product: "shampoo",
				count: 55
			},
			{
				product: "soap",
				count: 50
			},
			{
				product: "wine",
				count: 3
			},
			{
				product: "napkins",
				count: 72
			}
		],
		shampoo: [
			{
				product: "brocoli",
				count: 18
			},
			{
				product: "grapes",
				count: 7
			},
			{
				product: "strawberries",
				count: 13
			},
			{
				product: "cheese",
				count: 19
			},
			{
				product: "yogurt",
				count: 15
			},
			{
				product: "toothpaste",
				count: 55
			},
			{
				product: "soap",
				count: 64
			},
			{
				product: "wine",
				count: 11
			},
			{
				product: "napkins",
				count: 73
			}
		],
		soap: [
			{
				product: "brocoli",
				count: 20
			},
			{
				product: "grapes",
				count: 13
			},
			{
				product: "strawberries",
				count: 13
			},
			{
				product: "cheese",
				count: 2
			},
			{
				product: "yogurt",
				count: 4
			},
			{
				product: "toothpaste",
				count: 50
			},
			{
				product: "shampoo",
				count: 64
			},
			{
				product: "wine",
				count: 2
			},
			{
				product: "napkins",
				count: 27
			}
		],
		wine: [
			{
				product: "brocoli",
				count: 33
			},
			{
				product: "grapes",
				count: 49
			},
			{
				product: "strawberries",
				count: 44
			},
			{
				product: "cheese",
				count: 74
			},
			{
				product: "yogurt",
				count: 10
			},
			{
				product: "toothpaste",
				count: 3
			},
			{
				product: "shampoo",
				count: 11
			},
			{
				product: "soap",
				count: 2
			},
			{
				product: "napkins",
				count: 70
			}
		],
		napkins: [
			{
				product: "brocoli",
				count: 38
			},
			{
				product: "grapes",
				count: 40
			},
			{
				product: "strawberries",
				count: 30
			},
			{
				product: "cheese",
				count: 27
			},
			{
				product: "yogurt",
				count: 30
			},
			{
				product: "toothpaste",
				count: 72
			},
			{
				product: "shampoo",
				count: 73
			},
			{
				product: "soap",
				count: 27
			},
			{
				product: "wine",
				count: 70
			}
		]
	}
};

// Threshold for filtering products to recommend in the co-occurrence matrix
//const RECOMMENDATION_THRESHOLD = 50;

// Data structure containing products browsed and selected by the user
//THIS IS BASICALLY A HISTORY TO BASE RECOMMENDATIONS OFF OF
const SHOPPING_DATA = {
	searchResults: [],
	cart: [],
	recommendations: []
};

//	let searchQuery = $("#searchbox");

/**
 * Event handler for searching products by name and keyword
 * This function should populate the SHOPPING_DATA.searchResults array
 */
let _search = function() {
	//..
	// get searchbox text value
	let searchQuery = $("#searchbox").val();
	// Display search query for testing
	$("#query").html(searchQuery);

	// Remove all elements in the SHOPPING_DATA.searchResults array
	SHOPPING_DATA.searchResults.length = 0;

	// Get the search query from an input HTML element
	//let searchQuery = $("#searchbox");

	// Find all products in the PRODUCTS_DATA.PRODUCTS object
	// with a name that matches the search query

	// Iterate over all products in PRODUCTS_DATA array
	/*
	for (let product of PRODUCTS_DATA) {
		if (product.name === searchQuery.text) {
			SHOPPING_DATA.searchResults.push(product);
		}
	}
	return SHOPPING_DATA;
  */
	// Find all products in the PRODUCTS_DATA.PRODUCTS object with any keyword
	// that matches the search query

	// Populate the SHOPPING_DATA.searchResults with all matched products

	// Display the search results by calling displaySearchResults()
};

/* Event handler for recommending products
   This function should populate the SHOPPING_DATA.recommendations array */
/*
function getRecommendations(productKey) {
	// Remove all elements in the SHOPPING_DATA.recommendations array
	// Get the products row in the co-occurence matrix corresponding to the
	// productKey parameter
	// Sort the products row
	// Get all products with a threshold higher than RECOMMENDATION_THRESHOLD
	// Display the recommendations by calling displayRecommendations()
}
*/

/* Generates the HTML required to visualize a product
    The parameter "clickable" specifies whether the generated item should
    react to the click event */
/*
function generateItemHTML(product, clickable = false) {
	let productItem = "";

	return productItem;
}
*/

// Displays all products matching the search query
/*
function displaySearchResults() {
	// Empty the container holding all search results
	// Generate the HTML to visualize each product by calling generateItemHTML()
	// Append each item to a search results container
}
*/

// Event handler for adding a product to the shopping cart
// This function should populate the SHOPPING_DATA.cart array
/*
function addProduct() {
	// Get the product key from the clicked item
	// Display the shopping cart by calling displayCart()
	// Get product recommendations by calling getRecommendations()
}
*/

// Displays all products in the shopping cart
//function displayCart() {}

// Displays all recommended products
//function displayRecommendations() {}

/**
 * Registers the search event handler on an HTML item with id = searchbtn
 */
function init() {
	// $("#search").on("click", search);
	// bind the _search function to the search btn click event
	$("#searchbtn").on("click", _search);
}

// Finally, call the init function
init();

/* EOF */
