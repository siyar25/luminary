package com.codecool.Luminary.repository;

import com.codecool.Luminary.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Long> {
    AppUser getAppUsersByEmailAndPassword(String email, String password);
}
