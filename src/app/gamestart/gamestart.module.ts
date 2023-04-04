import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamestartPageRoutingModule } from './gamestart-routing.module';

import { GamestartPage } from './gamestart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamestartPageRoutingModule
  ],
  declarations: [GamestartPage]
})
export class GamestartPageModule {}
