import { Movie } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (<div className="movie card">
                
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Упс</span>
                    <p>Кажется, такого фильма нет</p>
                </div>
            </div>)}
        </div>
    );
}

export { Movies };