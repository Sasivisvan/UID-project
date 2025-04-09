const smartphones = [
  {
    Name: "iPhone 13",
    Camera: 12,
    Battery: 3227,
    Display: 6.1,
    RAM: 4,
    Storage: 128,
    Price: "Unknown",
  },
  {
    Name: "Samsung Galaxy S21",
    Camera: 64,
    Battery: 4000,
    Display: 6.2,
    RAM: 8,
    Storage: 128,
    Price: "Unknown",
  },
  {
    Name: "Google Pixel 6",
    Camera: 50,
    Battery: 4600,
    Display: 6.4,
    RAM: 8,
    Storage: 128,
    Price: "Unknown",
  },
  {
    Name: "OnePlus 9",
    Camera: 48,
    Battery: 4500,
    Display: 6.55,
    RAM: 12,
    Storage: 256,
    Price: "Unknown",
  },
  {
    Name: "Xiaomi Mi 11",
    Camera: 108,
    Battery: 4600,
    Display: 6.81,
    RAM: 8,
    Storage: 128,
    Price: "Unknown",
  },
  {
    Name: "Oppo Find X3 Pro",
    Camera: 50,
    Battery: 4500,
    Display: 6.7,
    RAM: 12,
    Storage: 256,
    Price: "Unknown",
  },
  {
    Name: "Huawei P40 Pro",
    Camera: 50,
    Battery: 4200,
    Display: 6.58,
    RAM: 8,
    Storage: 128,
    Price: "Unknown",
  },
  {
    Name: "Realme GT 5G",
    Camera: 64,
    Battery: 4500,
    Display: 6.43,
    RAM: 8,
    Storage: 128,
    Price: "Unknown",
  },
  {
    Name: "Asus ROG Phone 5",
    Camera: 64,
    Battery: 6000,
    Display: 6.78,
    RAM: 16,
    Storage: 512,
    Price: "Unknown",
  },
  {
    Name: "Motorola Edge 20 Pro",
    Camera: 108,
    Battery: 4500,
    Display: 6.7,
    RAM: 12,
    Storage: 256,
    Price: "Unknown",
  },
];

function compare() {
  var s1 = document.getElementById("smartphone1").value;
  var s2 = document.getElementById("smartphone2").value;
  for (var i = 0; i < smartphones.length; i++) {
    if (smartphones[i].Name == s1) {
      var smartphone1 = smartphones[i];
    }
    if (smartphones[i].Name == s2) {
      var smartphone2 = smartphones[i];
    }
  }
  display(smartphone1, smartphone2);
}

