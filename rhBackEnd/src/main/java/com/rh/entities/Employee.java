package com.rh.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
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
    

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_emploiType")
    EmploiType emploiType;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_division")
    Division division;

    @OneToMany(mappedBy = "employee")
    @JsonIgnore
    private List<Conge> CongePerEmployee;

    @OneToMany(mappedBy = "empResp")
    @JsonIgnore
    private List<ResponseConge> Responses;

    @JsonBackReference
    public Departement getDep() {
        return dep;
    }

    public void setDep(Departement dep) {
        this.dep = dep;
    }

    public Employee(String nom, String prenom, Date dateAjout, Date datePriseService, Date dateReboursement, String email, String etatCivil, String matricule, int numTeleph, String password, String sexe, int soldeConge, int status, String typeContrat, String ville, Departement dep, EmploiType emploiType, Division division) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateAjout = dateAjout;
        this.datePriseService = datePriseService;
        this.dateReboursement = dateReboursement;
        this.email = email;
        this.etatCivil = etatCivil;
        this.matricule = matricule;
        this.numTeleph = numTeleph;
        this.password = password;
        this.sexe = sexe;
        this.soldeConge = soldeConge;
        this.status = status;
        this.typeContrat = typeContrat;
        this.ville = ville;
        this.dep = dep;
        this.emploiType = emploiType;
        this.division = division;
    }

    public Long getIdEmploye() {
        return idEmploye;
    }

    public void setIdEmploye(Long idEmploye) {
        this.idEmploye = idEmploye;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDateAjout() {
        return dateAjout;
    }

    public void setDateAjout(Date dateAjout) {
        this.dateAjout = dateAjout;
    }

    public Date getDatePriseService() {
        return datePriseService;
    }

    public void setDatePriseService(Date datePriseService) {
        this.datePriseService = datePriseService;
    }

    public Date getDateReboursement() {
        return dateReboursement;
    }

    public void setDateReboursement(Date dateReboursement) {
        this.dateReboursement = dateReboursement;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEtatCivil() {
        return etatCivil;
    }

    public void setEtatCivil(String etatCivil) {
        this.etatCivil = etatCivil;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public int getNumTeleph() {
        return numTeleph;
    }

    public void setNumTeleph(int numTeleph) {
        this.numTeleph = numTeleph;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public int getSoldeConge() {
        return soldeConge;
    }

    public void setSoldeConge(int soldeConge) {
        this.soldeConge = soldeConge;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getTypeContrat() {
        return typeContrat;
    }

    public void setTypeContrat(String typeContrat) {
        this.typeContrat = typeContrat;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public EmploiType getEmploiType() {
        return emploiType;
    }

    public void setEmploiType(EmploiType emploiType) {
        this.emploiType = emploiType;
    }

    public Division getDivision() {
        return division;
    }

    public void setDivision(Division division) {
        this.division = division;
    }

    public List<Conge> getCongePerEmployee() {
        return CongePerEmployee;
    }

    public void setCongePerEmployee(List<Conge> congePerEmployee) {
        CongePerEmployee = congePerEmployee;
    }

    public List<ResponseConge> getResponses() {
        return Responses;
    }

    public void setResponses(List<ResponseConge> responses) {
        Responses = responses;
    }
}
