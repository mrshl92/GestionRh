package com.rh.dao;

import com.rh.entities.ResponseConge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "ResponseConge",path = "response-conge")
public interface ResponseCongeRepository extends JpaRepository<ResponseConge,Long> {
}
