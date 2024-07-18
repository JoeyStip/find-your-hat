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
        for(let i = 0; i < h; i++){
            for(let j = 0; j < w; j++){
                arr[i].push(fieldCharacter)
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

myField.generateField(3, 5);
//myField.print()


process.stdout.write("Which direction would you like to move?")
//process.stdin.on('data', )