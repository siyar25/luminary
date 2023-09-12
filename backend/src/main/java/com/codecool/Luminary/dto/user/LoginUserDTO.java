package com.codecool.Luminary.dto.user;

import lombok.Builder;

public record LoginUserDTO(String email, String password) {
    @Builder
    public LoginUserDTO {
    }
}
