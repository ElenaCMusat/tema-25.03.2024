// Tema 25.03

// Ex 1) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze suma totala de plata. Pretul fiecarui produs sa includa si TVA 19%


// const cartProducts = [
//     {
//         id: 83172,
//         price: 199,
//         name: 'Product X',
//         quantity: 2,
//     },
//     {
//         id: 897032,
//         price: 50,
//         name: 'Product Y',
//         quantity: 4,
//     },
//     {
//         id: 3821,
//         price: 90,
//         name: 'Product Z',
//         quantity: 5,
//     },
// ];

// const getCartTotal = (arrayOfProducts) => {
//     let total = 0;

//     for (let i = 0;i < arrayOfProducts.length;i++) {
//         const productPrice = arrayOfProducts[i].price * arrayOfProducts[i].quantity + 0.19 * arrayOfProducts[i].price ;
//         total += productPrice;
//     }

//     return total;
// };

// console.log( getCartTotal(cartProducts) );







// Ex 2) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze "Ai livrare gratuita daca cumperi 5 bucati din produsul Z"


// const cartProducts = [
//     {
//         id: 83172,
//         price: 199,
//         name: 'Product X',
//         quantity: 2,
//     },
//     {
//         id: 897032,
//         price: 50,
//         name: 'Product Y',
//         quantity: 4,
//     },
//     {
//         id: 3821,
//         price: 90,
//         name: 'Product Z',
//         quantity: 5,
//     },
// ];

// const getDeliveryMessage = (arrayOfProducts) => {
//     let sum = 0;

//     for (let i = 2;i < arrayOfProducts.lenght;i++) {
//         sum += arrayOfProducts[i].quantity;
//     }

//     if (sum < 5) {
        
//         return "Ai livrare gratuita daca cumperi 5 bucati din produsul Z";
//     }

   
// };


// console.log (getDeliveryMessage(cartProducts));
 





// Ex 3) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze suma totala a produselor care au pretul mai mare decat 80.

// const cartProducts = [
//     {
//         id: 83172,
//         price: 199,
//         name: 'Product X',
//         quantity: 2,
//     },
//     {
//         id: 897032,
//         price: 50,
//         name: 'Product Y',
//         quantity: 4,
//     },
//     {
//         id: 3821,
//         price: 90,
//         name: 'Product Z',
//         quantity: 5,
//     },
// ];

// const getSumaTotala = (arrayOfProducts) => {
//     let sum = 0;

//     for (let i = 0;i < arrayOfProducts.length;i++) {
//         const priceValue = arrayOfProducts[i].price > 80;
//         sum += priceValue;
//     }

//     if (sum > 80) {
//         return sum;
//     }

   
// };

// console.log(getSumaTotala(cartProducts));






// Ex 4.1) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze numarul total de tipuri de produse din cos


// const cartProducts = [
//     {
//         id: 83172,
//         price: 199,
//         name: 'Product X',
//         quantity: 2,
//     },
//     {
//         id: 897032,
//         price: 50,
//         name: 'Product Y',
//         quantity: 4,
//     },
//     {
//         id: 3821,
//         price: 90,
//         name: 'Product Z',
//         quantity: 5,
//     },
// ];

// const getQuantity = (arrayOfProducts) => {
//     let total = 0;

//     for (let i = 0;i < arrayOfProducts.lenght;i++) {
//         total += arrayOfProducts[i].quantity;

        
//     }

//     return total;
// };


// console.log (getQuantity(cartProducts));










// Ex 4.2) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze numarul total de produse din cos



// const cartProducts = [
//     {
//         id: 83172,
//         price: 199,
//         name: 'Product X',
//         quantity: 2,
//     },
//     {
//         id: 897032,
//         price: 50,
//         name: 'Product Y',
//         quantity: 4,
//     },
//     {
//         id: 3821,
//         price: 90,
//         name: 'Product Z',
//         quantity: 5,
//     },
// ];

// const getQuantity = (arrayOfProducts) => {
//     let total = 0;

//     for (let i = 0;i < arrayOfProducts.lenght;i++) {
//         total += arrayOfProducts[i].quantity;

        
//     }

//     return total;
// };


// console.log (getQuantity(cartProducts));



// ---- De aici incolo folositi array-ul de produse lasat mai jos (puteti sa modificati datele, structura e importanta)



// Ex 5) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze numarul total de produse din cos care sunt din categoria 'jewelery'


// const cartProducts = [

// {

// id: 83172,
// price: 549,
// name: 'Product A',
// quantity: 2,
// category: "jewelery",

// },

// {

// id: 897032,
// price: 100,
// name: 'Product B',
// quantity: 4,
// category: "electronics",

// },

// {

