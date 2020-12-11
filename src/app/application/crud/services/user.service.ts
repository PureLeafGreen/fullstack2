import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { crudService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends crudService<User, number> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:3002/Api');
  }
}
