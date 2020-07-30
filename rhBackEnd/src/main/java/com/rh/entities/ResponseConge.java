package com.rh.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ResponseConge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idResponseConge;

    private Date dateResponse;

    private String raisons;

    private int Reponse ;

    @OneToMany(mappedBy = "employee")
    @JsonIgnore
    private List<Conge> ResponseToConges;

    @ManyToOne
    @JoinColumn(name = "fk_emp_resp")
    Employee empResp;

    public Long getIdResponseConge() {
        return idResponseConge;
    }

    public void setIdResponseConge(Long idResponseConge) {
        this.idResponseConge = idResponseConge;
    }
}
