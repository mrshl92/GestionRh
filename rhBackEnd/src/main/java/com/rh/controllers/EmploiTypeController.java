package com.rh.controllers;

import com.rh.entities.Departement;
import com.rh.entities.EmploiType;
import com.rh.services.DepartementDaoService;
import com.rh.services.EmploiTypeDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmploiTypeController {
    @Autowired
    EmploiTypeDaoService emploiTypeDaoService;


    @PostMapping("emploi-type")
    public EmploiType CreateDepartement(@RequestBody EmploiType emploiType)
    {
        return emploiTypeDaoService.CreateEmploiType(emploiType);
    }

    @DeleteMapping("emploi-type/{id}")
    public void DeleteEmploiType(@PathVariable Long id)
    {
        emploiTypeDaoService.DeleteEmploiType(id);
    }

    @PutMapping("emploi-type/{id}")
    public void UpdateDepartement(@RequestBody EmploiType emploiType,@PathVariable Long id)
    {
        emploiTypeDaoService.UpdateEmploiType(emploiType,id);
    }
}
