import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core"; 
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { NbMenuItem } from "@nebular/theme";

@Component({
  selector: "app-members-list",
  templateUrl: "./members-list.component.html",
  styleUrls: ["./members-list.component.scss"],
})
export class MembersListComponent implements OnInit {
  employeeData: any;
user:any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<any>('assets/modules/base/tables-thead.json')
      .subscribe((data) => (this.employeeData = data));
  }
  userMenu: NbMenuItem[] = [
    { title: "changePass", data: "changePass" },
    { title: "logout", data: "logout" }
  ];
}
