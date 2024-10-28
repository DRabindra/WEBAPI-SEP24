const Data = require("")


//Main class
//
//attribute has no brackets
class Main{
    constructor(){
        this.data=new Data('data.json');
        this.endpoint=new this.endpoint(this.data);
    }
    async run(){
        await this.endpoint.handleInput();
    }
}

//RUn the main application
const app = new Main();
app.run();