import {Component, View, NgIf, NgFor} from 'angular2/angular2';
import {RouteParams, RouterLink} from 'angular2/router';
import {MovieApi} from '../../services/movieApiService';
import {Movie} from '../../models/movie';

@Component({
    selector: 'movieTrailer'
})
@View({
    directives: [RouterLink, NgIf, NgFor],
    templateUrl: 'components/movieTrailer/movieTrailer.html',
    styleUrls: ['components/movieTrailer/movieTrailer.css']
})
export class MovieTrailer {
    movie: Movie;

    constructor(movieApi: MovieApi, routeParams: RouteParams) {
        movieApi.getMovieById(routeParams.params['movieId']).then((movie) => {
            this.movie = movie;
            console.log("hello", movie);
        });

        //movieApi.getMovieByIdRx(routeParams.params['movieId']).subscribe((movie) => {
        //    this.movie = movie;
        //})
    }
}
