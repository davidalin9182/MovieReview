import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesModule } from './features/features.module';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import { PopularComponent } from './popular/popular.component';
import { TheatreComponent } from './theatre/theatre.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MovieComponent,
    FooterComponent,
    TrendingComponent,
    PopularComponent,
    TheatreComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
