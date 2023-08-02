import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { TrendingComponent } from './trending/trending.component';
import { TheatreComponent } from './theatre/theatre.component';
import { PopularComponent } from './popular/popular.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'theatre', component: TheatreComponent},
  { path: 'trending', component: TrendingComponent},
  { path: 'popular', component: PopularComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  //have to add parameters to go to specific movie
  { path: 'movie/:type/:id', component: MovieComponent},
  { path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
