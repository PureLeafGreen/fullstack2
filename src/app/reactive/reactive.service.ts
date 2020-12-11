import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { crudService } from '../application/crud/services/generic.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService extends crudService<User,number> {

  constructor(http: HttpClient) {
    super(http, "http://localhost:3002/Api");
  }
}
