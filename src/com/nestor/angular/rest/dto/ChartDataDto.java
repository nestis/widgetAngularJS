package com.nestor.angular.rest.dto;

import java.util.ArrayList;
import java.util.List;

public class ChartDataDto {

	private String name;
	private List<Object> data;
	
	public final String getName() {
		return name;
	}
	public final void setName(String name) {
		this.name = name;
	}
	public final List<Object> getData() {
		return data;
	}
	public final void setData(List<Object> data) {
		this.data = data;
	}
	
	public ChartDataDto() {
		data = new ArrayList<Object>(0);
	}
	
	public void addData(Object obj) {
		data.add(obj);
	}
	
}
