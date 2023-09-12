package com.codecool.Luminary.util;

import com.codecool.Luminary.model.movie.Movie;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import java.io.IOException;
@Component
public class MovieMapper {

    private final ObjectMapper objectMapper = new ObjectMapper();

    public Movie mapJsonToMovie(String json) throws IOException {
        return objectMapper.readValue(json, Movie.class);
    }
}

