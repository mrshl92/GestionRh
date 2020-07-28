package com.rh.dao;

import com.rh.entities.EmploiType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "EmploiType",path = "emploi-type")
public interface EmploiTypeRepository  extends JpaRepository<EmploiType,Long> {
}
