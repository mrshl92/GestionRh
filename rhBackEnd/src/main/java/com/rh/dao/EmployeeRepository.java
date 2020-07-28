package com.rh.dao;

import com.rh.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "Employee",path = "employes")
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
