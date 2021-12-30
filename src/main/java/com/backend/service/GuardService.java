package com.backend.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.backend.dao.GuardDao;

public class GuardService {
	
	@Autowired
	GuardDao guardDao;
	
	public String getHostelNameForGuard(int id, String password) {
		return guardDao.getHostelNameForGuard(id, password);
	}

}
