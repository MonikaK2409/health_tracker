
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateSnacksButton");
    const resultDiv = document.getElementById("resultSnacks");
  
    const addButton = document.querySelector('.addSnacks');
    const snacksContainer = document.body;
  
    addButton.addEventListener('click', function() {
      const newSnackEntry = document.createElement('div');
      newSnackEntry.className = 'snack-entry';
  
      newSnackEntry.innerHTML = `
        <section class="snacksTemplate"> 
          <label for="snacksItem">Item: </label>
          <select name="SnacksItem" class="snacksItem"> 
          <option value="nutsandseed">Cashew or Almond</option>
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
          <input type="number" class="snacksQuantity"> 
        </section>
      `;
    //   snacksContainer.appendChild(newSnackEntry);
    addButton.insertAdjacentElement('beforebegin', newSnackEntry);
    });
  
    calculateButton.addEventListener("click", function() {
      const allSnacks = document.querySelectorAll('.snack-entry'); // Select all snack entries
  
      let totalCalories = 0;
  
      const caloriesData = {
        // Calories data here
        "nutsandseed":160,
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
  
      allSnacks.forEach(snack => {
        const snacksItem = snack.querySelector(".snacksItem").value; // Changed to class
        const snacksQuantity = parseFloat(snack.querySelector(".snacksQuantity").value) || 0; // Changed to class
  
        totalCalories += calculateTotalCalories(caloriesData[snacksItem], snacksQuantity);
      });
  
      resultDiv.textContent = `Total Calories: ${totalCalories}`;
    });
  
    function calculateTotalCalories(item, quantity) {
      return item * quantity;
    }
  });
  