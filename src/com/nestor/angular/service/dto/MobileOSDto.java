package com.nestor.angular.service.dto;

import java.util.HashMap;

public class MobileOSDto {

	private String name;
	private String company;
	private HashMap<String, Double> share;
	
	public final String getName() {
		return name;
	}
	public final void setName(String name) {
		this.name = name;
	}
	public final String getCompany() {
		return company;
	}
	public final void setCompany(String company) {
		this.company = company;
	}
	public final HashMap<String, Double> getShare() {
		return share;
	}
	public final void setShare(HashMap<String, Double> share) {
		this.share = share;
	}
	
	public MobileOSDto(String name, String company, HashMap share) {
		super();
		this.name = name;
		this.company = company;
		this.share = share;
	}	
}
