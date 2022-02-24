const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res =>res.json())
    .then(data =>  displayCountries(data))
}
loadCountries();

const displayCountries = countries =>{
    console.log(countries)
//     for(const country of countries){
//         console.log(country)
//     }
    const countriesDiv =document.getElementById('countries')
       countries.forEach(country =>{
               console.log(country)
            const div =document.createElement('div')
            div.classList.add('country')
            const h3 =document.createElement('h3')
            h3.innerText =country.name;
            div.appendChild(h3);
            const p =document.createElement('P');
            p.innerText =country.capital;
            div.appendChild(p);
            countriesDiv.appendChild(div)


       })

}
