import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { JuiceFruitComponent } from './juice-fruit/juice-fruit.component';


const routes: Routes = [
  { path: '', component: SliderComponent, pathMatch: 'full' },
  { path: 'slider', component: SliderComponent },
  { path: 'juiceFruit', component: JuiceFruitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
