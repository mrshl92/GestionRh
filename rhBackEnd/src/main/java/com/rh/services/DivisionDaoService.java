package com.rh.services;

import com.rh.dao.DivisionRepository;
import com.rh.dao.EmploiTypeRepository;
import com.rh.entities.Division;
import com.rh.entities.EmploiType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DivisionDaoService {
    @Autowired
    private DivisionRepository divisionRepository;


    // Create An employee
    public Division CreateDivision(Division division)
    {
        return divisionRepository.save(division);
    }
    //Delete An Employee
    public void DeleteDivision(Long id)
    {
        divisionRepository.deleteById(id);
    }
    public void UpdateDivision(Division division, Long id ) {
        divisionRepository.deleteById(id);
        division.setIdDivision(id);
        divisionRepository.save(division);

    }

}
