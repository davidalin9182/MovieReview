import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie/movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss']
})
export class TheatreComponent implements OnInit {
  theatreMovies: Movie[] = []; 
  
  constructor( private http: HttpClient,private router:Router) {

  }
  ngOnInit(): void {
    this.getTrendingMovies();
  }
  
  redirectToMovie(type: string, id: string){
    this.router.navigate(['movie',type,id]);
  }

  getTrendingMovies() {
    this.http.get<Movie[]>('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.theatreMovies = movies;
      console.log(this.theatreMovies);
    });
  }
}
