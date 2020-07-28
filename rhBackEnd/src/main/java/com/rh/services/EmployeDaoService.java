package com.rh.services;

import com.rh.dao.EmployeeRepository;
import com.rh.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeDaoService {
    @Autowired
    private EmployeeRepository employeeRepository;


    // Create An employee
    public Employee CreateEmployee(Employee employee)
    {
       return employeeRepository.save(employee);
    }
    //Delete An Employee
    public void DeleteEmployee(Long id)
    {
        employeeRepository.deleteById(id);
    }
    public void UpdateEmployee(Employee employee, Long id ){
        employeeRepository.deleteById(id);
        employee.setIdEmploye(id);
        employeeRepository.save(employee);

    }

}
