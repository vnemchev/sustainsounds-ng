import { Component, OnInit } from '@angular/core';
import { ArtistsService } from 'src/app/artists/artists.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IArtist } from 'src/app/shared/interfaces/artist';
import { IUser } from 'src/app/shared/interfaces/configs';
import { IFan } from 'src/app/shared/interfaces/fan';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: ArtistsService
  ) {}

  user: IUser | null = this.authService.user;
  detailedUser: IArtist | IFan | null = null;
  isArtist: boolean = this.user?.alias !== undefined;

  ngOnInit(): void {
    if (this.isArtist) {
      this.userService
        .getOneArtistDetailed(this.user?._id as string)
        .subscribe({
          next: (value) => {
            this.detailedUser = value;
            console.log(this.detailedUser);
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.userService.getOneFanDetailed(this.user?._id as string).subscribe({
        next: (value) => {
          this.detailedUser = value;
          console.log(this.detailedUser);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }

    console.log(typeof this.detailedUser)
  }
}
