

// Function to Eligiblity to vote
function checkVotingEligibility() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("votingResult");

  if (age >= 18) {
    result.textContent = "✅ You are eligible to vote!";
  } else if (age > 0) {
    result.textContent = "❌ You are not eligible to vote.";
  } else {
    result.textContent = "⚠️ Please enter a valid age.";
  }
}


// Function to calculate total cost
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function to display the total in the DOM
function displayTotal() {
  let price = parseFloat(document.getElementById("price").value);
  let quantity = parseInt(document.getElementById("quantity").value);
  let result = document.getElementById("totalResult");

  if (isNaN(price) || isNaN(quantity)) {
    result.textContent = "⚠️ Please enter valid numbers.";
  } else {
    let total = calculateTotal(price, quantity);
    result.textContent = `Total: $${total.toFixed(2)}`;
  }
}


// Multiplication table for a number
function generateMultiplicationTable() {
  const number = parseInt(document.getElementById("tableInput").value);
  const resultList = document.getElementById("tableResult");
  resultList.innerHTML = "";

  if (isNaN(number)) {
    resultList.innerHTML = "<li>⚠️ Please enter a valid number.</li>";
    return;
  }

  // Multiplication table from 1 to 10
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `${number} x ${i} = ${number * i}`;
    resultList.appendChild(li);
  }
}

// Display students and their pass/fail status
function displayStudentGrades() {
  const students = [
    { name: "Alice", score: 85 },
    { name: "Brian", score: 42 },
    { name: "Cynthia", score: 73 },
    { name: "David", score: 55 },
    { name: "Ella", score: 90 },
  ];

  const gradeList = document.getElementById("gradesResult");
  gradeList.innerHTML = "";

  students.forEach(function (student) {
    const li = document.createElement("li");
    const status = student.score >= 50 ? "✅ Pass" : "❌ Fail";
    li.textContent = `${student.name}: ${student.score} - ${status}`;
    gradeList.appendChild(li);
  });
}


function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  let status = document.getElementById("themeStatus");
  if (document.body.classList.contains("dark-theme")) {
    status.textContent = "Current Theme: Dark 🌙";
  } else {
    status.textContent = "Current Theme: Light ☀️";
  }
}


