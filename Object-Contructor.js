const playeronename='vikas';
const playertwoname='kundal';
const playeronemark='56';
const playertwomark='52';

// instead of this we can  use object in order to make code more cleaner

const playerone={
    name:'vikas',
    mark:'56'

}

const playertwo={
    name:'kundal',
    mark:'52'
}

function winnerPlayer(player){
    console.log(player.name  + ' is the winner of soccer game!');
}

//winnerPlayer(playerone);

// thing we use more than two instance than adapting for object is the only way 
// to go 

// but if there is duplicate name like player we can make
// constructor for them

function player(name,mark){
    this.name=name;
    this.mark=mark;
    this.result=()=>{
        console.log(`result of ${this.name} has declared with marks ${this.mark}`)
    }

}

// initiating the object using the contructor propteries

const player1= new player('vikas', 55);
const player2= new player('kundal',48);

//player1.result();


function book(title,author,number_of_pages,read_this_book){
    this.title=title;
    this.author=author;
    this.number_of_pages=number_of_pages;
    this.read_this_book=read_this_book;

    this.info=()=>{
        return (`The ${this.title} by ${this.author} , ${this.number_of_pages},${read_this_book}`)
    }
}

const book1=new book('Eloquent javascript','vikas', 352,'not read yet');

book1.info();