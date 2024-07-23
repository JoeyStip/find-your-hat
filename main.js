const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr){
        //this.height = arr.length;
        //this.width = arr[0].length;
        this.arr = arr;
        this.URHereX = 0;
        this.URHereY = 0;
        this.gameIsRunning = false;
    };
    runGame(w, h){
        this.gameIsRunning = true;
        this.generateField(w, h);
        while(this.gameIsRunning){
            this.print();
            this.navigateField();
        };
    };

    print(){
        for(let i = 0; i < this.arr.length; i++){
            console.log(this.arr[i].join(''))
        };
    };
    generateField(w, h){
        let arr = [];
        let hatCoor = {
            x: Math.round(Math.random()*w),
            y: Math.round(Math.random()*h)
        };
        for(let i = 0; i < h; i++){
            arr[i] = [];
            for(let j = 0; j < w; j++){
                let x = Math.random()
                let gameCharacter = ''
                if( j==0 && i==0 ){
                    gameCharacter = pathCharacter;
                } else if( j==hatCoor.x && i==hatCoor.y) {
                    gameCharacter = hat;
                } else if(x>0.3 && x<0.5){
                    gameCharacter = hole;
                } else {
                    gameCharacter = fieldCharacter; 
                }
                arr[i].push(gameCharacter)
            };
        };
        this.arr = arr;
    };
    navigateField(){
        let dir = prompt("which way would you like to move? (use WASD keys)");
        //console.log(dir)
        switch(dir){
            case "a": this.URHereX = this.URHereX-1
            break;
            case "s": this.URHereY = this.URHereY+1
            break;
            case "d": this.URHereX = this.URHereX+1
            break;
            case "w": this.URHereY = this.URHereY-1
            break;
        };

        let thisSpot = '';

        if(
            this.URHereX >= this.arr[0].length ||
            this.URHereX < 0 ||
            this.URHereY >= this.arr.length ||
            this.URHereY < 0
        ){
            console.log("Out of bounds! Game over.");
            this.gameIsRunning = false;
        } else {
            thisSpot = this.arr[this.URHereY][this.URHereX];
        }
        if(thisSpot == hole){
            console.log("you fell in a hole! Game over.");
            this.gameIsRunning = false;
        } else if(thisSpot == hat){
            console.log("You found your hat! You win!")
            this.gameIsRunning = false;
        } else if(thisSpot == fieldCharacter){
            this.arr[this.URHereY][this.URHereX] = pathCharacter;
        };
    }; 
};

const myField = new Field([[]]);
myField.runGame(9, 9);

//process.stdout.write("Which direction would you like to move?")
//process.stdin.on('data', myField.navigateField)