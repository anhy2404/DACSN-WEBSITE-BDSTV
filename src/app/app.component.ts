import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { AppRoutingModule } from './app-routing.module'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anhyvm2';
  info = {
    name: 'anhyvm2',
    email: 'anhyvm2@fpt.edu.vn',
    gender: 'male',
  }
  name='';
  count = 0;

  countClick(): void {
    this.count = this.count + 1; 
  }
  
  logout(): void {
    const userinfo = localStorage.getItem('user');
    if (userinfo !== null) { 
      localStorage.removeItem('user'); 
    }
  }
}
