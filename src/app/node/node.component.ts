import { Component, OnInit, Input } from '@angular/core';
import {PaletteService} from '../palette.service';
import {BoardService} from '../board.service';


@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

	@Input()
	index:number;

  constructor(private paletteService:PaletteService, private boardService:BoardService) { }

  ngOnInit() {
  }

  getClass() {
  	let x = this.getX();
  	let y = this.getY();
  	return this.boardService.board[x][y];
  }

  changeNode() {
  	let x = this.getX();
  	let y = this.getY();
  	this.boardService.board[x][y] = this.paletteService.palette;
  }

  private getX() {
  	return Math.floor(this.index/this.boardService.BOARD_COLS);
  }

  private getY() {
  	return this.index - this.getX();
  }


}
