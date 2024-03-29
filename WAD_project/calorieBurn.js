document.addEventListener("DOMContentLoaded", function() {
    const calculateExerciseButton = document.getElementById("calculateCalorieBurnButton");
    const resultExerciseDiv = document.getElementById("resultCalorieBurn");
    const humanWeight = document.getElementById("humanWeight");
    const addExerciseButton = document.querySelector('.addExercise');
    const ExerciseContainer = document.body;
  
    addExerciseButton.addEventListener('click', function() {
      const newExerciseEntry = document.createElement('div');
      newExerciseEntry.className = 'exercise-entry';
  
      newExerciseEntry.innerHTML = `
        <section class="exerciseTemplate">
          <label for="exerciseItem">Item: </label>
          <select name="exerciseItem" class="exerciseItem"> 
  
          <option value="basketBall">Basketball</option>
          <option value="bowling">Bowling</option>
          <option value="cycling(10 mph)">Cycling</option>
          <option value="dancingAerobic">Dancing(aerobic)</option>
          <option value="dancingSocial">Dancing(Social)</option>
          <option value="gardening">Gardening</option>
          <option value="golf">Golf</option>
          <option value="hiking">Hiking</option>
          <option value="jogging">Jogging</option>
          <option value="running">Running</option>
          <option value="sitting">Sitting</option>
          <option value="skating">Skating</option>
          <option value="skiing">Skiing</option>
          <option value="swimming">Swimming</option>
          <option value="tennis">Tennis</option>
          <option value="walking">Walking</option>
           <option value="weightTraining">Weight Training</option>
    
          
          </select>
          <label for="exerciseQuantity">time duration: </label>
          <input type="number" class="exerciseQuantity"> 
        `;

        addExerciseButton.insertAdjacentElement('beforebegin', newExerciseEntry);
    });
  
    calculateExerciseButton.addEventListener("click", function() {
      const allExercise = document.querySelectorAll('.exercise-entry'); // Select all snack entries
        let caloriesData;
      let totalExerciseCalories = 0;
      const weight = parseFloat(humanWeight.value);

      if (isNaN(weight)) {
        resultExerciseDiv.textContent = "Please enter a valid weight.";
        return; // Exit the function
    }

    
      if(weight>=50 && weight<60){
       caloriesData = {
        "basketBall": 7.5,
        "bowling": 1.2,
        "cycling": 5.5,
        "dancingAerobic": 7.4,
        "dancingSocial": 2.9,
        "gardening": 5.0,
        "golf":4.6,
        "hiking": 4.5,
        "running": 11.4,
        "jogging": 9.3,
        "sitting":1.2,
        "skating":5.9,
        "skiing":7.5,
        "swimming":7.8,
        "tennis":6.0,
        "walking":6.5,
        "weightTraining":6.6

      };
    }
    else if(weight>= 60 && weight<70){
         caloriesData = {
            "basketBall": 8.8,
            "bowling": 1.4,
            "cycling": 6.4,
            "dancingAerobic": 8.6,
            "dancingSocial": 3.3,
            "gardening": 5.9,
            "golf":5.4,
            "hiking": 5.2,
            "running": 13.2,
            "jogging": 10.8,
            "sitting":1.3,
            "skating":6.9,
            "skiing":8.8,
            "swimming":9.0,
            "tennis":6.9,
            "walking":7.6,
            "weightTraining":7.6
    
          };
    }
    else if(weight >=70 && weight<80){
         caloriesData = {
            "basketBall": 10.0,
            "bowling": 1.6,
            "cycling": 7.3,
            "dancingAerobic": 9.8,
            "dancingSocial": 3.7,
            "gardening": 6.7,
            "golf":6.2,
            "hiking": 6.0,
            "running": 15.1,
            "jogging": 12.4,
            "sitting":1.5,
            "skating":7.9,
            "skiing":10,
            "swimming":10.3,
            "tennis":7.9,
            "walking":8.7,
            "weightTraining":8.7
    
          };
    }
    else if(weight>=80){
         caloriesData = {
            "basketBall": 11.3,
            "bowling": 1.9,
            "cycling": 8.2,
            "dancingAerobic": 11.1,
            "dancingSocial": 4.2,
            "gardening": 7.5,
            "golf":7.0,
            "hiking": 6.7,
            "running": 17.0,
            "jogging": 13.9,
            "sitting":1.7,
            "skating":8.8,
            "skiing":11.3,
            "swimming":11.6,
            "tennis":8.9,
            "walking":9.7,
            "weightTraining":9.8
    
          };
    }
      

      allExercise.forEach(exercise => {
        const exerciseItem = exercise.querySelector(".exerciseItem").value;
        const exerciseQuantity = parseFloat(exercise.querySelector(".exerciseQuantity").value) || 0;
    
        totalExerciseCalories += calculateTotalExerciseCalories(caloriesData[exerciseItem], exerciseQuantity);
    });
    
      resultExerciseDiv.textContent = `Total Calories: ${totalExerciseCalories.toFixed(2)}`;
    });
  
    function calculateTotalExerciseCalories(item, quantity) {
      return item * quantity;
    }
  });
  