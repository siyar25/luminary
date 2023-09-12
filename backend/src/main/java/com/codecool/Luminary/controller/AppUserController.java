package com.codecool.Luminary.controller;

import com.codecool.Luminary.dto.user.AppUserDTO;
import com.codecool.Luminary.dto.user.LoginUserDTO;
import com.codecool.Luminary.dto.user.NewUserDTO;
import com.codecool.Luminary.model.AppUser;
import com.codecool.Luminary.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("user")
public class AppUserController {

    private final AppUserService appUserService;

    @Autowired
    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/register")
    public AppUserDTO registerUser(@RequestBody NewUserDTO user) {
        return appUserService.registerUser(user);
    }

    @PostMapping("/login")
    public AppUserDTO loginUser(@RequestBody LoginUserDTO user) {
        return appUserService.loginUser(user);
    }

}

