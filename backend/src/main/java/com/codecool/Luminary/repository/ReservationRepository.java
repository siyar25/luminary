package com.codecool.Luminary.repository;

import com.codecool.Luminary.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findAllByMovieIdAndMovieDateAndMovieTimeAndMovieType(String movieId, String movieDate, String movieTime, String movieType);
}
