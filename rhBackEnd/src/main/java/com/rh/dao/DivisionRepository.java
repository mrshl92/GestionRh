package com.rh.dao;

import com.rh.entities.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Division",path = "divisions")
public interface DivisionRepository  extends JpaRepository<Division,Long> {
}