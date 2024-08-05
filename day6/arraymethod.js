//Get all the countries from Asia continent /region using Filter method

fetch(`https://restcountries.com/v3.1/all`)  
.then(response => response.json())  
.then(data => {  
let asianCountries = data.filter(country => country.region === `Asia`);  
let result=asianCountries.map(country=>`${country.name.common}:${country.region}`).join(`\n`)
console.log(result); 
})  
.catch(error => console.error('Error:', error));







//Get all the countries with a population of less than 2 lakhs using Filter method

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  const countries = data.filter(country => country.population < 200000);
  countries.forEach(country => {
    console.log(`CountryName: ${country.name.common} - population:${country.population}`);
    console.log();
    
    console.log(`------------------------------`);
    
    
  });
})
.catch(error => console.error('Error fetching data:', error));







//Print the following details name, capital, flag, using forEach method

fetch('https://restcountries.com/v3.1/all')
.then(Response=>Response.json())
.then(data=>{
  data.forEach(country=>{
    console.log(`Name:${country.name.common}`);
    console.log(`Capital:${country.capital}`);
    console.log(`Flag:${country.flag}`);
    console.log(`--------------------------------`);
  })
})
.catch(error=>console.log(`Error fetching data:`, error))




//Print the total population of countries using reduce method

fetch('https://restcountries.com/v3.1/all')
.then(responce=>responce.json())
.then(data=>{
  let totalpopulation=data.reduce((accumilation,data)=>{
    return accumilation+data.population
  },0)
  console.log(`Totalpopulation:${totalpopulation}`);
})

.catch(error=>console.log(`Error fething data:`,error))
  







//Print the country that uses US dollars as currency.

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
  let countryUsingUSD = data.filter(country => {
    return country.currencies && country.currencies.USD;
  });

  countryUsingUSD.forEach(country => {
    console.log(`${country.name.common}: USD`);
    console.log(`-------------------------------------`);
    
  });
})
.catch(error => console.error('Error:', error));
