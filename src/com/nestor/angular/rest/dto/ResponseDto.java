package com.nestor.angular.rest.dto;

import java.util.HashMap;

public class ResponseDto {

	private HashMap<String, Object> data;
	private Boolean error;
	
	public final HashMap<String, Object> getData() {
		return data;
	}
	public final void setData(final HashMap<String, Object> data) {
		this.data = data;
	}
	public final Boolean getError() {
		return error;
	}
	public final void setError(final Boolean error) {
		this.error = error;
	}
	
	public ResponseDto() {
		super();
		this.data = new HashMap<String, Object>(0);
		this.error = false;
	}
	
	public void addData(String name, Object obj) {
		data.put(name, obj);
	}
}
