const smartphones = [
  {
    Name: "iPhone 13",
    Camera: 12,
    Battery: 3227,
    Display: 6.1,
    RAM: 4,
    Storage: 128,
    Price: "₹42,999",
    Description: "The iPhone 13 features a 6.1-inch OLED display, A15 Bionic chip, and dual 12MP cameras. It delivers great performance, battery life, and excellent photography features like Night Mode and Cinematic Mode. With 5G support and a sleek design, it's ideal for both everyday users and professionals."
  },
  {
    Name: "Samsung Galaxy S21",
    Camera: 64,
    Battery: 4000,
    Display: 6.2,
    RAM: 8,
    Storage: 128,
    Price: "₹69,999",
    Description: "The Galaxy S21 boasts a 6.2-inch AMOLED display with 120Hz refresh rate, 64MP camera, and 4000mAh battery. Powered by Snapdragon 888/Exynos 2100, it offers fast performance, 5G, and a sleek design, making it a compact flagship choice for Android fans."
  },
  {
    Name: "Google Pixel 6",
    Camera: 50,
    Battery: 4600,
    Display: 6.4,
    RAM: 8,
    Storage: 128,
    Price: "₹52,000",
    Description: "Pixel 6 offers a 6.4-inch OLED display, Google Tensor chip, and a powerful 50MP camera with great low-light capabilities. With Android 12 and a 4600mAh battery, it’s a smart, clean, and customizable phone tailored for photography lovers and Android purists."
  },
  {
    Name: "OnePlus 9",
    Camera: 48,
    Battery: 4500,
    Display: 6.55,
    RAM: 12,
    Storage: 256,
    Price: "₹49,999",
    Description: "The OnePlus 9 delivers fast, smooth performance with Snapdragon 888, 120Hz AMOLED display, and 48MP Hasselblad camera. Its 4500mAh battery charges fully in under 30 minutes. With 12GB RAM and clean OxygenOS, it’s a flagship device built for power users."
  },
  {
    Name: "Xiaomi Mi 11",
    Camera: 108,
    Battery: 4600,
    Display: 6.81,
    RAM: 8,
    Storage: 128,
    Price: "₹54,999",
    Description: "Xiaomi Mi 11 features a 6.81-inch 120Hz AMOLED display, Snapdragon 888, and a stunning 108MP main camera. With 4600mAh battery, fast charging, and Harman Kardon speakers, it's perfect for multimedia and high-performance users looking for flagship specs at a great price."
  },
  {
    Name: "Oppo Find X3 Pro",
    Camera: 50,
    Battery: 4500,
    Display: 6.7,
    RAM: 12,
    Storage: 256,
    Price: "₹69,999",
    Description: "Oppo Find X3 Pro offers a 6.7-inch AMOLED QHD+ display, Snapdragon 888, and dual 50MP cameras. It includes a unique microlens camera, 4500mAh battery with fast charging, and premium design—making it a high-end smartphone for both style and performance enthusiasts."
  },
  {
    Name: "Huawei P40 Pro",
    Camera: 50,
    Battery: 4200,
    Display: 6.58,
    RAM: 8,
    Storage: 128,
    Price: "₹72,000",
    Description: "The Huawei P40 Pro excels in photography with its 50MP Leica quad-camera system. It offers a 6.58-inch OLED display, 90Hz refresh rate, Kirin 990 5G chip, and 4200mAh battery. It’s ideal for camera lovers, despite lacking Google services."
  },
  {
    Name: "Realme GT 5G",
    Camera: 64,
    Battery: 4500,
    Display: 6.43,
    RAM: 8,
    Storage: 128,
    Price: "₹19,999",
    Description: "Realme GT 5G offers Snapdragon 870 power, a 6.43-inch AMOLED 120Hz display, and 64MP camera. With 4500mAh battery and 65W charging, it's a fast, stylish phone delivering flagship performance at an affordable price—great for gamers and multitaskers."
  },
  {
    Name: "Asus ROG Phone 5", 
    Camera: 64,
    Battery: 6000,
    Display: 6.78,
    RAM: 16,
    Storage: 512,
    Price: "₹69,999",
    Description: "The ROG Phone 5 is a gaming beast with a 6.78-inch 144Hz AMOLED display, Snapdragon 888, and 16GB RAM. A massive 6000mAh battery powers long sessions, while features like AirTriggers and stereo speakers enhance the gaming experience."
  },
  {
    Name: "Motorola Edge 20 Pro",
    Camera: 108,
    Battery: 4500,
    Display: 6.7,
    RAM: 12,
    Storage: 256,
    Price: "₹24,999",
    Description: "Motorola Edge 20 Pro combines a 108MP camera, 144Hz OLED display, and Snapdragon 870 for a smooth, powerful experience. With 12GB RAM, 5x zoom, and 4500mAh battery, it's ideal for photography fans and users who want high-end features at a competitive price."
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
  // Define color variables
  let better = "rgb(34, 197, 94)";  // A modern emerald green
  let worse = "rgb(239, 68, 68)";   // A modern soft red
  let neutral = "rgb(43, 43, 43)";        // Neutral color for equal values

  // Set description cards
  document.getElementById("left-title").innerText = smartphone1.Name;
  document.getElementById("left-text").innerText = smartphone1.Description;

  document.getElementById("right-title").innerText = smartphone2.Name;
  document.getElementById("right-text").innerText = smartphone2.Description;

  document.getElementById("left-image").src = smartphone1.Image;
  document.getElementById("right-image").src = smartphone2.Image;

  document.getElementById("left-image").alt = smartphone1.Name + " image";
  document.getElementById("right-image").alt = smartphone2.Name + " image";

  document.getElementById("description-container").classList.add("visible");
  document.getElementById("compare_table").style.visibility = "visible";

  // Display smartphone 1 details
  document.getElementById("phone-1-name").innerHTML = smartphone1.Name;
  document.getElementById("phone-1-camera-value").innerHTML = smartphone1.Camera;
  document.getElementById("phone-1-battery-value").innerHTML = smartphone1.Battery;
  document.getElementById("phone-1-display-value").innerHTML = smartphone1.Display;
  document.getElementById("phone-1-ram-value").innerHTML = smartphone1.RAM;
  document.getElementById("phone-1-storage-value").innerHTML = smartphone1.Storage;
  document.getElementById("phone-1-price-value").innerHTML = smartphone1.Price;

  // Display smartphone 2 details
  document.getElementById("phone-2-name").innerHTML = smartphone2.Name;
  document.getElementById("phone-2-camera-value").innerHTML = smartphone2.Camera;
  document.getElementById("phone-2-battery-value").innerHTML = smartphone2.Battery;
  document.getElementById("phone-2-display-value").innerHTML = smartphone2.Display;
  document.getElementById("phone-2-ram-value").innerHTML = smartphone2.RAM;
  document.getElementById("phone-2-storage-value").innerHTML = smartphone2.Storage;
  document.getElementById("phone-2-price-value").innerHTML = smartphone2.Price;

  // Helper function to compare and color
  function compareValues(val1, val2, id1, id2) {
    if (val1 > val2) {
      document.getElementById(id1).style.backgroundColor = better;
      document.getElementById(id2).style.backgroundColor = worse;
    } else if (val1 < val2) {
      document.getElementById(id1).style.backgroundColor = worse;
      document.getElementById(id2).style.backgroundColor = better;
    } else {
      document.getElementById(id1).style.backgroundColor = neutral;
      document.getElementById(id2).style.backgroundColor = neutral;
    }
  }

  // Perform comparisons
  compareValues(smartphone1.Price, smartphone2.Price, "phone-1-price-value", "phone-2-price-value");
  compareValues(smartphone1.Camera, smartphone2.Camera, "phone-1-camera-value", "phone-2-camera-value");
  compareValues(smartphone1.Battery, smartphone2.Battery, "phone-1-battery-value", "phone-2-battery-value");
  compareValues(smartphone1.Display, smartphone2.Display, "phone-1-display-value", "phone-2-display-value");
  compareValues(smartphone1.RAM, smartphone2.RAM, "phone-1-ram-value", "phone-2-ram-value");
  compareValues(smartphone1.Storage, smartphone2.Storage, "phone-1-storage-value", "phone-2-storage-value");
}


// Call the display function to populate the data
