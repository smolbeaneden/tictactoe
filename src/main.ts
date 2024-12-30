import './style.css'


class Controller {
    boardSize: number;
    turn: number;
    board: Array<Array<number>>;

    constructor() {
        this.boardSize = 2;
        this.turn = 1;
        this.board= [];
        this.getPlace();

        for (let i = 0; i <= this.boardSize; i++) {
                this.board[i] = [];
            for (let j = 0; j <= this.boardSize; j++) {
                this.board[i][j] = 0;
                document.getElementById("#cell" + i.toString + j.toString).innerHTML = "";
            }
        }
    }


    getPlace() :void {

        for (let i: number = 1; i <= this.boardSize; i++) {
            for (let j = 0; j <= this.boardSize; j++) {
                const cell = document.getElementById(`#cell${i}${j}`);
                cell?.addEventListener("click", this.checkEmpty([i.toString, j.toString]));

            }
        }
    }
    checkEmpty(num: Array<string>) {
        let cellValue = document.getElementById(`#cell ${num}`).innerText;
        if (cellValue != "") {
            document.getElementById(`#cell ${num[0]}${num[1]}`).innerHTML = this.getTurn(this.turn);
            this.board[num[0]][num[1]] = this.turn;
            this.turn *= -1;

        }
        this.checkWin();
    }

    getTurn(num: number = 1 || -1) : string {
        if(num == -1){
            return "o";
        }
        if(num == 1) {
            return "x";
        }
    }

    checkWin() {
       let row : Array<number> = [];
       let column : Array<number> = [];
       let diagonal1 : Array<number> = [];
        let diagonal2 : Array<number> = [];
       for (let i = 0; i <= this.boardSize; i++) {
           diagonal1.push(this.board[i][i]);
           diagonal2.push(this.board[i][this.boardSize-i]);
           row = [];
           column  = [];
           for (let j = 0; j <= this.boardSize; j++) {
               row.push(this.board[i][j]);
               column.push(this.board[j][i]);
           }
           if(row[0] + row[1] + row[2] == Math.abs(3)) {
               return row[0];
           }
           if(column[0] + column[1] + column[2] == Math.abs(3)){
               return column[0];
           }
       }
       if(diagonal1[0] + diagonal1[1] + diagonal1[2] == Math.abs(3) ) {
           return diagonal1[0];
       }
       if(diagonal2[0] + diagonal2[1] + diagonal2[2] == Math.abs(3) ) {
           return diagonal2[0];
       }

    }
}



function start() {
    let controller = new Controller();
    for (let i = 0; i <= controller.boardSize; i++) {
        controller.board[i] = [];
        for (let j = 0; j <= controller.boardSize; j++) {
            controller.board[i][j] = 0;
            document.getElementById("#cell" + i.toString + j.toString).innerHTML = "";
        }
    }

}

document.getElementById("newGame")?.addEventListener("click", start);
start();


