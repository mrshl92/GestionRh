package com.rh.entities;

import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "conge")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Conge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idConge;

    private int nbJoursOuvrables;

    private int nbJoursTotal;

    private int status ;

    private String raison;

    private String typeConge;

    private Date dateDebut;

    private Date dateFin;
    @CreationTimestamp
    private Date dateDemande;

    public Long getIdConge() {
        return idConge;
    }

    public void setIdConge(Long idConge) {
        this.idConge = idConge;
    }

    @ManyToOne
    @JoinColumn(name = "fk_employee")
    Employee employee;

    @ManyToOne
    @JoinColumn(name = "fk_response_conge")
    ResponseConge responseConge;


}
