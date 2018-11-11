import { Component, OnInit } from '@angular/core';
import {User} from '../common/users';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User();
  masque = true;
  constructor() { }
  ngOnInit() {
    this.user.name = 'Bouam';
    this.user.firstName = 'Loubna';
    this.user.age = 30;
    this.user.quote = '';
    this.user.photo = 'https://randomuser.me/api/portraits/lego/2.jpg';
  }
Afficher() {
  this.masque = !this.masque;
}
}
