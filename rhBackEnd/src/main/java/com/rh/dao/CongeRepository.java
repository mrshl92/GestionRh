package com.rh.dao;

import com.rh.entities.Conge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Conge",path = "conges")
public interface CongeRepository extends JpaRepository<Conge,Long> {
}
