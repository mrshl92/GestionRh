package com.rh.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "departement")
@Setter
@Getter
public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDepartement;

    private String nomDepartement;

    @OneToMany(mappedBy = "dep")
            @JsonIgnore
    Set<Employee> employees;

}
