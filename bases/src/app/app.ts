import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Desafio } from './pages/desafio/desafio';
import { Situacao } from './pages/situacao/situacao';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { Home } from './pages/home/home';
import { routes } from './app.routes';
import { Sobre } from './pages/sobre/sobre';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Home,Header,Footer,Desafio,Situacao,Sobre,routes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bases');
}
