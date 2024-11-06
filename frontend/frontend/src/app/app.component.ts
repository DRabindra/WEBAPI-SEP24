import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  url: string = 'http://localhost:3000/name';

  protected returnedValue:string='';

  constructor(private http: HttpClient) { }

  public connectToServer(): Observable<string | HttpErrorResponse> {
    return this.http.get<string>(this.url);
  }

  ngOnInit(): void {
    this.connectToServer()
      .subscribe((resposne: any) => {
        console.log(resposne);
        this.returnedValue = resposne;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      })
  }

}
