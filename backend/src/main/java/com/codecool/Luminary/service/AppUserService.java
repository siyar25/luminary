package com.codecool.Luminary.service;

import com.codecool.Luminary.dto.user.AppUserDTO;
import com.codecool.Luminary.dto.user.LoginUserDTO;
import com.codecool.Luminary.dto.user.NewUserDTO;
import com.codecool.Luminary.model.AppUser;
import com.codecool.Luminary.repository.AppUserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class AppUserService {

    private final AppUserRepository appUserRepository;

    public AppUserService(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }

    public AppUserDTO registerUser(NewUserDTO user) {
        AppUser appUser = AppUser.builder()
                .firstName(user.firstName())
                .lastName(user.lastName())
                .email(user.email())
                .birthday(LocalDate.parse(user.birthday()))
                .password(user.password())
                .build();

        appUserRepository.save(appUser);

        AppUserDTO appUserDTO = AppUserDTO.builder()
                .firstName(user.firstName())
                .lastName(user.lastName())
                .email(user.email())
                .build();

        return appUserDTO;
    }

    public AppUserDTO loginUser(LoginUserDTO user) {
        AppUser appUser = appUserRepository.getAppUsersByEmailAndPassword(user.email(), user.password());
        AppUserDTO appUserDTO = AppUserDTO.builder()
                .firstName(appUser.getFirstName())
                .lastName(appUser.getLastName())
                .email(appUser.getEmail())
                .build();
        return appUserDTO;
    };
}
