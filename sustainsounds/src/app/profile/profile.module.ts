import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { MatCardModule } from '@angular/material/card';
import { ProfileComponent } from './profile/profile.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProfileComponent, ProfileEditComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [ProfileComponent, ProfileEditComponent],
})
export class ProfileModule {}
