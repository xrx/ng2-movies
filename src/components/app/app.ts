import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from "../home/home";
import {MovieDetails} from '../movieDetails/movieDetails';
import {MovieTrailer} from '../movieTrailer/movieTrailer';

@Component({
    selector: 'app'
})
@View({
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, Home, MovieDetails, MovieTrailer]
})
@RouteConfig([
    { path: '/', component: Home, as: 'Home'},
    { path: '/details/:movieId', component: MovieDetails, as: 'MovieDetails' },
    { path: '/trailer/:movieId', component: MovieTrailer, as: 'MovieTrailer' }
])
export class App {

}
