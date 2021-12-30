package com.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.dao.WardenDao;

@Service
public class WardenService {

	@Autowired
	WardenDao wardenDao;
	
	public String getHostelName(int id, String password) {
		return wardenDao.getHostelName(id, password);
	}
}
