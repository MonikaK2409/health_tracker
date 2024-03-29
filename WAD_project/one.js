
    document.addEventListener("DOMContentLoaded", function() {
      const calculateButton = document.getElementById("calculateButton");
      const resultDiv = document.getElementById("result");
    
      const addButton = document.querySelector('.add-button');
      const snacksContainer = document.body;

      addButton.addEventListener('click', function() {
          const newSnackEntry = document.createElement('div');
          newSnackEntry.className = 'snack-entry';
      
          newSnackEntry.innerHTML = `
              <section id="lunchTemplate"> <!-- Changed to class instead of id -->
                  <label for="snacksItem">Item: </label>
                  <select name="SnacksItem" id="snacksItem"> <!-- Changed to class instead of id -->
                      <option value="eggBoiled">Egg Boiled</option>
                      <option value="eggFried">Egg Fried</option>
                      <option value="eggOmelette">Egg omelette</option>
          <option value="breadButter">Bread Butter</option>
          <option value="chapati">Chapati</option>
          <option value="puri">Puri</option>
          <option value="paratha">Paratha</option>
          <option value="subji">Subji</option>
          <option value="idli">Idli</option>
          <option value="dosaPlain">Dosa Plain</option>
          <option value="dosaMasala">Dosa Masala</option>
          <option value="shambar">Shambar</option>
                  </select>
                  <label for="snacksQuantity">Quantity: </label>
                  <input type="number" id="snacksQuantity"> <!-- Changed to class instead of id -->
              </section>
          `;
          snacksContainer.appendChild(newSnackEntry);
      });

      calculateButton.addEventListener("click", function() {
         
          let totalCalories = 0;

          const caloriesData = {
            "eggBoiled": 100,
            "eggFried": 150,
            "eggOmelette": 120,
            "breadButter": 40,
            "chapati": 80,
            "puri": 180,
            "paratha": 200,
            "subji": 250,
            "idli": 50,
            "dosaPlain": 100,
            "dosaMasala": 120,
            "shambar": 180
          };
      
          const snacksItems = document.getElementById("snacksItem");
          const snacksQuantities = document.getElementById("snacksQuantity");
      
      for (let i = 0; i < snacksItems.length; i++) {
        const item = snacksItems[i].value;
        const quantity = parseFloat(snacksQuantities[i].value) || 0;
        totalCalories += calculateTotalCalories(caloriesData[item], quantity);
      }

          resultDiv.textContent = `Total Calories: ${totalCalories}`;
      });

      function calculateTotalCalories(item, quantity) {
          return item * quantity;
      }
  });


