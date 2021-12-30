package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.service.WardenService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class WardenController {
	
	@Autowired
	WardenService wardenService;
	
	@GetMapping("/hostels/{userName}/{password}")
	public String fetchHostelName(@PathVariable int userName, @PathVariable String password) {
		return wardenService.getHostelName(userName, password);
	}
}
