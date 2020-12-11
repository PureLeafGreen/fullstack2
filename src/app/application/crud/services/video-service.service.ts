import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from "../modeles/video";
import { crudService } from "./generic.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class employeeGenericService extends crudService<Video, number> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:3001/api');
  }
}