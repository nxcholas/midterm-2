// Given the following Array of employee objects
const employees = [
  {
    firstName: 'Amy',
    lastName: 'Adams',
    countries: ['Aruba', 'Austrailia', 'Argentina'],
    numberOfCountries: 3,
    numberOfTravelers: 4,
    totalCost: 32500
  },
  {
    firstName: 'Beth',
    lastName: 'Anderson',
    countries: ['Belize', 'Belgium', 'Barbados', 'Belarus'],
    numberOfCountries: 4,
    numberOfTravelers: 5,
    totalCost: 41000
  },
  {
    firstName: 'Chuck',
    lastName: 'Choi',
    countries: ['Canada', 'Cambodia', 'Cameroon'],
    numberOfCountries: 3,
    numberOfTravelers: 2,
    totalCost: 16300
  },
  {
    firstName: 'Dave',
    lastName: 'Chambers',
    countries: ['Denmark'],
    numberOfCountries: 1,
    numberOfTravelers: 1,
    totalCost: 4250
  },
  {
    firstName: 'Eric',
    lastName: 'Edelman',
    countries: ['Ecuador', 'Egypt', 'El Salvador'],
    numberOfCountries: 3,
    numberOfTravelers: 2,
    totalCost: 19750
  },
  {
    firstName: 'Fran',
    lastName: 'Edison',
    countries: ['Finland', 'France'],
    numberOfCountries: 2,
    numberOfTravelers: 3,
    totalCost: 23500
  },
  {
    firstName: 'Gina',
    lastName: 'Gonzalez',
    countries: ['Germany', 'Greece'],
    numberOfCountries: 2,
    numberOfTravelers: 4,
    totalCost: 26000
  },
  {
    firstName: 'Henry',
    lastName: 'Heart',
    countries: ['Hungary'],
    numberOfCountries: 1,
    numberOfTravelers: 1,
    totalCost: 3250
  }
];

// global
const displayBtn = document.getElementById('btnDisplay');


// Given the following array of total cost options (used to populate drop down list options)
const totalCostOptions = [10000, 20000, 30000, 999999];

const populateDropdown = () => {
  // grab container
  const totalCostContainer = document.getElementById('totalCost');
  
  // create elements & append
  totalCostOptions.forEach(option => {
    const optionItem = document.createElement('option');
    optionItem.textContent = option;
    totalCostContainer.append(optionItem);
  })
}
// global
const displayedEmployees = new Set();

function displayData() {
  const lastName = document.getElementById('last-name-input').value;
  const tableContainer = document.getElementById('table');

  if (lastName) {
    let errorMsg = document.getElementById('error-msg');
    errorMsg.textContent = '';

    const totalCostValue = Number(document.getElementById('totalCost').value);
    let found = false;

    employees.forEach(employee => {
      const uniqueId = `${employee.firstName}-${employee.lastName}`; 

      if (
        employee.lastName.toLowerCase().startsWith(lastName.toLowerCase()) &&
        employee.totalCost <= totalCostValue &&
        !displayedEmployees.has(uniqueId)
      ) {
        found = true;
        displayedEmployees.add(uniqueId);

        const tableRowContainer = document.createElement('tr');
        const firstName = document.createElement('td');
        const lastNameTd = document.createElement('td');
        const totalCost = document.createElement('td');

        if (employee.totalCost <= 10000) {
          totalCost.style.backgroundColor = 'lightgreen';
        } else if (employee.totalCost <= 20000) {
          totalCost.style.backgroundColor = 'lightblue';
        } else if (employee.totalCost <= 30000) {
          totalCost.style.backgroundColor = 'yellow';
        } else {
          totalCost.style.backgroundColor = 'lightcoral';
        }

        firstName.textContent = employee.firstName;
        lastNameTd.textContent = employee.lastName;
        totalCost.textContent = employee.totalCost;

        tableRowContainer.append(firstName, lastNameTd, totalCost);
        tableContainer.appendChild(tableRowContainer);
      }
    });

    if (!found) {
      errorMsg.textContent = 'No records match criterion.';
    }

  } else {
    document.getElementById('error-msg').textContent = 'Error, last name not entered.';
  }
}

// function calls
populateDropdown();

// event listeners
displayBtn.addEventListener("click", displayData);