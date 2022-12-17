import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistsService } from 'src/app/artists/artists.service';
import { IArtist } from 'src/app/shared/interfaces/artist';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  artistId!: string;
  artist: IArtist | null = null;

  errorFetchingData = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userService: ArtistsService,
    private router: Router
  ) {}

  editForm = this.fb.group({
    alias: ['', Validators.required],
    genre: [''],
    bio: ['', Validators.minLength(20)],
    imageUrl: ['', Validators.pattern(new RegExp('^https?://'))],
  });

  ngOnInit(): void {
    this.artistId = this.activatedRoute.snapshot.params['id'];

    this.userService.getOneArtist(this.artistId).subscribe({
      next: (value) => {
        this.artist = value;
        this.editForm.setValue({
          alias: this.artist.alias,
          genre: this.artist.genre as string,
          bio: this.artist.bio as string,
          imageUrl: this.artist.imageUrl as string,
        });
        console.log(this.artist);
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }

  edit(): void {
    if (this.editForm.invalid) return;

    const payload = {
      alias: this.editForm.value.alias,
      genre: this.editForm.value.genre,
      bio: this.editForm.value.bio,
      imageUrl: this.editForm.value.imageUrl,
    };

    this.userService.editArtist(this.artistId, payload as IArtist).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/profile']);
      },
      error: (err) => console.log(err),
    });
  }
}
