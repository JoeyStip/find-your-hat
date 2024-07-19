const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr){
        this.height = arr.length;
        this.width = arr[0].length;
        this.arr = arr;
    }
    print(){
        //let arr = this.arr.join(' ');
        for(let i = 0; i < this.height; i++){
            console.log(this.arr[i].join(''))
        };
        //let arr2 = arr.join('');
        //console.log(arr);
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
        const myField = new Field(arr);
        myField.print();
    };
};

const myField = new Field([
    ['*', '░','░'],
    ['░', '░','░'],
    ['░', 'O','░']
])

myField.generateField(9, 5);
//myField.print()


process.stdout.write("Which direction would you like to move?")
//process.stdin.on('data', )