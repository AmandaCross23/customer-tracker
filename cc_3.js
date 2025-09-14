let customers = [
    {"name": "Sally Smith", "email": "sally@gmail.com", "purchase": ["Dog toy"]},
    {"name": "Andy Max", "email": "andy@gmail.com", "purchase": ["Laptop"]},
    {"name": "Kayla Sunny", "email": "kayla@gmail.com", "purchase": ["Iphone"]}

];

customers.push({"name": "Harley Mattews", "email": "harley@gmail.com", "purchase": "Dog Bed"});

customers.shift();

customers[0].email = "max@yahoo.com";

customers[1].purchase.push([" Computer Desk"]);

customers.forEach(customers => console.log(`Name: ${customers.name}, Email: ${customers.email}, Purchase: ${customers.purchase}`));

