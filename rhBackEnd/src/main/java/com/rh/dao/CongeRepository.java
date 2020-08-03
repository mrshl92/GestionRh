package com.rh.dao;

import com.rh.entities.Conge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "Conge",path = "conges")
public interface CongeRepository extends JpaRepository<Conge,Long> {
}
