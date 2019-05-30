// INFOSYS 280 - Assignment #2: Scaffolding Code

"use strict";

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

/**********************
 * * CODE STARTS HERE *
 **********************/

// Threshold for filtering products to recommend in the co-occurrence matrix
const RECOMMENDATION_THRESHOLD = 50;

// Data structure containing products browsed and selected by the user
const SHOPPING_DATA = {
	searchResults: [],
	cart: [],
	recommendations: []
};

//THE FOLLOWING CREATES CONTAINERS FOR THE ABOVE ARRAYS TO APPEND TO
let resultsContainer = $("#products");
let recommendationContainer = $("#recommended");
let cartContainer = $("#cart");

/* Event handler for searching products by name and keyword
   This function should populate the SHOPPING_DATA.searchResults array */
function search(productID) {
	// Remove all elements in the SHOPPING_DATA.searchResults array
	SHOPPING_DATA.searchResults.length = 0;
	resultsContainer.empty();
	// Get the search query from an input HTML element
	let searchQuery = $("#searchbox")
		.val()
		.toLowerCase();
	let allProducts = PRODUCTS_DATA.PRODUCTS;
	// Find all products in the PRODUCTS_DATA.PRODUCTS object with a name
	// that matches the search query
	// Find all products in the PRODUCTS_DATA.PRODUCTS object with any keyword
	// that matches the search query
	for (let productKey in allProducts) {
		let product = allProducts[productKey];

		if (searchQuery === product || product.keywords.includes(searchQuery)) {
			// Populate the SHOPPING_DATA.searchResults with all matched products
			SHOPPING_DATA.searchResults.push(product);
		} else if (productID === product || product.keywords.includes(productID)) {
			SHOPPING_DATA.searchResults.push(product);
		}
	}

	// Display the search results by calling displaySearchResults()
	displaySearchResults();
	console.log(SHOPPING_DATA);
}

//search();

//////////////////////////////////////////////////////////////////////////////////////////////////

/* Event handler for recommending products
   This function should populate the SHOPPING_DATA.recommendations array */
function getRecommendations(productKey) {
	// Remove all elements in the SHOPPING_DATA.recommendations array
	SHOPPING_DATA.recommendations.length = 0;
	// Get the products row in the co-occurence matrix corresponding to the
	// productKey parameter
	let matrixRow = PRODUCTS_DATA.CO_OCCURRENCE_MATRIX[productKey];

	// Sort the products row
	let sortedMatrixRow = matrixRow.sort((a, b) => (a.count < b.count ? 1 : -1));

	// Get all products with a threshold higher than RECOMMENDATION_THRESHOLD

	for (let matrixEl of sortedMatrixRow) {
		if (matrixEl.count >= RECOMMENDATION_THRESHOLD) {
			SHOPPING_DATA.recommendations.push(matrixEl.product);
		}
	}

	// Display the recommendations by calling displayRecommendations()
	displayRecommendations();
}

////////////////////////////////////////////////////////////////////////

// Displays all products matching the search query
function displaySearchResults() {
	// Empty the container holding all search results
	resultsContainer.empty();
	// Generate the HTML to visualize each product by calling generateItemHTML()

	for (let product of SHOPPING_DATA.searchResults) {
		let productHTML = generateItemHTML(product);

		// Append each item to a search results container
		resultsContainer.append(productHTML);
	}
}
//displaySearchResults();

////////////////////////////////////////////////////////////////////////

// Displays all recommended products <== USES VALUE FROM THE ARRAY
function displayRecommendations() {
	recommendationContainer.empty();

	for (let product of SHOPPING_DATA.recommendations) {
		let recommendationProductHTML = generateItemHTML(product);

		recommendationContainer.append(recommendationProductHTML);
	}
}
//displayRecommendations();

//////////////////////////////////////////////////////////////////////////////////////
//THE FOLLOWING ADDS A BUTTON THAT ALLOWS THE USER TO RETURN TO THE HOME SCREEN WITH VIEW OF ALL ITEMS
$("#home").on("click", initProducts);

