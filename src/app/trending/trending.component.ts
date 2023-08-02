import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie/movie';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  trendingMovies: Movie[] = []; 
  
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
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }
}
