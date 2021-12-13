import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'qr-scan',
    loadChildren: () => import('./scan-qr/qr-scan.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'qr-scan',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