//THE FOLLOWIG CREATES A CLICK EVENT TO THE EMPTY CART BUTTON
$("#emptycart").on("click", emptyCart);

//THE FOLLOWING DEFINES THE EMPTY CART FUNCTION USED BY THE ABOVE BUTTON
function emptyCart() {
	cartContainer.empty();
	SHOPPING_DATA.cart.length = 0;
}

/**
 * displayCart function used to display the
 * products in the shopping cart to the user
 */
function displayCart() {
	// Empty the shopping cart
	cartContainer.empty();
	// Iterate over all products in the shopping cart
	for (let product of SHOPPING_DATA.cart) {
		// Generate the HTML for the current product
		let productHTML = generateItemHTML(product, false);
		// Append the product HTML to the shopping cart
		cartContainer.append(productHTML);
	}
}

/**
 * Helper function used to find and return a
 * product object with the given productKey.
 *
 * @param { unique product ID } productKey
 * @returns { product object }
 */
function findProduct(productKey) {
	// Object containing all products
	let allProducts = PRODUCTS_DATA.PRODUCTS;
	// product to return
	let product = allProducts[productKey];
	// return the product object
	return product;
}

/**
 *  addProductToCart function is an event handler which
 *  will bind to each product element on click event and
 *  will add the given product to the shopping cart.
 */
function addProductToCart(productElem) {
	// Get the product key for the selected product
	let productKey = $(productElem).attr("id");
	// Get the product object for the selected product
	let product = findProduct(productKey);
	// Append the product to the shopping cart
	SHOPPING_DATA.cart.push(product);
	// Display the shopping cart
	displayCart();
	// Get product recommendations by calling getRecommendations()
	//getRecommendations(product);
}

/**
 * generateItemHTML helper function used to generate the
 *  HTML required to visualize a given product on the page.
 * This function takes a product object as a parameter and returns the
 *  generated HTML for that given product.
 * The parameter "clickable" specifies whether the generated item should
 *  react to the click event, false (not clickable) by default.
 *
 * @param { product object } product
 * @returns { HTML for given product }
 */
function generateItemHTML(product, clickable = false) {
	// product HTML to return
	let productHTML = "";
	// Check if the product should be clickable
	if (clickable) {
		// Create the HTML for a clickable product
		productHTML =
			"<li onclick='addProductToCart(" +
			product.key +
			")' id=" +
			product.key +
			"><img src=" +
			product.imageURL +
			"><figcaption>" +
			product.name +
			" $" +
			product.price +
			"</figcaption>" +
			"</li>";
	} else {
		// Create the HTML for an unclickable product
		productHTML =
			"<li id=" +
			product.key +
			"><img src=" +
			product.imageURL +
			"><figcaption>" +
			product.name +
			" $" +
			product.price +
			"</figcaption>" +
			"</li>";
	}
	// Return the generated product HTML
	return productHTML;
}

/**
 * initProducts helper function used to initialize the products
 *  list by iterating over all the products in PRODUCT_DATA.PRODUCTS,
 *  generating HTML for each product, and displaying the generated HTML
 *  to the user.
 */
function initProducts() {
	// Clear the results container
	resultsContainer.empty();
	// Get the object containing all products
	let allProductsObject = PRODUCTS_DATA.PRODUCTS;
	// Iterate over all products
	for (let productKey in allProductsObject) {
		// Get the current product
		let product = allProductsObject[productKey];
		// Generate the HTML for the current product
		let productItemHTML = generateItemHTML(product, true);
		// Append the generated productHTML to the results container
		resultsContainer.append(productItemHTML);
	}
}

// Registers the search event handler on an HTML item with id = search
/**
 *  Init function registers the search button on click event
 *  handler and binds its to the search function. This function
 *  also calls initProducts function used to initialize the products
 *  list and display the products to the user.
 */
function init() {
	// bind the search function to the search button element on click event
	$("#search").on("click", search);
	// initialize the products list
	initProducts();
}

// Finally, call the init function.
init();

//
/* EOF */
//
