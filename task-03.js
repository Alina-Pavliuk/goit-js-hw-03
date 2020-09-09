const findBestEmployee = function(employees) {
  let taskQty = 0;
  let bestEmployee = '';
  for(let employee in employees) {
    if (taskQty < employees[employee]){
      taskQty = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
  
};
// const findBestEmployee = function(employees) {
//   const obj = {
//     taskQty: 0,
//     bestEmployee: ''
//   }
    
//   for(let employee in employees) {
//     if (obj.taskQty < employees[employee]){
//       obj.taskQty = employees[employee];
//       obj.bestEmployee = employee;
//     }
//   }
//   return obj.bestEmployee;
   
// };

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