// id: 3821,
// price: 90,
// name: 'Product C',
// quantity: 5,
// category: "women-clothing",

// },

// {

// id: 319,
// price: 30,
// name: 'Product D',
// quantity: 2,
// category: "women-clothing",

// },

// {

// id: 9342,
// price: 2000,
// name: 'Product E',
// quantity: 1,
// category: "jewelery",

// },

// {

// id: 8,
// price: 180,
// name: 'Product F',
// quantity: 2,
// category: "electronics",

// },

// ];

// const jeweleryProducts = (arrayOfProducts) => {

//     let total = 0;

//     for (let i = 0; i < arrayOfProducts.lenght; i++) {
//         total += arrayOfProducts[i].quantity;
// };

// if (arrayOfProducts[i].category === "jewelery") {

//     return total;
// };

// };

// console.log (jeweleryProducts(arrayOfProducts));











// Ex 6) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze mesajul "Ai cumparat produse din categoria de bijuterii in valoare de X lei"


const cartProducts = [

{

id: 83172,
price: 549,
name: 'Product A',
quantity: 2,
category: "jewelery",

},

{

id: 897032,
price: 100,
name: 'Product B',
quantity: 4,
category: "electronics",

},

{

id: 3821,
price: 90,
name: 'Product C',
quantity: 5,
category: "women-clothing",

},

{

id: 319,
price: 30,
name: 'Product D',
quantity: 2,
category: "women-clothing",

},

{

id: 9342,
price: 2000,
name: 'Product E',
quantity: 1,
category: "jewelery",

},

{

id: 8,
price: 180,
name: 'Product F',
quantity: 2,
category: "electronics",

},

];

// const getJeweleryTotal = (products) => {

//     let sum = 0;

//     for (let i = 0; i < arrayOfProducts.lenght; i++) {
//         if (products[i].category === 'jewelery') {
//         sum += products[i].price * products[i].quantity;
//         }




//     return `Ai cumparat produse din categoria de bijuterii in valoare de ${sum} lei`;
// };


// console.log (getJeweleryTotal (products) );




// Ex 7) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze mesajul "Cel mai scump produs pe care l-ai selectat este X, ai comandat o cantitate de Y si vei plati Z lei"


// const getTheMostExpensiveProducts = (products) => {

//     let max = products[0].price;

//     for (let i = 1; i < products.lenght; i++) {
//         if (products[i].price > max ) {
//         max = products[i].price;
//         };
//      for (let i = 0; i < products.lenght; i++) {
//         if (products[i].price === max) {
//             return `Cel mai scump produs pe care l-ai selectat este ${products[i].name}, ai comandat o cantitate de ${products[i].quantity} si vei plati ${products[i].price*products[i].quantity} lei`;
//         };

    
// };
//     };
// };
// console.log (getTheMostExpensiveProducts (products) );








// Ex 8) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze mesajul "Cel mai ieftin produs pe care l-ai selectat are id-ul X"



// const getTheMostCheapesProducts = (products) => {

//     let min = products[0].price;
//     let indexOfMin = 0;

//     for (let i = 1; i < products.lenght; i++) {
//         if (products[i].price < min ) {
//         min = products[i].price;
//         indexOfMin = i;
//         };
    
//         return `Cel mai ieftin produs pe care l-ai selectat are id-ul ${products[indexOfMin]}`;
// };
//     };

// console.log (getTheMostCheapesProducts (products) );








// Ex 9) Sa se creeze o functie care primeste ca parametru un array de produse

// Functia sa returneze mesajul "Ai castigat o bratara" daca suma produselor din categoria "women-clothing" depaseste 300



const getTotalOfWomanClothingProducts = (products) => {

    let sum = 0;
   

    for (let i = 0; i < products.lenght; i++) {
        if (products[i].category === 'women-clothing' ) {
       sum += products[i].price*products[i].quantity;
        };
    if (sum > 300) {
        return "Ai castigat o bratara";
    }
};
    };

console.log (getTotalOfWomanClothingProducts (products) );


















// const cartProducts = [

// {

// id: 83172,

// price: 549,

// name: 'Product A',

// quantity: 2,

// category: "jewelery",

// },

// {

// id: 897032,

// price: 100,

// name: 'Product B',

// quantity: 4,

// category: "electronics",

// },

// {

// id: 3821,

// price: 90,

// name: 'Product C',

// quantity: 5,

// category: "women-clothing",

// },

// {

// id: 319,

// price: 30,

// name: 'Product D',

// quantity: 2,

// category: "women-clothing",

// },

// {

// id: 9342,

// price: 2000,

// name: 'Product E',

// quantity: 1,

// category: "jewelery",

// },

// {

// id: 8,

// price: 180,

// name: 'Product F',

// quantity: 2,

// category: "electronics",

// },

// ];