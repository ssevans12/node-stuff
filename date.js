
import { DateTime } from "luxon"

export function get30DaysAgo(){
    return DateTime.now()
    .setZone("America/New_York")
    .minus({ days:30 })
    .endOf("day")
    .toISO();

}

export function get60DaysAgo(){

}

export function getOneYearAgo(){

}