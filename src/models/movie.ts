export class Movie {
    id: string;
    title: string;
    posterUrl: string;
    plot: string;
    rating: string;
    releaseDate: moment.Moment;
    lengthInMinutes: number;
    genre: string;
    actors: string[];
    imdbRating: number;
    trailerId: string;

    constructor(serverMovie) {
        this.id = serverMovie.imdbID;
        this.title = serverMovie.Title;
        this.posterUrl = serverMovie.Poster;
        this.plot = serverMovie.Plot;
        this.rating = serverMovie.Rated;
        this.releaseDate = moment(serverMovie.Released, 'DD MMM YYYY');
        this.lengthInMinutes = parseInt(serverMovie.Runtime);
        this.genre = serverMovie.Genre;
        this.actors = serverMovie.Actors.split(', ');
        this.imdbRating = parseFloat(serverMovie.imdbRating);
        this.trailerId = serverMovie.trailerId;
    }

    getFormattedDate() {
        return this.releaseDate.format('MMM DD, YYYY');
    }
}