package com.rh.services;

import com.rh.controllers.DepartementController;
import com.rh.dao.DepartementRepository;
import com.rh.dao.EmployeeRepository;
import com.rh.entities.Departement;
import com.rh.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartementDaoService {

    @Autowired
    private DepartementRepository departementRepository;


    // Create An employee
    public Departement CreateDepartement(Departement departement)
    {
        return departementRepository.save(departement);
    }
    //Delete An Employee
    public void DeleteDepartement(Long id)
    {
        departementRepository.deleteById(id);
    }
    public void UpdateDepartement(Departement departement, Long id ) {
        departementRepository.deleteById(id);
        departement.setIdDepartement(id);
        departementRepository.save(departement);

    }
}

