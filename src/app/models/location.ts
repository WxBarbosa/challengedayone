import { Latest } from './latest'
import { Coordinate } from './coordenates'

export class Location{
    coordinates : Coordinate
    country : string
    country_code : string
    id : number
    last_updated : string
    latest : Latest
    province : string
}