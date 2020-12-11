import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from "../modeles/employee";
import { crudService } from "./generic.service";
import { Injectable } from "@angular/core";
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})

export class employeeGenericService extends crudService<User, number> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:3002/Api');
  }
}b bbnvvvbv