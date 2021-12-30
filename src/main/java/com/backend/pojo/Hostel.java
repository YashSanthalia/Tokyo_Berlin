package com.backend.pojo;

public class Hostel {
	private int id;
	 private String name;
	 private int capacity;
	 private int status;
	public Hostel(int id, String name, int capacity, int status) {
		super();
		this.id = id;
		this.name = name;
		this.capacity = capacity;
		this.status = status;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
}
