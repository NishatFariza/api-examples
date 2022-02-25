const searchFood = async () =>{
    const searchField =document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText);
    //clear data
    searchField.value ="";
    if(searchText == ''){
        alert('Please! Write your food name')//error handel when no content in searchbar
    }
    else{
         //load data
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    const res =await fetch(url)
    const data = await res.json()
    displaySearchResult(data.meals)


    // fetch(url)
    // .then(res => res.json())
    // .then(data => displaySearchResult(data.meals))
    }
}

const displaySearchResult = meals =>{
   const searchResult =document.getElementById('search-result')
//    searchResult.innerText ="";//previous search result remove korar number 1 way
      searchResult.textContent ='';//previous search result remove korar number 2 way
      if(meals.length == 0){
          alert('Sorry! This food is now unavailable')  // home work show no result found
      }
   meals.forEach(meal => {
    //    console.log(meal)
       const div =document.createElement('div')
       div.classList.add('col')
       div.innerHTML =`
       <div onclick=' loadMealDetails(${meal.idMeal})' class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
          </div>
        </div>  
       `;
       searchResult.appendChild(div)
   })
}
//async use instead of fetch
const loadMealDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId} `

   try{
    const res =await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0])
   }
   catch(error){
       alert('Something went wrong')
   }


//     fetch(url)
//     .then(res => res.json())
//     .then(data =>displayMealDetails(data.meals[0]))
 }

const displayMealDetails = meal =>{
    console.log(meal)
    const mealDetails =document.getElementById('meal-details')
    mealDetails.textContent='';//single meal dekar por onno meal asle replace hoye jabe
    const div =document.createElement('div')
    div.classList.add('card')
    div.innerHTML =`
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDetails.appendChild(div)
}