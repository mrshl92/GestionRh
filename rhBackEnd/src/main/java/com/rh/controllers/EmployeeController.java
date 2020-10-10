package com.rh.controllers;

import ch.qos.logback.core.CoreConstants;
import com.rh.entities.Departement;
import com.rh.entities.Employee;
import com.rh.services.EmployeDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.Console;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmployeeController {
    @Autowired
    EmployeDaoService employeDaoService;



        @PostMapping("employes")
      public ResponseEntity<Employee> CreateEmploye(@RequestBody Employee employee)
      {
          return new ResponseEntity<Employee>(employeDaoService.CreateEmployee(employee), HttpStatus.CREATED);
      }
    public Employee CreateEmploye2(@RequestParam Employee employee)
    {
        return employeDaoService.CreateEmployee(employee);
    }

    @DeleteMapping("employes/{id}")
    public void DeleteEmploye(@PathVariable Long id)
    {
        employeDaoService.DeleteEmployee(id);
    }

    @PutMapping("employes/{id}")
    public void UpdateEmployee(@RequestBody Employee employee,@PathVariable Long id)
    {
         employeDaoService.UpdateEmployee(employee,id);
    }


}
