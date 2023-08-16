package com.codecool.Luminary.dto;

import lombok.Builder;

public record ReservationGetDTO(String movieDate, String movieTime, String movieType) {

    @Builder
    public ReservationGetDTO{}
}
