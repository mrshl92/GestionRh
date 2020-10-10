package com.rh.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
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


    @OneToMany(mappedBy = "division",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Employee> employeesByDivision = new ArrayList<>();

    public Long getIdDivision() {
        return idDivision;
    }

    public void setIdDivision(Long idDivision) {
        this.idDivision = idDivision;
    }
}
