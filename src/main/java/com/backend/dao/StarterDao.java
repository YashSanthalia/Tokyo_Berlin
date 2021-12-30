package com.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterBatchUpdateUtils;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class StarterDao {
	
	@Autowired
	public JdbcTemplate jdbcTemplate;
	@Autowired
	public NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	public StarterDao() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public void createInitialTables() {
		String que;
		que = "CREATE TABLE IF NOT EXISTS `hostels` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(100) NOT NULL, `capacity` INT NOT NULL, `status` BOOLEAN NOT NULL, PRIMARY KEY (`id`));";
		jdbcTemplate.execute(que);
		que = "CREATE TABLE IF NOT EXISTS `wardens` (`id` INT NOT NULL, `name` VARCHAR(100) NOT NULL, `email` VARCHAR(100) NULL, `password` VARCHAR(45) NULL, `phone_no` VARCHAR(15) NULL, `hostel_id` INT NULL, PRIMARY KEY (`id`), FOREIGN KEY(`hostel_id`) REFERENCES `hostels`(`id`));";
		jdbcTemplate.execute(que);
		que = "INSERT IGNORE INTO `hostels`(`id`, `name`, `capacity`, `status`) VALUES ('0', 'superadmin', '0', '1');";
		jdbcTemplate.execute(que);
		que="INSERT IGNORE INTO `wardens` (`id`, `name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('123456', 'SuperAdmin', 'superadmin@mnnit.ac.in', 'admin_123', '6200075988', '0');";
		jdbcTemplate.execute(que);
//		que="INSERT INTO `wardens` (`id`, `name`, `email`, `password`, `phone_no`, `hostel_id`) VALUES ('1', 'ShivDutt', 'sd@mnnit.ac.in', '12345', '12345667', '1');";
//		jdbcTemplate.execute(que);
//		que="INSERT INTO `hostels` (`id`, `name`, `capacity`, `status`) VALUES ('1', 'svbh', '800', '2');";
//		jdbcTemplate.execute(que);
	}

}
