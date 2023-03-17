import chalk from "chalk"
//import { add } from "./math.js"
//import { subtract } from "./math.js"
import { get30DaysAgo, get60DaysAgo, getOneYearAgo } from "./date.js";


//console.log(add(2,2));
//console.log(subtract(8,3));
console.log(chalk.red(get30DaysAgo()));
console.log(chalk.red(get60DaysAgo()));
console.log(chalk.red(getOneYearAgo()));