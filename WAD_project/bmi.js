function calculateBMI() {
  // Get input values
  var height = parseFloat(document.getElementById("height").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = parseInt(document.getElementById("age").value);

  // Check if height and weight are valid numbers
  if (isNaN(height) || isNaN(weight)) {
      alert("Please enter valid height and weight.");
      return;
  }

  // Calculate BMI
  var bmi = weight / (height * height);

  // Display BMI
  document.getElementById("result").innerHTML = "Your BMI: " + bmi.toFixed(2);

  // Determine BMI category based on gender and age
  var category = "";
  if (gender === "male") {
      if (age < 18) {
          category = "Category for males under 18";
      } else {
          category = "Category for adult males";
      }
  } else {
      if (age < 18) {
          category = "Category for females under 18";
      } else {
          category = "Category for adult females";
      }
  }

  // Display BMI category
  document.getElementById("category").innerHTML = category;
}