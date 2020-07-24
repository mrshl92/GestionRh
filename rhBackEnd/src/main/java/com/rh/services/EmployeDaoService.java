package com.rh.services;

import com.rh.dao.EmployeeRepository;
import com.rh.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeDaoService {
    @Autowired
    private EmployeeRepository employeeRepository;

   public List<Employee> FindAllEmployes()
    {
        return employeeRepository.findAll();
    }
    public Employee CreateEmployee(Employee employee)
    {
       return employeeRepository.save(employee);
    }
}
