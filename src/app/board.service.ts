import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {
	BOARD_ROWS: number = 10;
	BOARD_COLS: number = 10;
	board:string[][];

  constructor() { 
  	this.generateBoard();
  }

  getBoard() {
  	return this.board;
  }

  setSquare(x, y, value) {
  	this.board[x][y] = value;
  }

  generateBoard() {
  	this.board = [];
  	for(let i = 0; i < this.BOARD_ROWS; i++) {
  		this.board[i] = [];
  		for(let j = 0; j < this.BOARD_COLS; j++) {
  			this.board[i][j] = "gray";
  		}
  	}
  }
}
