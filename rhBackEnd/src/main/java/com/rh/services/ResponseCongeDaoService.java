package com.rh.services;

import com.rh.dao.EmployeeRepository;
import com.rh.dao.ResponseCongeRepository;
import com.rh.entities.Employee;
import com.rh.entities.ResponseConge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResponseCongeDaoService {
    @Autowired
    private ResponseCongeRepository responseCongeRepository;

    // Create An employee
    public ResponseConge CreateEmployee(ResponseConge responseConge)
    {
        return responseCongeRepository.save(responseConge);
    }
    //Delete An Employee
    public void DeleteEmployee(Long id)
    {
        responseCongeRepository.deleteById(id);
    }
    public void UpdateEmployee(ResponseConge responseConge, Long id ){
        responseCongeRepository.deleteById(id);
        responseConge.setIdResponseConge(id);
        responseCongeRepository.save(responseConge);

    }

}
