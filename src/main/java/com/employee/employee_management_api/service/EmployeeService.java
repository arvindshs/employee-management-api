package com.employee.employee_management_api.service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import com.employee.employee_management_api.repository.EmployeeRepository;
import com.employee.employee_management_api.entity.Employee;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository repo;

    public List<Employee> getAll() {
        return repo.findAll();
    }

    public Employee getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public Employee create(Employee emp) {
        return repo.save(emp);
    }

    public Employee update(Long id, Employee emp) {
        emp.setId(id);
        return repo.save(emp);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
