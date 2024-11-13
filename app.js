
// Constructor for ToyCar
function ToyCar(model, brand, scale, color, dimensions, material, price, features, stock, releaseYear, weight, manufacturerCountry, vehicleType, colorOptions, packaging, toyFeatures, customerRating) {
    this.model = model;
    this.brand = brand;
    this.scale = scale;
    this.color = color;
    this.dimensions = dimensions;
    this.material = material;
    this.price = price;
    this.features = features;
    this.stock = stock;
    this.releaseYear = releaseYear;
    this.weight = weight;
    this.manufacturerCountry = manufacturerCountry;
    this.vehicleType = vehicleType;
    this.colorOptions = colorOptions;
    this.packaging = packaging;
    this.toyFeatures = toyFeatures;
    this.customerRating = customerRating;
   // Method to update stock
    this.addStock = function(quantity) {
      this.stock += quantity;
    };
  
    // Method to decrease stock
    this.outOfStock = function(quantity) {
      this.stock = Math.max(0, this.stock - quantity); // Ensures stock doesn't go below zero
    };
  }
  
  // Initialize the Ford Mustang GT car object
  const fordMustangGT = new ToyCar(
    "1965 Ford Mustang GT",
    "Jada Toys",
    "1:24",
    "Red",
    { length: 18, width: 8, height: 6 },
    "Die-cast metal",
    24.99,
    ["Opening doors", "Working headlights", "Rubber tires"],
    10,
    1965,
    250,
    "China",
    "Sports car",
    ["Red", "Blue", "Black"],
    "Boxed",
    ["Lights", "Sound effects"],
    4.5
  );
// Reference elements
  const carInfoDiv = document.getElementById('car-info');
  const showInfoButton = document.getElementById('show-info');
  const addStockButton = document.getElementById('add-stock');
  const outOfStockButton = document.getElementById('out-of-stock');
  
  // Display car information in HTML
  function displayCarInfo(car) {
    carInfoDiv.innerHTML = `
      <h2>${car.model} by ${car.brand}</h2>
      <p>Scale: ${car.scale}</p>
      <p>Color: ${car.color}</p>
      <p>Dimensions: ${car.dimensions.length} cm x ${car.dimensions.width} cm x ${car.dimensions.height} cm</p>
      <p>Material: ${car.material}</p>
      <p>Price: $${car.price}</p>
      <p>Features: ${car.features.join(", ")}</p>
      <p><span class="stock">Stock: ${car.stock} units</span></p>
      <p>Release Year: ${car.releaseYear}</p>
      <p>Weight: ${car.weight} grams</p>
      <p>Manufacturer Country: ${car.manufacturerCountry}</p>
      <p>Vehicle Type: ${car.vehicleType}</p>
      <p>Available Color Options: ${car.colorOptions.join(", ")}</p>
      <p>Packaging: ${car.packaging}</p>
      <p>Toy Features: ${car.toyFeatures.join(", ")}</p>
      <p>Customer Rating: ${car.customerRating} stars</p>
    `;
  }
  
  // Event Listeners
  showInfoButton.addEventListener('click', () => displayCarInfo(fordMustangGT));
  addStockButton.addEventListener('click', () => {
    fordMustangGT.addStock(5);
    displayCarInfo(fordMustangGT);
  });
  outOfStockButton.addEventListener('click', () => {
    fordMustangGT.outOfStock(5);
    displayCarInfo(fordMustangGT);
  });
  
