// Observe the html script first...

// Question 1 - The html is not attached to the script file, add the script info in header of html --- 1 mark

// Question 2 - Create a constant to hold your first name and store it in firstName
const firstName = "Rushikesh";

// Create a constant to get the paragraph from question 2 html and store it in question2Text
const question2Text = document.querySelector('#myFirstName');

// Output your first name stored in firstName to question2Text p tag --- 3 marks
question2Text.textContent = firstName;

// Question 3 - Have a close look at the following code:
let employee = {
    name: ['Biff', 'Henderson'],
    employeeNumber: 30573,
    department: 'Repossesions',
    interests: ['the Mob', 'fast cars', 'baseball'],
    active: true
};

/* Write a short script that creates an interesting sentence by concatenating members of the above employee 
    object together (using either dot notation or bracket notation). Include as much information about the employee as you can. 
    Output the resulting content as text inside the question3 paragraph element. --- 5 marks */
const question3Para = document.querySelector('.question3');

question3Para.textContent = `${employee.name[0]} ${employee.name[1]} is an employee with employee number ${employee.employeeNumber} in the ${employee.department} department. He is interested in ${employee.interests[0]}, ${employee.interests[1]} and ${employee.interests[2]}.`;

// Question 4 - Consider the following block of code:
const question4Para = document.querySelector('#question4');
class Coffee {
    constructor(type, size) {
        this.type = type;
        this.size = size;
    };

    // Method to order a coffee
    coffeeOrder() {
        question4Para.textContent = `You have ordered a ${this.size} ${this.type} coffee.`;
    };
};

// Continue with the JavaScript portion of this code above to do the following, making use of the Coffee class above:
// Create a new instance of the Coffee object, picking whatever type of coffee you like(latte, espresso, americano, etc.), 
// and whatever size you like(extra large, large, medium, small, etc.).
const myCoffee = new Coffee('latte', 'large');

// Call the coffeeOrder method to output your coffee order to the screen as text inside the paragraph element(represented by const question4Para).
// Comment and format your above code appropriately. --- 5 marks
myCoffee.coffeeOrder();

// Question 5 - Consider the following JavaScript:
let sandwich3 = {
    bread: 'multigrain',
    meat: 'sliced turkey',
    vegetables: {
        tomatoes: 'roma',
        lettuce: 'romaine',
        pickles: 'kosher dill'
    },
    spread: 'garlic mayonnaise'
};
// Write a snippet of code which would point to the type of tomatoes used to make the sandwich3 object
// Qutput the result pf tomatoes. i.e. "roma" in this case to the question5 paragraph --- 2 marks
const question5Para = document.querySelector('.question5');
question5Para.textContent = sandwich3.vegetables.tomatoes;

// Question 6 - Given the below JavaScript object, car1, 
let car1 = {
    type: 'coupe',
    color: 'red',
    fuelType: 'battery electric',
    description: function () {
        alert(`This car is a ${this.color} ${this.fuelType} powered ${this.type}.`);
    }
};

// add information about the wheel type (17" aluminum alloy) to the above object? --- 2 marks
car1.wheelType = '17" aluminum alloy';

// Question 7a - Use the below API to generate a url with your student id as the api key
// Base URL - https://lamp.computerstudi.es/~Priyansh001/jslh/test2/api/users.php
// Parameter: api_key = {your student id}
// Sample/example: https://lamp.computerstudi.es/~Priyansh001/jslh/test2/api/users.php?api_key=1234
// Note - The final URL generated will be different for each student in the class and response received will also be different.
//          There is no point in using other student's url, you might receive 0 from this step ahead + academic misconduct!!!

// Create your personalized URL and store it in a const/variable below --- 2 marks
const myApiKey = '1242148';
const apiUrl = `https://lamp.computerstudi.es/~Priyansh001/jslh/test2/api/users.php?api_key=${myApiKey}`;

// Question 7b - Use the above URL to create a fetch request and log the response to your console --- 4 marks
fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));

// Take a break, drink some water and observe your response in any json reader or postman or your browser...

// Question 7c - Create a function that receives the above response as a parameter --- 1 mark
//               You can use this function for next two steps
function handleApiResponse(response) {
    // Convert the response to JSON format
    response.json()
        .then(data => {
            createPersonalInfoElements(data);
            createTableFromData(data);
        })
        .catch(error => console.error('Error parsing response as JSON:', error));
}
// Question 7d - Dynamically create the following tags, store the received data and append everyting to question7d div
// Received Personal ID - h2 tag
// Received Personal First Name - h3 tag
// Received Personal Last Name - h3 tag
// Received Personal Image - img tag  --- 5 marks
function createPersonalInfoElements(data) {
    const question7dDiv = document.querySelector('#question7d');
    const { id, first_name, last_name, image } = data;

    const idElement = document.createElement('h2');
    idElement.textContent = `Received Personal ID: ${id}`;

    const firstNameElement = document.createElement('h3');
    firstNameElement.textContent = `Received Personal First Name: ${first_name}`;

    const lastNameElement = document.createElement('h3');
    lastNameElement.textContent = `Received Personal Last Name: ${last_name}`;

    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = `Image of ${first_name} ${last_name}`;

    question7dDiv.appendChild(idElement);
    question7dDiv.appendChild(firstNameElement);
    question7dDiv.appendChild(lastNameElement);
    question7dDiv.appendChild(imageElement);
}

// Question 7e - For the received random data, create a loop, create appropriate table tags(td|tr|th|tbody), 
//               and similarly like previous question append everything to question7e div --- 10 marks
// Tip - You may want to use associative array to access the values of the object
function createTableFromData(data) {
    const question7eDiv = document.querySelector('#question7e');
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const tr = document.createElement('tr');
            const th = document.createElement('th');
            const td = document.createElement('td');

            th.textContent = key;
            td.textContent = data[key];

            tr.appendChild(th);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }

    table.appendChild(tbody);
    question7eDiv.appendChild(table);
}
// Question 8 - Create an external css file, store in folder and connect with html - 3 marks
// It's fine if the file has just one style in it...