function display(smartphone1, smartphone2) {
  let better = "rgb(144, 238, 144)";
  let worse = "rgb(225, 100, 100)";
  // Display smartphone 1 details
  document.getElementById("phone-1-name").innerHTML = smartphone1.Name;
  document.getElementById("phone-1-camera-value").innerHTML =
    smartphone1.Camera;
  document.getElementById("phone-1-battery-value").innerHTML =
    smartphone1.Battery;
  document.getElementById("phone-1-display-value").innerHTML =
    smartphone1.Display;
  document.getElementById("phone-1-ram-value").innerHTML = smartphone1.RAM;
  document.getElementById("phone-1-storage-value").innerHTML =
    smartphone1.Storage;
  document.getElementById("phone-1-price-value").innerHTML = smartphone1.Price; // Display price

  // Display smartphone 2 details
  document.getElementById("phone-2-name").innerHTML = smartphone2.Name;
  document.getElementById("phone-2-camera-value").innerHTML =
    smartphone2.Camera;
  document.getElementById("phone-2-battery-value").innerHTML =
    smartphone2.Battery;
  document.getElementById("phone-2-display-value").innerHTML =
    smartphone2.Display;
  document.getElementById("phone-2-ram-value").innerHTML = smartphone2.RAM;
  document.getElementById("phone-2-storage-value").innerHTML =
    smartphone2.Storage;
  document.getElementById("phone-2-price-value").innerHTML = smartphone2.Price; // Display price

  // Compare Price
  if (smartphone1.Price < smartphone2.Price) {
    document.getElementById("phone-1-price-value").style.backgroundColor =
      better;
    document.getElementById("phone-2-price-value").style.backgroundColor =
      worse;
  } else if (smartphone1.Price > smartphone2.Price) {
    document.getElementById("phone-1-price-value").style.backgroundColor =
      worse;
    document.getElementById("phone-2-price-value").style.backgroundColor =
      better;
  } else {
    document.getElementById("phone-1-price-value").style.backgroundColor =
      "lightgrey";
    document.getElementById("phone-2-price-value").style.backgroundColor =
      "lightgrey";
  }

  // Compare Camera
  if (smartphone1.Camera > smartphone2.Camera) {
    document.getElementById("phone-1-camera-value").style.backgroundColor =
      better;
    document.getElementById("phone-2-camera-value").style.backgroundColor =
      worse;
  } else if (smartphone1.Camera < smartphone2.Camera) {
    document.getElementById("phone-1-camera-value").style.backgroundColor =
      worse;
    document.getElementById("phone-2-camera-value").style.backgroundColor =
      better;
  } else {
    document.getElementById("phone-1-camera-value").style.backgroundColor =
      "lightgrey";
    document.getElementById("phone-2-camera-value").style.backgroundColor =
      "lightgrey";
  }

  // Compare Battery
  if (smartphone1.Battery > smartphone2.Battery) {
    document.getElementById("phone-1-battery-value").style.backgroundColor =
      better;
    document.getElementById("phone-2-battery-value").style.backgroundColor =
      worse;
  } else if (smartphone1.Battery < smartphone2.Battery) {
    document.getElementById("phone-1-battery-value").style.backgroundColor =
      worse;
    document.getElementById("phone-2-battery-value").style.backgroundColor =
      better;
  } else {
    document.getElementById("phone-1-battery-value").style.backgroundColor =
      "lightgrey";
    document.getElementById("phone-2-battery-value").style.backgroundColor =
      "lightgrey";
  }

  // Compare Display
  if (smartphone1.Display > smartphone2.Display) {
    document.getElementById("phone-1-display-value").style.backgroundColor =
      better;
    document.getElementById("phone-2-display-value").style.backgroundColor =
      worse;
  } else if (smartphone1.Display < smartphone2.Display) {
    document.getElementById("phone-1-display-value").style.backgroundColor =
      worse;
    document.getElementById("phone-2-display-value").style.backgroundColor =
      better;
  } else {
    document.getElementById("phone-1-display-value").style.backgroundColor =
      "lightgrey";
    document.getElementById("phone-2-display-value").style.backgroundColor =
      "lightgrey";
  }

  // Compare RAM
  if (smartphone1.RAM > smartphone2.RAM) {
    document.getElementById("phone-1-ram-value").style.backgroundColor = better;
    document.getElementById("phone-2-ram-value").style.backgroundColor = worse;
  } else if (smartphone1.RAM < smartphone2.RAM) {
    document.getElementById("phone-1-ram-value").style.backgroundColor = worse;
    document.getElementById("phone-2-ram-value").style.backgroundColor = better;
  } else {
    document.getElementById("phone-1-ram-value").style.backgroundColor =
      "lightgrey";
    document.getElementById("phone-2-ram-value").style.backgroundColor =
      "lightgrey";
  }

  // Compare Storage
  if (smartphone1.Storage > smartphone2.Storage) {
    document.getElementById("phone-1-storage-value").style.backgroundColor =
      better;
    document.getElementById("phone-2-storage-value").style.backgroundColor =
      worse;
  } else if (smartphone1.Storage < smartphone2.Storage) {
    document.getElementById("phone-1-storage-value").style.backgroundColor =
      worse;
    document.getElementById("phone-2-storage-value").style.backgroundColor =
      better;
  } else {
    document.getElementById("phone-1-storage-value").style.backgroundColor =
      "lightgrey";
    document.getElementById("phone-2-storage-value").style.backgroundColor =
      "lightgrey";
  }
}

// Call the display function to populate the data
