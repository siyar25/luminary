package com.codecool.Luminary.service;

import com.codecool.Luminary.dto.ReservationDTO;
import com.codecool.Luminary.model.Reservation;
import com.codecool.Luminary.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReservationService {
    private final ReservationRepository reservationRepository;

    @Autowired
    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public List<Reservation> getReservationsById(String id, String date, String time, String type) {
        return new ArrayList<>(reservationRepository.findAllByMovieIdAndMovieDateAndMovieTimeAndMovieType(id, date, time, type));
    }

    public boolean saveReservation(ReservationDTO reservationDTO) {
        Reservation reservation = Reservation.builder()
                .movieTime(reservationDTO.movieTime())
                .movieDate(reservationDTO.movieDate())
                .email(reservationDTO.email())
                .movieId(reservationDTO.movieId())
                .seatIds(reservationDTO.seatIds())
                .movieType(reservationDTO.movieType())
                .build();

        reservationRepository.save(reservation);
        return true;
    }
}
