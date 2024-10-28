import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  constructor(private _http: HttpClient) {}

  submitted = false;
  message:string='';
  userData = {
    name: '',
    email: '',
    age: 0,
  };

  onSubmit(form: any) {
    this.submitted = true;
    this.userData = form.value;

    this._http.post('http://localhost:3000/save-user', form.value).subscribe({
      next: (response:any) => {
        this.message = response?.message
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Request completed');
      },
    });
  }
}
