// $10 gives you 5 bottles initial
// 5 empty => 2 more bottles (7 total, 1 empty left)
// 4 bottle caps => 1 more bottle (8 total, 1 bottle cap left)

// 1 empty left + 3 bottles = 4 empty => 2 more bottles (10 total)
// 1 bottle cap + 4 bottle cap = 5 bottle caps => 1 more bottle (11 total, 1 bottle cap left)

// 3 empty => 1 more bottle (12 total, 1 empty left)
// 1 bottle cap + 3 bottle cap = 4 bottle caps => 1 more bottle (13 total)

// 1 empty left + 2 bottles = 3 bottles => 1 more bottle (14 total, 1 empty left)
// 2 bottle caps

// 1 empty left + 1 bottle = 2 empty => 1 more bottle (15 total)

// left with 1 empty, 3 bottle caps

const investment = process.argv[2];

const bottles = function(investment) {
  const bottleCost = 2;

  let bottleCount = 0;
  let emptyBottles = 0;
  let bottleCaps = 0;

  bottleCount = investment / bottleCost;

  emptyBottles = bottleCount;
  bottleCaps = bottleCount;

  let fromBottles = 0;
  let fromCaps = 0;

  const recycle = function(emptyBottles, bottleCaps){


    if (emptyBottles < 2 && bottleCaps < 4) {
      return [bottleCount, emptyBottles, bottleCaps, fromBottles, fromCaps];
    } else { 
      let addBottles = Math.floor(emptyBottles / 2) + Math.floor(bottleCaps / 4);
      fromBottles += Math.floor(emptyBottles / 2);
      fromCaps += Math.floor(bottleCaps / 4)

      emptyBottles %= 2;
      bottleCaps %= 4;
        
      bottleCount += addBottles;
      bottleCaps += addBottles;
      emptyBottles += addBottles;
  
      return recycle(emptyBottles, bottleCaps);
    }
    
  };

  [bottleCount, emptyBottles, bottleCaps, fromBottles, fromCaps] = recycle(emptyBottles, bottleCaps);

  const receipt = {
    "TOTAL BOTTLES": bottleCount,
    "REMAINING BOTTLES": emptyBottles,
    "REMAINING CAPS": bottleCaps,
    "TOTAL EARNED": {
      BOTTLES: fromBottles,
      CAPS: fromCaps
    }
  };

  return receipt;
}

console.log(bottles(investment));