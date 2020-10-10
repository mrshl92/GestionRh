package com.rh.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "emploiType")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class EmploiType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmploiType;

    private String nomEmploiType;

    @OneToMany(mappedBy = "emploiType",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Employee> employeesByType;

    public Long getIdEmploiType() {
        return idEmploiType;
    }

    public void setIdEmploiType(Long idEmploiType) {
        this.idEmploiType = idEmploiType;
    }
}
