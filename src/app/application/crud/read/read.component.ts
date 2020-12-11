import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  listUsers: Array<User>;
  public headElement = ['ID', 'Name', 'Pwd', 'UserInterface', 'Operation']

  constructor(private service: UserService) { }


  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.service.findAll().subscribe(data => {
      this.listUsers = data;
    }, (data) => {
      console.log(data);
    });
  }

  public delete(id: number): void {
    if (window.confirm("Are you sure?")) {
      this.service.delete(id).subscribe(data => {
        this.listUsers = this.listUsers.filter(element => element.id !== id);
      }, (error) => {
        console.log(error);
      });
    }
  }

  public delete2(id: number, i: any): void {
    if (window.confirm("Are you sure?")) {
      this.service.delete(id).subscribe(data => {
        this.listUsers.splice(id, i);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
