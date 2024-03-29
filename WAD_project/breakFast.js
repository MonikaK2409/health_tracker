
document.addEventListener("DOMContentLoaded", function() {
    const calculateBrkfastButton = document.getElementById("calculateBrkfastButton");
    const resultBrkfastDiv = document.getElementById("resultBrkfast");
  
    const addBrkfastButton = document.querySelector('.addBrkfast');
    const brkfastContainer = document.body;
  
    addBrkfastButton.addEventListener('click', function() {
      const newBrkfastEntry = document.createElement('div');
      newBrkfastEntry.className = 'brkfast-entry';
  
      newBrkfastEntry.innerHTML = `
        <section class="brkfastTemplate">
          <label for="brkfastItem">Item: </label>
          <select name="brkfastItem" class="brkfastItem"> 
  
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
          <label for="brkfastQuantity">Quantity: </label>
          <input type="number" class="brkfastQuantity"> 
        `;

        addBrkfastButton.insertAdjacentElement('beforebegin', newBrkfastEntry);
    });
  
    calculateBrkfastButton.addEventListener("click", function() {
      const allBrkfast = document.querySelectorAll('.brkfast-entry'); // Select all snack entries
  
      let totalBrkfastCalories = 0;
  
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
  
      allBrkfast.forEach(brkfast => {
        const brkfastItem = brkfast.querySelector(".brkfastItem").value; // Changed to class
        const brkfastQuantity = parseFloat(brkfast.querySelector(".brkfastQuantity").value) || 0; // Changed to class
  
        totalBrkfastCalories += calculateTotalBrkfastCalories(caloriesData[brkfastItem], brkfastQuantity);
      });
  
      resultBrkfastDiv.textContent = `Total Calories: ${totalBrkfastCalories}`;
    });
  
    function calculateTotalBrkfastCalories(item, quantity) {
      return item * quantity;
    }
  });
  