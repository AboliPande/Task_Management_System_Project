package com.example.springrest.Dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springrest.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

}