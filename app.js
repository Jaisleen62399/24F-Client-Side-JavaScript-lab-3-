
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
