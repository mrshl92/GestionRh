package com.rh.services;

import com.rh.dao.EmploiTypeRepository;
import com.rh.entities.Departement;
import com.rh.entities.EmploiType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmploiTypeDaoService {
    @Autowired
    private EmploiTypeRepository emploiTypeRepository;

    // Create An employee
    public EmploiType CreateEmploiType(EmploiType emploiType)
    {
        return emploiTypeRepository.save(emploiType);
    }
    //Delete An Employee
    public void DeleteEmploiType(Long id)
    {
        emploiTypeRepository.deleteById(id);
    }
    public void UpdateEmploiType(EmploiType emploiType, Long id ) {
        emploiTypeRepository.deleteById(id);
        emploiType.setIdEmploiType(id);
        emploiTypeRepository.save(emploiType);

    }

}
