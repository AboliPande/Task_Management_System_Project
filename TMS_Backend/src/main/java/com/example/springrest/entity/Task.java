package com.example.springrest.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class Task {
	@Id
	private long task_id;
	private String task_name;
	private String description;
	private Date overdue = new Date();
	public Task() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Task(long task_id, String task_name, String description, Date overdue) {
		super();
		this.task_id = task_id;
		this.task_name = task_name;
		this.description = description;
		this.overdue = overdue;
	}
	public long getTask_id() {
		return task_id;
	}
	public void setTask_id(long task_id) {
		this.task_id = task_id;
	}
	public String getTask_name() {
		return task_name;
	}
	public void setTask_name(String task_name) {
		this.task_name = task_name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getOverdue() {
		return overdue;
	}
	public void setOverdue(Date overdue) {
		this.overdue = overdue;
	}
	public String toString() {
		return "task [task_id=" + task_id + ", task_name=" + task_name + ", description=" + description + ", overdue="
				+ overdue + "]";
	}
}