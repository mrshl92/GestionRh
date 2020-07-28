package com.rh.controllers;

import com.rh.entities.Departement;
import com.rh.entities.Employee;
import com.rh.services.DepartementDaoService;
import com.rh.services.EmployeDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DepartementController {

    @Autowired
    DepartementDaoService departementDaoService;



    @PostMapping("departements")
    public Departement CreateDepartement(@RequestBody Departement departement)
    {
        return departementDaoService.CreateDepartement(departement);
    }

    @DeleteMapping("departements/{id}")
    public void DeleteDepartement(@PathVariable Long id)
    {
        departementDaoService.DeleteDepartement(id);
    }

    @PutMapping("departements/{id}")
    public void UpdateDepartement(@RequestBody Departement departement,@PathVariable Long id)
    {
        departementDaoService.UpdateDepartement(departement,id);
    }
}
