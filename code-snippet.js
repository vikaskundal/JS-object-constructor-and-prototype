function player(name,mark){
    this.name=name;
    this.mark=mark;
    this.result=()=>{
        console.log(`result of ${this.name} has declared with marks ${this.mark}`)
    }

}

// take a scenario another deveoper is examining my code
// he want to test one method in player and want to see how child object(player1) behaves
// there without changing anything on parent object player he will make prototype of
// parent object 

player.prototype.bestfriend =function() {
    console.log(`${this.name} best friend is raghav`);
}

const player1= new player('vikas', 55);
const player2= new player('kundal',48);


// every object has its prototype
// we dont have to make it explicitly 

if(Object.getPrototypeOf(player1)=== player.prototype){
    console.log('hello');
}else{
    console.log('bie');
}

player1.bestfriend();

player1.v