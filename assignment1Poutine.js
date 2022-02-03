const Order = require("./assignment1Order");

const OrderState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    SIZE:   Symbol("size"),
    TOPPINGS:   Symbol("toppings"),
    DESSERTS:   Symbol("Desserts"),
    NACHOS:   Symbol("Nachos"),
    TACHOS:   Symbol("Tachos"),
    DRINKS:  Symbol("drinks")
});

module.exports = class poutineOrder extends Order{
    constructor(){
        super();
        this.stateCur = OrderState.WELCOMING;
        this.sSize = "";
        this.sToppings = "";
        this.sDesserts = "";
        this.sNachos = "";
        this.sTachos = "";
        this.sDrinks = "";
        this.sItem = "Poutine";
    }
    handleInput(sInput){
        let aReturn = [];
        switch(this.stateCur){
            case OrderState.WELCOMING:
                this.stateCur = OrderState.SIZE;
                aReturn.push("Welcome to Senthil's Poutine.");
                aReturn.push("What size would you like?");
                break;
            case OrderState.SIZE:
                this.stateCur = OrderState.TOPPINGS
                this.sSize = sInput;
                aReturn.push("What toppings would you like?");
                break;
            case OrderState.TOPPINGS:
                this.stateCur = OrderState.NACHOS
                this.sToppings= sInput;
                aReturn.push(" How many Nachos would you like to have?");
                break;
            case OrderState.NACHOS:
                this.stateCur = OrderState.TACHOS
                this.sNachos = sInput;
                aReturn.push(" How many Tachos would you like to have?");
                break;
            case OrderState.TACHOS:
                this.stateCur = OrderState.DESSERTS
                this.sTachos = sInput;
                aReturn.push("What dessert would you like - Ice cream or pastry?");
                break;
            case OrderState.DESSERTS:
                this.stateCur = OrderState.DRINKS
                this.sDesserts = sInput;
                aReturn.push("What drinks would you like with that?");
                break;
            case OrderState.DRINKS:
                this.isDone(true);
                if(sInput.toLowerCase() != "no"){
                    this.sDrinks = sInput;
                }
                
                aReturn.push("Thank-you for your order of");
                aReturn.push(`${this.sSize} ${this.sItem} with ${this.sToppings}`);
                aReturn.push(`along with ${this.sNachos} Nachos and ${this.sTachos} Tachos`);
                if(`with${this.sDrinks}`){
                    aReturn.push(`and ${this.sDrinks}`);
                }
                let d = new Date(); 
                d.setMinutes(d.getMinutes() + 20);
                aReturn.push(`Please pick it up at ${d.toTimeString()}`);
                break;
        }
        return aReturn;
    }
}