// EXAMPLE 1 - Lowercase all Keys in an Object in JavaScript

function lowercaseKeys(obj) {
  return Object.keys(obj).reduce((accumulator, key) => {
    accumulator[key.toLowerCase()] = obj[key];
    return accumulator;
  }, {});
}

const obj = {
  NAME: 'bobby hadz',
  AGE: 30,
  COUNTY: 'Chile',
};

// 👇️ { name: 'bobby hadz', age: 30, county: 'Chile' }
console.log(lowercaseKeys(obj));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Lowercase all Keys in an Object using `Array.forEach()`

// function lowercaseKeys(obj) {
//   const newObject = {};

//   Object.keys(obj).forEach(key => {
//     newObject[key.toLowerCase()] = obj[key];
//   });

//   return newObject;
// }

// const obj = {
//   NAME: 'bobby hadz',
//   AGE: 30,
//   COUNTY: 'Chile',
// };

// const result = lowercaseKeys(obj);

// // 👇️ { name: 'bobby hadz', age: 30, county: 'Chile' }
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Lowercase all Keys in an Object using `Object.fromEntries()`

// function lowercaseKeys(obj) {
//   const entries = Object.entries(obj);

//   return Object.fromEntries(
//     entries.map(([key, value]) => {
//       return [key.toLowerCase(), value];
//     }),
//   );
// }

// const obj = {
//   NAME: 'bobby hadz',
//   AGE: 30,
//   COUNTY: 'Chile',
// };

// // 👇️ { name: 'bobby hadz', age: 30, county: 'Chile' }
// console.log(lowercaseKeys(obj));
