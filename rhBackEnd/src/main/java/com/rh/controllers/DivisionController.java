package com.rh.controllers;

import com.rh.entities.Departement;
import com.rh.entities.Division;
import com.rh.services.DepartementDaoService;
import com.rh.services.DivisionDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DivisionController {

    @Autowired
    DivisionDaoService divisionDaoService;



    @PostMapping("divisions")
    public Division CreateDivision(@RequestBody Division division)
    {
        return divisionDaoService.CreateDivision(division);
    }

    @DeleteMapping("divisions/{id}")
    public void DeleteDivision(@PathVariable Long id)
    {
        divisionDaoService.DeleteDivision(id);
    }

    @PutMapping("divisions/{id}")
    public void UpdateDivision(@RequestBody Division division,@PathVariable Long id)
    {
        divisionDaoService.UpdateDivision(division,id);
    }
}
