import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { ReactiveService } from './reactive.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(2)]),
    password: new FormControl('',[Validators.required, Validators.minLength(2)]),
    emailOffers: new FormControl('',[Validators.required, Validators.minLength(2)]),
    interfaceStyle: new FormControl('',[Validators.required, Validators.minLength(2)]),
    subscriptionType: new FormControl('',[Validators.required, Validators.minLength(2)]),
    notes: new FormControl('',[Validators.required, Validators.minLength(2)])
  });
  
  user: User;
  validMessage: String = "";

  constructor(private service: ReactiveService) { }

  ngOnInit(): void {
  }

  get form2() {
    return this.userForm.controls;
  }

  onSubmit():void {
    if(this.userForm.valid) {
      this.service.save(this.userForm.value).subscribe(data => {
        this.userForm.reset();
      })
    }
    else{
      this.validMessage="Remplir les champs correctement";
    }
  }
}
