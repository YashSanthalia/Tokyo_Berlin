package com.backend.dao;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Repository;

@Repository
public class WardenDao extends StarterDao{
	
	public String getHostelName(int id, String password) {
		System.out.println(id);
		System.out.println(password);
		String sql = "SELECT `name` FROM `hostels` WHERE `id` = (SELECT `hostel_id` FROM `wardens` WHERE `id` = '" +id+ "' AND `password` = '" + password +"');";
//		System.out.println(sql);
		String ss="";
		try {
			ss = (String) jdbcTemplate.queryForObject(sql,String.class);
		}
		catch(EmptyResultDataAccessException e) {
			ss="error";
		}
		return ss;
	}
}
