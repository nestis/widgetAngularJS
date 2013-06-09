package com.nestor.angular.rest.dto;

import java.util.List;

public class AxisDto {

	private String title;
	private List<String> categories;
	
	public final String getTitle() {
		return title;
	}
	public final void setTitle(String title) {
		this.title = title;
	}
	public final List<String> getCategories() {
		return categories;
	}
	public final void setCategories(List<String> categories) {
		this.categories = categories;
	}
	
}
