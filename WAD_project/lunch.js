
document.addEventListener("DOMContentLoaded", function() {
    const calculateLunchButton = document.getElementById("calculateLunchButton");
    const resultLunchDiv = document.getElementById("resultLunchfast");
  
    const addLunchButton = document.querySelector('.addLunch');
    const lunchContainer = document.body;
  
    addLunchButton.addEventListener('click', function() {
      const newLunchEntry = document.createElement('div');
      newLunchEntry.className = 'lunch-entry';
  
      newLunchEntry.innerHTML = `
        <section class="lunchTemplate">
          <label for="lunchItem">Item: </label>
          <select name="lunchItem" class="lunchItem"> 
  
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
          <label for="lunchQuantity">Quantity: </label>
          <input type="number" class="lunchQuantity"> 
        `;

        addLunchButton.insertAdjacentElement('beforebegin', newLunchEntry);
    });
  
    calculateLunchButton.addEventListener("click", function() {
      const allLunch = document.querySelectorAll('.lunch-entry'); // Select all snack entries
  
      let totalLunchCalories = 0;
  
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
  
      allLunch.forEach(lunch => {
        const lunchItem = lunch.querySelector(".lunchItem").value; // Changed to class
        const lunchQuantity = parseFloat(lunch.querySelector(".lunchQuantity").value) || 0; // Changed to class
  
        totalLunchCalories += calculateTotalLunchCalories(caloriesData[lunchItem], lunchQuantity);
      });
  
      resultLunchDiv.textContent = `Total Calories: ${totalLunchCalories}`;
    });
  
    function calculateTotalLunchCalories(item, quantity) {
      return item * quantity;
    }
  });
  