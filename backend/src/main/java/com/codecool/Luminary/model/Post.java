package com.codecool.Luminary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import static jakarta.persistence.GenerationType.SEQUENCE;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Post {
    @Id
    @SequenceGenerator(
            name = "post_sequence",
            sequenceName = "post_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE,
            generator = "post_sequence"
    )
    @Column(
            name = "post_id"
    )
    private Long id;

    @Column
    private String title;

    @Column
    private String author;

    @Column(
            updatable = false
    )
    private LocalDateTime date;

    @Column(
            columnDefinition = "TEXT"
    )
    private String content;

    @Column
    private String imageSrc;
}
