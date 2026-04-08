import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Situacao } from './pages/situacao/situacao';
import { Desafio } from './pages/desafio/desafio';
import { Sobre } from './pages/sobre/sobre';

export const routes: Routes = [

   {path:'',component:Home},
    {path:'situacao',component:Situacao},
    {path:'desafio',component:Desafio},
    {path:'sobre',component:Sobre},
];
