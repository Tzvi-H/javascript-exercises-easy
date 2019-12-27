/*
problem
  - given an id, return whether that inventory item is available or not.
    (if its qty > 0)
example
  - SEE TEST AT THE END
data structure
algorithm
  - using the transactionsFor function from the previous exercise,
    retrieve the transactions that match the input id
  - retrive the available qty (SUBPROCESS itemQty)
  - return whether the qty is greater than 0
  
  SUBPROCESS itemQty
    - given an array of transactions
    - reduce the array starting with 0 as the accumulator
      - for each transaction
      - if the 'movement' property is 'in'
        - return the accumulator + the 'quantity' property
      - if the 'movement' property is 'out'
        - return the accumulator - the 'quantity' property 
*/

function transactionsFor(id, transactions) {
  return transactions.filter(object => object.id === id);
}

function itemQty(transactions) {
  return transactions.reduce((total, transaction) => {
    return transaction.movement === 'in' ?
           total + transaction.quantity :
           total - transaction.quantity;
  }, 0);
}

function isItemAvailable(id, transactions) {
  let itemTransactions = transactionsFor(id, transactions);
  return itemQty(itemTransactions) > 0;
}

let transactions = [ 
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, 
];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true                    