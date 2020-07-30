package com.rh.services;

import com.rh.dao.CongeRepository;
import com.rh.entities.Conge;
import com.rh.entities.Departement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CongeDaoService {
    @Autowired
    private CongeRepository congeRepository;

    // Create An employee
    public Conge CreateConge(Conge conge )
    {
        return congeRepository.save(conge);
    }
    //Delete An Employee
    public void DeleteConge(Long id)
    {
        congeRepository.deleteById(id);
    }
    public void UpdateConge(Conge conge, Long id ) {
        congeRepository.deleteById(id);
        conge.setIdConge(id);
        congeRepository.save(conge);

    }

}
