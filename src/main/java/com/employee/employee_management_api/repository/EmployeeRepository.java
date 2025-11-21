package com.employee.employee_management_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.employee_management_api.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{
    
}
