import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces/configs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService) {}

  user: IUser | null = this.authService.user;
  isArtist: boolean = this.user?.alias !== undefined;

  ngOnInit(): void {
    console.log(this.isArtist);
  }
}
