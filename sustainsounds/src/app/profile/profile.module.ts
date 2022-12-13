import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';



@NgModule({
  declarations: [
    EditComponent,
    ProfileEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
