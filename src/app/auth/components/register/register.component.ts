import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../interfaces/auth.interface';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ 
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
   ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  private readonly baseUrl:string = environment.baseUrl;

  private http = inject(HttpClient)
  private router = inject(Router)
  protected authService = inject(AuthService)

  public registerForm: FormGroup = this.formBuilder.group({
    fullname: ['', [Validators.required, Validators.minLength(4)] ],
    email: ['', [Validators.required,  Validators.email] ],
    username: ['', [Validators.required, Validators.minLength(4)] ],
    password: ['', [Validators.required, ] ]
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void { }

  register(user: User): Observable<any> {
    return this.http.post<User>(`${this.baseUrl}/auth/register`, user)
  }

  onSubmit(): void {

    if( this.registerForm.invalid ) return;

    if (this.registerForm.valid) {

      const newUser: User = this.registerForm.value;
      
      this.register(newUser).subscribe( () => {

        this.router.navigate(['/auth/login'])

      }, error => {
        console.error('Error registering user', error);
        this.registerForm.reset();
        // Manejar el error, como mostrar un mensaje de error al usuario
      });

    }
  }

}
