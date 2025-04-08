// Define individual smartphone variables
const smartphone1 = {
    Name: "iPhone 13",
    Camera: 12,
    Battery: 3227,
    Display: 6.1,
    RAM: 4,
    Storage: 128,
    Price: 69900 // Price in Indian Rupees
};

const smartphone2 = {
    Name: "Samsung Galaxy S21",
    Camera: 64,
    Battery: 4000,
    Display: 6.2,
    RAM: 8,
    Storage: 128,
    Price: 74999 // Price in Indian Rupees
};

function display(smartphone1, smartphone2) {
    let better = "rgb(144, 238, 144)";
    let worse = "rgb(225, 100, 100)";
    // Display smartphone 1 details
    document.getElementById("phone-1-name").innerHTML = smartphone1.Name;
    document.getElementById("phone-1-camera-value").innerHTML = smartphone1.Camera;
    document.getElementById("phone-1-battery-value").innerHTML = smartphone1.Battery;
    document.getElementById("phone-1-display-value").innerHTML = smartphone1.Display;
    document.getElementById("phone-1-ram-value").innerHTML = smartphone1.RAM;
    document.getElementById("phone-1-storage-value").innerHTML = smartphone1.Storage;
    document.getElementById("phone-1-price-value").innerHTML = smartphone1.Price; // Display price

    // Display smartphone 2 details
    document.getElementById("phone-2-name").innerHTML = smartphone2.Name;
    document.getElementById("phone-2-camera-value").innerHTML = smartphone2.Camera;
    document.getElementById("phone-2-battery-value").innerHTML = smartphone2.Battery;
    document.getElementById("phone-2-display-value").innerHTML = smartphone2.Display;
    document.getElementById("phone-2-ram-value").innerHTML = smartphone2.RAM;
    document.getElementById("phone-2-storage-value").innerHTML = smartphone2.Storage;
    document.getElementById("phone-2-price-value").innerHTML = smartphone2.Price; // Display price

    // Compare Price
    if (smartphone1.Price < smartphone2.Price) {
        document.getElementById("phone-1-price-value").style.backgroundColor = better;
        document.getElementById("phone-2-price-value").style.backgroundColor = worse;
    } else if (smartphone1.Price > smartphone2.Price) {
        document.getElementById("phone-1-price-value").style.backgroundColor = worse;
        document.getElementById("phone-2-price-value").style.backgroundColor = better;
    } else {
        document.getElementById("phone-1-price-value").style.backgroundColor = "lightgrey";
        document.getElementById("phone-2-price-value").style.backgroundColor = "lightgrey";
    }

    // Compare Camera
    if (smartphone1.Camera > smartphone2.Camera) {
        document.getElementById("phone-1-camera-value").style.backgroundColor = better;
        document.getElementById("phone-2-camera-value").style.backgroundColor = worse;
    } else if (smartphone1.Camera < smartphone2.Camera) {
        document.getElementById("phone-1-camera-value").style.backgroundColor = worse;
        document.getElementById("phone-2-camera-value").style.backgroundColor = better;
    } else {
        document.getElementById("phone-1-camera-value").style.backgroundColor = "lightgrey";
        document.getElementById("phone-2-camera-value").style.backgroundColor = "lightgrey";
    }

    // Compare Battery
    if (smartphone1.Battery > smartphone2.Battery) {
        document.getElementById("phone-1-battery-value").style.backgroundColor = better;
        document.getElementById("phone-2-battery-value").style.backgroundColor = worse;
    } else if (smartphone1.Battery < smartphone2.Battery) {
        document.getElementById("phone-1-battery-value").style.backgroundColor = worse;
        document.getElementById("phone-2-battery-value").style.backgroundColor = better;
    } else {
        document.getElementById("phone-1-battery-value").style.backgroundColor = "lightgrey";
        document.getElementById("phone-2-battery-value").style.backgroundColor = "lightgrey";
    }

    // Compare Display
    if (smartphone1.Display > smartphone2.Display) {
        document.getElementById("phone-1-display-value").style.backgroundColor = better;
        document.getElementById("phone-2-display-value").style.backgroundColor = worse;
    } else if (smartphone1.Display < smartphone2.Display) {
        document.getElementById("phone-1-display-value").style.backgroundColor = worse;
        document.getElementById("phone-2-display-value").style.backgroundColor = better;
    } else {
        document.getElementById("phone-1-display-value").style.backgroundColor = "lightgrey";
        document.getElementById("phone-2-display-value").style.backgroundColor = "lightgrey";
    }

    // Compare RAM
    if (smartphone1.RAM > smartphone2.RAM) {
        document.getElementById("phone-1-ram-value").style.backgroundColor = better;
        document.getElementById("phone-2-ram-value").style.backgroundColor = worse;
    } else if (smartphone1.RAM < smartphone2.RAM) {
        document.getElementById("phone-1-ram-value").style.backgroundColor = worse;
        document.getElementById("phone-2-ram-value").style.backgroundColor = better;
    } else {
        document.getElementById("phone-1-ram-value").style.backgroundColor = "lightgrey";
        document.getElementById("phone-2-ram-value").style.backgroundColor = "lightgrey";
    }

    // Compare Storage
    if (smartphone1.Storage > smartphone2.Storage) {
        document.getElementById("phone-1-storage-value").style.backgroundColor = better;
        document.getElementById("phone-2-storage-value").style.backgroundColor = worse;
    } else if (smartphone1.Storage < smartphone2.Storage) {
        document.getElementById("phone-1-storage-value").style.backgroundColor = worse;
        document.getElementById("phone-2-storage-value").style.backgroundColor = better;
    } else {
        document.getElementById("phone-1-storage-value").style.backgroundColor = "lightgrey";
        document.getElementById("phone-2-storage-value").style.backgroundColor = "lightgrey";
    }
}
// Create an array of smartphones
const smartphones = [smartphone1, smartphone2];

// Example usage: Logging the smartphones array
console.log(smartphones);

// Call the display function to populate the data
display(smartphone1, smartphone2);