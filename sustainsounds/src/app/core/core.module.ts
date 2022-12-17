import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavComponent, HomeComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule],
  exports: [NavComponent, HomeComponent, NotFoundComponent],
})
export class CoreModule {}
