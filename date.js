
import { DateTime } from "luxon"

export function get30DaysAgo(){
    return DateTime.now()
    .setZone("America/New_York")
    .minus({ days:30 })
    .endOf("day")
    .toISO();

}

export function get60DaysAgo(){
    return DateTime.now()
    .setZone("America/New_York")
    .minus({ days:60 })
    .endOf("day")
    .toISO();

}

export function getOneYearAgo(){

    return DateTime.now()
    .setZone("America/New_York")
    .minus({ year:1 })
    .endOf("day")
    .toISO();

}