package com.codecool.Luminary.controller;

import com.codecool.Luminary.dto.ReservationDTO;
import com.codecool.Luminary.dto.ReservationGetDTO;
import com.codecool.Luminary.model.Reservation;
import com.codecool.Luminary.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("reservation")
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @PostMapping("/{id}")
    public List<Reservation> getReservationsById(@PathVariable String id, @RequestBody ReservationGetDTO reservationGetDTO) {
        return reservationService.getReservationsById(id, reservationGetDTO.movieDate(), reservationGetDTO.movieTime(), reservationGetDTO.movieType());
    }

    @PostMapping()
    public boolean saveReservation(@RequestBody ReservationDTO reservationDTO) {
        return reservationService.saveReservation(reservationDTO);
    }
}
