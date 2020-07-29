package com.rh.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "division")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Division {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDivision;

    private String nomDivision;


    @OneToMany(mappedBy = "emploiType")
    @JsonIgnore
    private List<Employee> employeesByDivision;

    public Long getIdDivision() {
        return idDivision;
    }

    public void setIdDivision(Long idDivision) {
        this.idDivision = idDivision;
    }
}
