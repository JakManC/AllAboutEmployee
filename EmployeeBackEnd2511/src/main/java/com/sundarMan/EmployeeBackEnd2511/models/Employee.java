package com.sundarMan.EmployeeBackEnd2511.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    @Id

    private String id;

    private String fullName;

    private int age;

    private String ambition;
}
