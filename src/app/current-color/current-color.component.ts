import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette.service'

@Component({
  selector: 'app-current-color',
  templateUrl: './current-color.component.html',
  styleUrls: ['./current-color.component.css']
})
export class CurrentColorComponent implements OnInit {

  constructor(private paletteService:PaletteService) { }

  ngOnInit() {
  }

  getPaletteColor() {
  	return this.paletteService.palette;
  }

}
