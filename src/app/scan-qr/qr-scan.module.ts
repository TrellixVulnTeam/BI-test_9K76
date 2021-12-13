import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QrScan } from './qr-scan';

import { QrScanRoutingModule } from './qr-scan-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScanRoutingModule
  ],
  declarations: [QrScan]
})
export class HomePageModule {}
