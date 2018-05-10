import { Component, OnInit } from '@angular/core';
import {PaletteService} from '../palette.service';
@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  constructor(private paletteService:PaletteService) { }

  ngOnInit() {
  }

  clickPalette(color:string) {
  	this.paletteService.palette = color;
  }

}
