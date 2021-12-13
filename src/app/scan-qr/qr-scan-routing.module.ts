import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrScan } from './qr-scan';

const routes: Routes = [
  {
    path: '',
    component: QrScan,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrScanRoutingModule {}
