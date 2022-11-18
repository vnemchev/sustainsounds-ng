import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [NavComponent],
})
export class CoreModule {}
