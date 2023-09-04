package com.codecool.Luminary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Reservation
{
    @Id
    @SequenceGenerator(
            name = "reservation_sequence",
            sequenceName = "reservation_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "reservation_sequence"
    )
    @Column(
            name = "reservation_id"
    )
    private Long id;

    @Column
    private String movieId;

    @Column
    private String movieTime;

    @Column
    private String movieDate;

    @Column
    private String movieType;

    @Column
    private String email;

    @Column
    private List<Integer> seatIds;
}
