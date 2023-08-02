import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Movie } from '../movie/movie';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  trendingMovies: Movie[] = []; 
  theatreMovies: Movie[] = []; 
  popularMovies: Movie[] = [];
  constructor( private http: HttpClient,private router:Router) {

  }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  
  }

  getTrendingMovies() {
    this.http.get<Movie[]>('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) => {
      this.trendingMovies = movies;
      console.log(this.trendingMovies);
    });
  }

  getTheatreMovies() {
    this.http.get<Movie[]>('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies) => {
      this.theatreMovies = movies;
      console.log(this.theatreMovies);
    });
  }

  getPopularMovies() {
    this.http.get<Movie[]>('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies) => {
      this.popularMovies = movies;
      console.log(this.popularMovies);
    });
  }

  redirectToMovie(type: string, id: string){
    this.router.navigate(['movie',type,id]);
  }
  redirectToTheatre(){
    this.router.navigate(['/theatre']);
  }
  redirectToTrending(){
    this.router.navigate(['/trending']);
  }
  redirectToPopular(){
    this.router.navigate(['/popular']);
  }

}
