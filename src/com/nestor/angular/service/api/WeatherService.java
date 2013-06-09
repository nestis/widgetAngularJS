package com.nestor.angular.service.api;

import java.util.List;

import com.nestor.angular.service.dto.WeatherMeasureDto;

/**
 * Service which provides methods for Weather Entity.
 * @author vaster
 */
public interface WeatherService {

	/**
	 * Get Weather info for a given month and year.
	 * @param month int. 0 is January...11 is December.
	 * @param year int. 
	 * @return List of WeatherMeasureDto.
	 */
	List<WeatherMeasureDto> getWeatherByMonth(int month, int year);
	
	/**
	 * Get Weather info for a given year.
	 * @param year int. 
	 * @return List of WeatherMeasureDto.
	 */
	List<WeatherMeasureDto> getWeatherByYear(int year);
}
