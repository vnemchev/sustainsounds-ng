import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  editForm = this.fb.group({
    alias: [],
    genre: [],
    bio: [],
    imageUrl: [],
  });

  ngOnInit(): void {}
}
