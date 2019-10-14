export class User {
    // Typescript short-hand systax for a constructor
    // Typescript compiler will grnerate a public field for each constructor parameter and
    // automatically assign the parameter value to the field when we create a new user
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public topic: string,
        public timePreference: string,
        public subcribe: boolean,
    ){}    
}
