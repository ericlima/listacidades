import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { CidadesComponent } from './cidades/cidades.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
    //cidades
    {
        path: 'cidades',
        component: CidadesComponent
    },
    {
        path: 'disciplinas',
        component: DisciplinasComponent
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);