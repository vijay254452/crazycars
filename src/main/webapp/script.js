const carData = {
  bmw: {
    name: "BMW X5",
    image: "images/bmw.jpg",
    specs: {
      Engine: "3.0L Turbocharged Inline-6",
      Mileage: "12 km/l",
      Price: "₹ 95 Lakhs",
      Transmission: "8-speed Automatic",
      Fuel: "Petrol"
    }
  },
  audi: {
    name: "Audi A6",
    image: "images/audi.jpg",
    specs: {
      Engine: "2.0L Turbocharged Petrol",
      Mileage: "14 km/l",
      Price: "₹ 65 Lakhs",
      Transmission: "7-speed Automatic",
      Fuel: "Petrol"
    }
  },
  benz: {
    name: "Mercedes C-Class",
    image: "images/benz.jpg",
    specs: {
      Engine: "2.0L Petrol / Diesel",
      Mileage: "13 km/l",
      Price: "₹ 60 Lakhs",
      Transmission: "9-speed Automatic",
      Fuel: "Petrol / Diesel"
    }
  },
  tata: {
    name: "Tata Harrier",
    image: "images/tata.jpg",
    specs: {
      Engine: "2.0L Kryotec Diesel",
      Mileage: "16.8 km/l",
      Price: "₹ 15 Lakhs",
      Transmission: "6-speed Manual/Auto",
      Fuel: "Diesel"
    }
  },
  kia: {
    name: "Kia Seltos",
    image: "images/kia.jpg",
    specs: {
      Engine: "1.5L Petrol / Diesel",
      Mileage: "17 km/l",
      Price: "₹ 12 Lakhs",
      Transmission: "6-speed Manual/Auto",
      Fuel: "Petrol / Diesel"
    }
  }
};

// Load car details dynamically
const params = new URLSearchParams(window.location.search);
const carKey = params.get("car");
if (carKey && carData[carKey]) {
  const car = carData[carKey];
  const container = document.getElementById("car-details");
  container.innerHTML = `
    <h2>${car.name}</h2>
    <img src="${car.image}" alt="${car.name}">
    <h3>Specifications:</h3>
    <ul>
      ${Object.entries(car.specs).map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join("")}
    </ul>
  `;
}

