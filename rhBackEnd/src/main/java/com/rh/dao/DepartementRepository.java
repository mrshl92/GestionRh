package com.rh.dao;

import com.rh.entities.Departement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Departement",path = "departements")
public interface DepartementRepository extends JpaRepository<Departement,Long> {
}
