import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Situacao } from './pages/situacao/situacao';
import { Desafio } from './pages/desafio/desafio';

export const routes: Routes = [

   {path:'',component:Home},
    {path:'situacao',component:Situacao},
    {path:'desafio',component:Desafio},
];
