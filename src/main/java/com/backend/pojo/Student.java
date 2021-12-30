package com.backend.pojo;

public class Student {
	private int reg_no;
	private String password;
	private String name;
	private int semester;
	private String address;
	private String personal_mob;
	private String parent_mob;
	private String branch;
	private int room_no;
	private int hostel_id;
	private String email;
	private String gender;
	private String dob;
	private String adhaarcard_no;
	private int blackdots;
	public Student(int reg_no, String password, String name, int semester, String address, String personal_mob,
			String parent_mob, String branch, int room_no, int hostel_id, String email, String gender, String dob,
			String adhaarcard_no, int blackdots) {
		super();
		this.reg_no = reg_no;
		this.password = password;
		this.name = name;
		this.semester = semester;
		this.address = address;
		this.personal_mob = personal_mob;
		this.parent_mob = parent_mob;
		this.branch = branch;
		this.room_no = room_no;
		this.hostel_id = hostel_id;
		this.email = email;
		this.gender = gender;
		this.dob = dob;
		this.adhaarcard_no = adhaarcard_no;
		this.blackdots = blackdots;
	}
	public int getReg_no() {
		return reg_no;
	}
	public void setReg_no(int reg_no) {
		this.reg_no = reg_no;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getSemester() {
		return semester;
	}
	public void setSemester(int semester) {
		this.semester = semester;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPersonal_mob() {
		return personal_mob;
	}
	public void setPersonal_mob(String personal_mob) {
		this.personal_mob = personal_mob;
	}
	public String getParent_mob() {
		return parent_mob;
	}
	public void setParent_mob(String parent_mob) {
		this.parent_mob = parent_mob;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public int getRoom_no() {
		return room_no;
	}
	public void setRoom_no(int room_no) {
		this.room_no = room_no;
	}
	public int getHostel_id() {
		return hostel_id;
	}
	public void setHostel_id(int hostel_id) {
		this.hostel_id = hostel_id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getAdhaarcard_no() {
		return adhaarcard_no;
	}
	public void setAdhaarcard_no(String adhaarcard_no) {
		this.adhaarcard_no = adhaarcard_no;
	}
	public int getBlackdots() {
		return blackdots;
	}
	public void setBlackdots(int blackdots) {
		this.blackdots = blackdots;
	}
}
