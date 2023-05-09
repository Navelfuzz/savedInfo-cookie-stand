'use strict';
/**
 * TODO: Store the min/max hourly customers, and the avg cookies per customer, in object properties.
TODO: Use a method of that object to generate a random number of customers per hour.
TODO: Calculate the simulated amounts of cookies purchased for each hour based on avg cookies
purchased and the random number of customers generated.
TODO: store cookies at each location using - separate array
TODO: Display the values of each array as unordered lists in the browser.
TODO: Calculating the sum of these hourly totals; your output for each location should look like
on sales.html
 */

/*
function populateHoursArr(a, b) {
    const hours = [];
    for (let i = a; i <=b; i++) {
        if (i === 12) (
            hours.push(`${i}pm`);
        ) else if (i < 12) {
            hours.push(`${i}am`);
        } else {
            hours.push(`${i-12}pm`);
        }
    }
    console.log(hours);
}
*/

let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

let storeSection = document.getElementById('stores');

let seattle = {
  location: 'Seattle',
  minCustomer: '23',
  maxCustomer: '65',
  avgSale: '6.3',
  numCustomer: '0', //will hold a random number of customers
  randNumCust: function (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNum: function () {
    this.numCustomer = this.randNumCust(this.minCustomer, this.maxCustomer);
    return this.numCustomer; //unnecessary?
  },
  cookiePurchase: [],
  totalCookies: 0,

  //calculate cookies and the DOM via render
  render: function () {
    for (let i = 0; i < hours.length; i++){
      let cookiesBought = Math.ceil(this.avgSale * this.getNum()); //round the numbers off.
      console.log(cookiesBought);
      this.totalCookies += cookiesBought; //ading the cookies bought to the total per iteration.
      this.cookiePurchase.push(cookiesBought); //adds to the end of the array
    }

    console.log(this.cookiePurchase);
    console.log('TotalSales:', this.totalCookies);
    /***DOM Manipulation */
    let storeHeading = document.createElement('h2');
    storeHeading.textContent = this.location;
    storeSection.appendChild(storeHeading);
    let storeList = document.createElement('ul');
    storeSection.appendChild(storeList);
    for(let i = 0; i < this.cookiePurchase.length; i++){
      let cookieItem = document.createElement('li');
      cookieItem.textContent = `${hours[i]}: ${this.cookiePurchase[i]} cookies`;
      storeList.appendChild(cookieItem);
    }
    let cookieTotal = document.createElement('li');
    cookieTotal.textContent = `TotalSales: ${this.totalCookies}`;
    storeList.appendChild(cookieTotal);
  }
};
seattle.render();
