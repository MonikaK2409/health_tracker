

function calculate() {
    // Get the user inputs
    const intensity = document.getElementById("intensity").value;
    const duration = parseInt(document.getElementById("duration").value);
    const frequency = parseInt(document.getElementById("frequency").value);
    
    // Calculate the calories burnt based on the user inputs
    let caloriesBurntPerMinute;
    
    switch (intensity) {
      case "low":
        caloriesBurntPerMinute = 3.5;
        break;
      case "moderate":
        caloriesBurntPerMinute = 5.0;
        break;
      case "high":
        caloriesBurntPerMinute = 8.0;
        break;
    }
    
    const totalCaloriesBurnt = caloriesBurntPerMinute * duration * frequency;
    
    // Display the result to the user
    const resultElement = document.getElementById("result");
    resultElement.style.display = ("block");
    resultElement.innerHTML = `You burned a total of ${totalCaloriesBurnt} calories!`;
  }
  
