import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoardService } from './board.service';
import { NodeComponent } from './node/node.component';
import { PaletteComponent } from './palette/palette.component';
import { PaletteService } from './palette.service';
import { CurrentColorComponent } from './current-color/current-color.component';
import { BoardComponent } from './board/board.component';


@NgModule({
  declarations: [
    AppComponent,
    NodeComponent,
    PaletteComponent,
    CurrentColorComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BoardService, PaletteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
