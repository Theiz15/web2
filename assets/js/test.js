const foodItems = document.querySelector('.order-list-content'); 
let index = 0;
const itemWidth = document.querySelector('.fooditem').offsetWidth;

function show() {
    // Hide all food items
    const foodItems = document.querySelectorAll(".fooditem");
    foodItems.forEach(item => item.classList.add("hidden"));

    // Show current food item
    foodItems[index].classList.remove("hidden");

    // Show next food item (circular)
    const nextIndex = (index + 1) % foodItems.length;
    foodItems[nextIndex].classList.remove("hidden");

    // Show previous food item (circular)
    const prevIndex = (index - 1 + foodItems.length) % foodItems.length;
    foodItems[prevIndex].classList.remove("hidden");
}

function next() {
    index = (index + 1) % foodItems.length;
    show();
}

function prev() {
    index = (index - 1 + foodItems.length) % foodItems.length;
    show();
}

// Initialize by showing the first image
show(); 