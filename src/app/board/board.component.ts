import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	arr: number[];
  constructor(private boardService:BoardService) { }

  ngOnInit() {
  	this.generateBoard();
  }

  generateBoard() {
  	let totalNumberOfNodes = this.boardService.BOARD_COLS * this.boardService.BOARD_ROWS;
  	this.arr = [];
  	for(let i = 0; i < totalNumberOfNodes; i++) {
  		this.arr[i] = i;
  	}
  }

}
