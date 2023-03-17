import chalk from "chalk"
import { DateTime } from "luxon"

console.log(chalk.blue("hello people"))

const thirty = DateTime.now().setZone("America/New_York").minus({ days:30 }).endOf("day").toISO();
console.log(chalk.green(thirty));
const six = DateTime.now().setZone("America/New_York").minus({ months:6 }).endOf("day").toISO();
console.log(chalk.blue(six));
const oneYear = DateTime.now().setZone("America/New_York").minus({ year:1 }).endOf("day").toISO();
console.log(chalk.red(oneYear));

