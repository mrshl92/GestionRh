package com.rh.controllers;

import com.rh.entities.Conge;
import com.rh.entities.Departement;
import com.rh.services.CongeDaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CongeController {
    @Autowired
    private CongeDaoService congeDaoService;



    @PostMapping("conges")
    public Conge CreateConge(@RequestBody Conge conge)
    {
        return congeDaoService.CreateConge(conge);
    }

    @DeleteMapping("conges/{id}")
    public void DeleteConge(@PathVariable Long id)
    {
        congeDaoService.DeleteConge(id);
    }

    @PutMapping("conges/{id}")
    public void UpdateConge(@RequestBody Conge conge,@PathVariable Long id)
    {
        congeDaoService.UpdateConge(conge,id);
    }

}
