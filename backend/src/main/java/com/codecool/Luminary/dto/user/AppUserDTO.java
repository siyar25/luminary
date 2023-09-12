package com.codecool.Luminary.dto.user;

import lombok.Builder;

public record AppUserDTO(String firstName, String lastName, String email) {
    @Builder
    public AppUserDTO {}
}
