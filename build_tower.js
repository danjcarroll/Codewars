// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;

// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
  var tower = [];
  var space = " ";
  var block = "*";
  
  for (var i=1; i <= nFloors; i++)
  {
    layer = space.repeat(nFloors - i) + block.repeat(i) + block.repeat(i - 1) + space.repeat(nFloors - i);
    tower.push(layer);
  }
  
  return tower;
}