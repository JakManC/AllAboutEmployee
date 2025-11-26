package com.sundarMan.EmployeeBackEnd2511.repositories;

import com.sundarMan.EmployeeBackEnd2511.models.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends MongoRepository<Employee, String> {
}
