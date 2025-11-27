package com.sundarMan.EmployeeBackEnd2511.services;

import com.sundarMan.EmployeeBackEnd2511.models.Employee;
import com.sundarMan.EmployeeBackEnd2511.repositories.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;

    @Override
    public Employee registerEmployeeByS(Employee employee) {
        return employeeRepo.save(employee);
    }

    @Override
    public List<Employee> getAllEmployeesByS() {
        return employeeRepo.findAll();
    }

    @Override
    public Employee deleteEmployeeByIdByS(String id) {
        Optional<Employee> employee = employeeRepo.findById(id);
        if (employee.isPresent()) {
            employeeRepo.delete(employee.get());
            return employee.get();
        } else {
            return null;

        }
    }
}
