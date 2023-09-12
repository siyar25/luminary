package com.codecool.Luminary.util;

import com.codecool.Luminary.model.movie.Movie;
import com.codecool.Luminary.model.movie.MovieData;
import com.codecool.Luminary.model.movie.MovieType;
import com.codecool.Luminary.repository.MovieRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

@Component
public class MovieLoader implements CommandLineRunner {

    private final MovieRepository movieRepository;
    private final MovieMapper movieMapper;
    private final ResourceLoader resourceLoader;

    public MovieLoader(MovieRepository movieRepository, MovieMapper movieMapper, ResourceLoader resourceLoader) {
        this.movieRepository = movieRepository;
        this.movieMapper = movieMapper;
        this.resourceLoader = resourceLoader;
    }

    @Override
    public void run(String... args) throws Exception {
        Resource resource = resourceLoader.getResource("classpath:static/movies.json");
        InputStream inputStream = resource.getInputStream();

        ObjectMapper objectMapper = new ObjectMapper();
        MovieData movieData = objectMapper.readValue(inputStream, MovieData.class);

        // Process the "opening" category
        processCategory(movieData.getOpening(), MovieType.OPENING);

        // Process the "comingSoon" category
        processCategory(movieData.getComingSoon(), MovieType.COMING_SOON);
    }

    private void processCategory(List<Movie> movies, MovieType movieType) {
        for (Movie movie : movies) {
            movie.setMovieType(movieType);
            movieRepository.save(movie);
        }
    }
}


