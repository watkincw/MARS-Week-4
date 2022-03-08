// Assignment - Week 4 Day 2

// Pass another {object} into this array
let sales = [
    { item: 'PS4 Pro', stock: 3, originalPrice: 399.99 },
    { item: 'Xbox One X', stock: 1, originalPrice: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, originalPrice: 299.99 },
    { item: 'PS2 Console', stock: 1, originalPrice: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, originalPrice: 199.99, discount: 0.65 },
];

// // log 'starter' array
// console.log(sales);
// console.log(typeof sales);
// console.log(sales[1]);

function editSales() {
    // create a new, empty array with 'salePrice' and 'total'
    let newSalesArr = [];

    // iterate through sales to calculate new sale prices and total value of stock
    for (let i = 0; i < sales.length; i++) {
        // calculate the discounted price, if there is one
        if (sales[i].discount) {
            // calculate discount price
            sales[i].salePrice = sales[i].discount * sales[i].originalPrice;
            // then calculate the 'totalValueOfStock' based on discounted price
            sales[i].totalValueOfStock = sales[i].salePrice * sales[i].stock;
            // push the edited item to 'newSalesArr'
            newSalesArr.push(sales[i]);
        // if there is no discount price, use original price
        } else {
            // calculate the 'totalValueOfStock' based on 'originalPrice'
            sales[i].totalValueOfStock = sales[i].originalPrice * sales[i].stock;
            // push the edited item to 'newSalesArr'
            newSalesArr.push(sales[i]);
        };
    };
    // show each item after alteration
    console.log(newSalesArr);

    return newSalesArr;
};

// Call the 'editSales' function, passing in the sales array
editSales(sales);