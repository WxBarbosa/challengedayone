import {Generics} from '../models/generics';

export class User extends Generics{
    private username : String;
    private firstname : String;
    private lastname : String;
    private password : String;

    public getUsername = (value) => { 
        this.username = value;
    }

    public setUsername = (value) => {
        this.username = value;
    }

    private validateAttributes = (value) => {        
        const validators = {
            "null" : false,
            "undefined" : false,
            "empty" : false
        };

        return validators[value];
    }
}