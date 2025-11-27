package com.sundarMan.EmployeeBackEnd2511.controllers;

import com.sundarMan.EmployeeBackEnd2511.models.Employee;
import com.sundarMan.EmployeeBackEnd2511.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/employee2511")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/public/registerEmployee2511")
    public ResponseEntity<Employee> registerEmployee(@RequestBody Employee employee) {
        Employee registeredEmployee = employeeService.registerEmployeeByS(employee);
        return new ResponseEntity<>(registeredEmployee, HttpStatus.OK);

    }

    @GetMapping("/admin/getAllEmployees2511")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployeesByS();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    @DeleteMapping("/admin/deleteEmployeeById/{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable String  id)
    {
        Employee deletedEmployee=employeeService.deleteEmployeeByIdByS(id);
        return new ResponseEntity<>(deletedEmployee, HttpStatus.OK);
    }
}
