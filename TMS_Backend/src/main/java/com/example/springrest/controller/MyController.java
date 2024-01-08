package com.example.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springrest.Dao.TaskRepository;
import com.example.springrest.entity.Task;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class MyController {
	@Autowired
	private TaskRepository taskRepo;
	
	
	@PostMapping("/tasks")
	public Task addPatient(@RequestBody Task task) {
		this.taskRepo.save(task);
		return task;
	}
	
	
	@GetMapping("/tasks")
	public List<Task> getTask(){
		return this.taskRepo.findAll();	
	}

	@GetMapping("tasks/{task_id}")
	public ResponseEntity<Task> getTask(@PathVariable() String task_id) {
		Task task = this.taskRepo.getOne(Long.parseLong(task_id));
		return ResponseEntity.ok(task);
	}
	

	
	@PutMapping("/tasks/{task_id}")
	public ResponseEntity<Task> updateTask(@PathVariable String task_id, @RequestBody Task task_details){
		Task task = this.taskRepo.getOne(Long.parseLong(task_id));
		task.setTask_name(task_details.getTask_name());
		task.setDescription(task_details.getDescription());
		task.setOverdue(task_details.getOverdue());
		Task updatedTask = this.taskRepo.save(task);
		return ResponseEntity.ok(updatedTask);
	}
	
	
	@DeleteMapping("/tasks/{task_id}")
	public void deleteTask(@PathVariable String task_id){
		Task entity = this.taskRepo.getOne(Long.parseLong(task_id));
		this.taskRepo.delete(entity);
	}
}