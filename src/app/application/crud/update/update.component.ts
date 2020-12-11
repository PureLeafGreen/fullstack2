import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  user: User;
  updateUserForm: FormGroup;
  validMessage: String = "";

  constructor(private service: UserService, private routeur: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['Param'];
    this.service.findByID(this.id).subscribe(data => {
      this.user = data;
    }, (error) => {
      console.log(error);
    });

    this.updateUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
      emailOffers: new FormControl('', [Validators.required, Validators.minLength(2)]),
      interfaceStyle: new FormControl('', [Validators.required, Validators.minLength(2)]),
      subscriptionType: new FormControl('', [Validators.required, Validators.minLength(2)]),
      notes: new FormControl('', [Validators.required, Validators.minLength(2)])
    });
  }

  get form() {
    return this.updateUserForm.controls;
  }

  public updateUser() {
    this.service.update(this.id, this.updateUserForm.value).subscribe(data => {
      this.routeur.navigateByUrl('crud');
    }, (error) => {
      console.log(error);
    });
  }

}
