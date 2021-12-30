package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.backend.service.GuardService;

public class GuardController {

	@Autowired
	GuardService guardService;
	
	@GetMapping("/guardhostels/{userName}/{password}")
	public String fetchHostelNameForGuard(@PathVariable int userName, @PathVariable String password) {
		return guardService.getHostelNameForGuard(userName, password);
	}
}
