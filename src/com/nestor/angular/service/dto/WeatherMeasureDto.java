package com.nestor.angular.service.dto;

import java.io.Serializable;
import java.util.Date;

public class WeatherMeasureDto implements Serializable{

	private static final long serialVersionUID = -8115913346410445843L;
	private Double maxTemp;
	private Double minTemp;
	private Double rain;
	private Date date;
	
	public final Double getMaxTemp() {
		return maxTemp;
	}
	public final void setMaxTemp(Double maxTemp) {
		this.maxTemp = maxTemp;
	}
	public final Double getMinTemp() {
		return minTemp;
	}
	public final void setMinTemp(Double minTemp) {
		this.minTemp = minTemp;
	}
	public final Double getRain() {
		return rain;
	}
	public final void setRain(Double rain) {
		this.rain = rain;
	}
	public final Date getDate() {
		return (date==null ? new Date() : (Date)date.clone());
	}
	public final void setDate(Date date) {
		this.date = (date==null) ? new Date():(Date) date.clone();
	}
	
	public WeatherMeasureDto(Double maxTemp, Double minTemp, Double rain,
			Date date) {
		super();
		this.maxTemp = maxTemp;
		this.minTemp = minTemp;
		this.rain = rain;
		this.date = date;
	}

}
