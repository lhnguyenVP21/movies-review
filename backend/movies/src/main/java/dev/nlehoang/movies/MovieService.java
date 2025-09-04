package dev.nlehoang.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.spel.ast.OpAnd;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    public MovieRepository movieRepository;
    public List<Movies> allMovies()
    {
        return movieRepository.findAll();
    }
    public Optional<Movies> singleMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
