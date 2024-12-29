import _ from 'lodash';
import './style.css'
import { Grid } from "gridjs";

type Board = Array<Array<number | null>>;

class Controller {
    board: Board;
    boardSize: number;

    constructor(board: Board) {
        this.board = [];
        this.boardSize = 2;
        this.getPlace();
    }


    getPlace() :void {


    }
}


function start() {
    let controller = new Controller;

    const mygrid = new Grid({
        data: [controller.board]
    }).render(document.getElementById('gridjs'));
}
start();

