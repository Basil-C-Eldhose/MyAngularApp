import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavbarComponent,FooterComponent,HomeComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularApp';
}
