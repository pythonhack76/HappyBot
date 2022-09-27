import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContattoComponent } from './components/contatto/contatto.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [

  { path: '', pathMatch:'full', redirectTo: '/homepage' },
  { path: 'homepage', component: HomeComponent },
  { path: 'about', component: AboutComponent  },
  { path: 'contatti', component: ContactComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], children: [
    {path: ':id', component: ContattoComponent},
  ]  },
 
  //{path: 'contatti/:id', component: ContactComponent  },
  { path: 'dashboard', component: DashboardComponent  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
