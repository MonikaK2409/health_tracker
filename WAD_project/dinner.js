
document.addEventListener("DOMContentLoaded", function() {
    const calculateDinnerButton = document.getElementById("calculateDinnerButton");
    const resultDinnerDiv = document.getElementById("resultDinner");
  
    const addDinnerButton = document.querySelector('.addDinnner');
    const dinnerContainer = document.body;
  
    addDinnerButton.addEventListener('click', function() {
      const newDinnerEntry = document.createElement('div');
      newDinnerEntry.className = 'dinner-entry';
  
      newDinnerEntry.innerHTML = `
        <section class="dinnerTemplate">
          <label for="dinnerItem">Item: </label>
          <select name="dinnerItem" class="dinnerItem"> 
  
          <option value="cookedRice">Cooked Rice(plain)</option>
          <option value="phulka">Phulka</option>
          <option value="nan">Nan</option>
          <option value="dal">Dal</option>
          <option value="curd">Curd</option>
          <option value="curryVegetable">Curry Vegetable</option>
          <option value="curryMeat">Curry Meat</option>
          <option value="salad">Salad</option>
          <option value="papad">Papad</option>
          <option value="cutlet">Cutlet</option>
          <option value="pickle">Pickle</option>
          <option value="soup">Soup</option>
          <option value="milk">Milk</option>
          <option value="freshFruitJuice">Fresh Fruit Juice</option>
          <option value="areatedDrink">Areated Soft Drinks</option>
          <option value="beer">Beer</option>
           <option value="soda">Soda</option>
           <option value="butter">Butter</option>
           <option value="ghee">Ghee</option>
           <option value="sugar">Sugar</option>
           <option value="friedNuts">Fried Nuts</option>
           <option value="puddings">Puddings</option>
           <option value="iceCream">Ice Cream</option>
           <option value="milkShakes">Milk Shakes</option>
          
          </select>
          <label for="dinnerQuantity">Quantity: </label>
          <input type="number" class="dinnerQuantity"> 
        `;

    addDinnerButton.insertAdjacentElement('beforebegin', newDinnerEntry);
    });
  
    calculateDinnerButton.addEventListener("click", function() {
      const allDinner = document.querySelectorAll('.dinner-entry'); // Select all snack entries
  
      let totalDinnerCalories = 0;
  
      const caloriesData = {
        "cookedRice": 120,
            "phulka": 60,
            "nan": 150,
            "dal": 150,
            "curd": 100,
            "curryVegetable": 150,
            "curryMeat": 175,
            "salad": 100,
            "papad": 45,
            "cutlet": 75,
            "pickle": 30,
            "soup": 100,
            "milk":60,
            "freshFruitJuice":120,
            "areatedDrink":90,
            "beer":200,
            "soda":10,
            "butter":50,
            "ghee":50,
            "sugar":30,
            "friedNuts":300,
            "puddings":200,
            "iceCream":200,
            "milkShakes":200
      };
  
      allDinner.forEach(dinner => {
        const dinnerItem = dinner.querySelector(".dinnerItem").value; // Changed to class
        const dinnerQuantity = parseFloat(dinner.querySelector(".dinnerQuantity").value) || 0; // Changed to class
  
        totalDinnerCalories += calculateTotalDinnerCalories(caloriesData[dinnerItem], dinnerQuantity);
      });
  
      resultDinnerDiv.textContent = `Total Calories: ${totalDinnerCalories}`;
    });
  
    function calculateTotalDinnerCalories(item, quantity) {
      return item * quantity;
    }
  });
  