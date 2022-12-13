import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [NavComponent, HomeComponent, NotFoundComponent, ProfileComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
  exports: [NavComponent, HomeComponent, NotFoundComponent],
})
export class CoreModule {}
