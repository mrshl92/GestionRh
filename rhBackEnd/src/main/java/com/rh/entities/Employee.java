package com.rh.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "employe")
@Data @NoArgsConstructor @AllArgsConstructor @ToString
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEmploye;

    private String nom;

    private String prenom;

    @CreationTimestamp
    private Date dateAjout;

    private Date datePriseService;

    private Date dateReboursement;

    private String email;

    private String etatCivil;

    private String matricule;

    private int numTeleph;

    private String password;

    private String sexe;

    private int soldeConge;

    private int status;

    private String typeContrat ;

    private String ville;

    @ManyToOne
    @JoinColumn(name = "fk_departement")
    Departement dep;
    

    @ManyToOne
    @JoinColumn(name = "fk_emploiType")
    EmploiType emploiType;

    @ManyToOne
    @JoinColumn(name = "fk_division")
    Division division;

    @OneToMany(mappedBy = "employee")
    @JsonIgnore
    private List<Conge> CongePerEmployee;

    @OneToMany(mappedBy = "empResp")
    @JsonIgnore
    private List<ResponseConge> Responses;

    public Long getIdEmploye() {
        return idEmploye;
    }

    public void setIdEmploye(Long idEmploye) {
        this.idEmploye = idEmploye;
    }
}
