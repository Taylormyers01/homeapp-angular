import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbar,
    MatIcon,
    MatSidenavContainer,
    MatIconButton,
    MatSidenav,
    MatSidenavContent,
    MatButton,
    RouterLink,
    RouterOutlet,
    MatInputModule
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homeapp-angular';
}
