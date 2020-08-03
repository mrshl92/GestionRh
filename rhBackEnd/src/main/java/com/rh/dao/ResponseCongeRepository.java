package com.rh.dao;

import com.rh.entities.ResponseConge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "ResponseConge",path = "response-conge")
public interface ResponseCongeRepository extends JpaRepository<ResponseConge,Long> {
}
