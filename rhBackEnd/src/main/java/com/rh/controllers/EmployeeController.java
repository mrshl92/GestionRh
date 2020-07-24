package com.rh.controllers;

import com.rh.entities.Employee;
import com.rh.services.EmployeDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    EmployeDaoService employeDaoService;

    @GetMapping("/rh/employes")
      public  List<Employee> findAllEmployes(){
            return employeDaoService.FindAllEmployes();
        }
        @PostMapping("/rh/employes")
      public Employee CreateEmploye(@RequestBody Employee employee)
      {
          return employeDaoService.CreateEmployee(employee);
      }
}
