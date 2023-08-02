import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie/movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  popularMovies: Movie[] = []; 
  
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
      this.popularMovies = movies;
      console.log(this.popularMovies);
    });
  }
}
