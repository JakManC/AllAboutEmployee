package com.sundarMan.EmployeeBackEnd2511.services;

import com.sundarMan.EmployeeBackEnd2511.models.Employee;

import java.util.List;

public interface EmployeeService {

    Employee registerEmployeeByS(Employee employee);

    List<Employee> getAllEmployeesByS();
}
