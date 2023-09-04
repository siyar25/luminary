package com.codecool.Luminary.dto;

import lombok.Builder;

import java.time.LocalDateTime;
import java.util.List;

public record ReservationDTO(String movieId, String movieTime, String movieDate, String movieType, String email,
                             List<Integer> seatIds) {
    @Builder
    public ReservationDTO {
    }
}
