package com.nestor.angular.service.impl.mock;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.nestor.angular.service.api.WeatherService;
import com.nestor.angular.service.dto.WeatherMeasureDto;

/**
 * Mock implementation of WeatherService
 * @author vaster
 */
public class WeatherServiceMockImpl implements WeatherService {

	@Override
	public List<WeatherMeasureDto> getWeatherByMonth(int month, int year) {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, month);
		cal.set(Calendar.DATE, 1);
		List<WeatherMeasureDto> listMeasures = new ArrayList<WeatherMeasureDto>(0);
		
		WeatherMeasureDto w1 = new WeatherMeasureDto(23d, 12d, 0d, cal.getTime());
		listMeasures.add(w1);
		
		cal.set(Calendar.DATE, 4);
		WeatherMeasureDto w2 = new WeatherMeasureDto(25d, 17d, 0d, cal.getTime());
		listMeasures.add(w2);
		
		cal.set(Calendar.DATE, 7);
		WeatherMeasureDto w3 = new WeatherMeasureDto(19d, 7d, 50d, cal.getTime());
		listMeasures.add(w3);
		
		cal.set(Calendar.DATE, 10);
		WeatherMeasureDto w4 = new WeatherMeasureDto(21d, 11d, 12d, cal.getTime());
		listMeasures.add(w4);
		
		cal.set(Calendar.DATE, 13);
		WeatherMeasureDto w5 = new WeatherMeasureDto(23d, 19d, 0d, cal.getTime());
		listMeasures.add(w5);
		
		cal.set(Calendar.DATE, 16);
		WeatherMeasureDto w6 = new WeatherMeasureDto(13d, 6d, 57d, cal.getTime());
		listMeasures.add(w6);
		
		cal.set(Calendar.DATE, 19);
		WeatherMeasureDto w7 = new WeatherMeasureDto(22d, 12d, 3d, cal.getTime());
		listMeasures.add(w7);
		
		cal.set(Calendar.DATE, 22);
		WeatherMeasureDto w8 = new WeatherMeasureDto(23d, 14d, 0d, cal.getTime());
		listMeasures.add(w8);
		
		cal.set(Calendar.DATE, 25);
		WeatherMeasureDto w9 = new WeatherMeasureDto(26d, 19d, 0d, cal.getTime());
		listMeasures.add(w9);
		
		cal.set(Calendar.DATE, 28);
		WeatherMeasureDto w10 = new WeatherMeasureDto(22d, 15d, 20d, cal.getTime());
		listMeasures.add(w10);
		
		cal.set(Calendar.DATE, 31);
		WeatherMeasureDto w11 = new WeatherMeasureDto(29d, 21d, 0d, cal.getTime());
		listMeasures.add(w11);
		
		return listMeasures;
	}

	@Override
	public List<WeatherMeasureDto> getWeatherByYear(int year) {
		Calendar cal = Calendar.getInstance();
		cal.set(Calendar.YEAR, year);
		cal.set(Calendar.MONTH, 0);
		cal.set(Calendar.DATE, 1);
		List<WeatherMeasureDto> listMeasures = new ArrayList<WeatherMeasureDto>(0);
		
		WeatherMeasureDto w1 = new WeatherMeasureDto(2d, 12d, 80d, cal.getTime());
		listMeasures.add(w1);
		
		cal.set(Calendar.MONTH, 1);
		WeatherMeasureDto w2 = new WeatherMeasureDto(4d, 13d, 56d, cal.getTime());
		listMeasures.add(w2);
		
		cal.set(Calendar.MONTH, 2);
		WeatherMeasureDto w3 = new WeatherMeasureDto(11d, 7d, 20d, cal.getTime());
		listMeasures.add(w3);
		
		cal.set(Calendar.MONTH, 3);
		WeatherMeasureDto w4 = new WeatherMeasureDto(14d, 3d, 97d, cal.getTime());
		listMeasures.add(w4);
		
		cal.set(Calendar.MONTH, 4);
		WeatherMeasureDto w5 = new WeatherMeasureDto(19d, 13d, 45d, cal.getTime());
		listMeasures.add(w5);
		
		cal.set(Calendar.MONTH, 5);
		WeatherMeasureDto w6 = new WeatherMeasureDto(23d, 15d, 21d, cal.getTime());
		listMeasures.add(w6);
		
		cal.set(Calendar.DATE, 6);
		WeatherMeasureDto w7 = new WeatherMeasureDto(29d, 18d, 6d, cal.getTime());
		listMeasures.add(w7);
		
		cal.set(Calendar.MONTH, 7);
		WeatherMeasureDto w8 = new WeatherMeasureDto(35d, 23d, 0d, cal.getTime());
		listMeasures.add(w8);
		
		cal.set(Calendar.MONTH, 8);
		WeatherMeasureDto w9 = new WeatherMeasureDto(23d, 19d, 23d, cal.getTime());
		listMeasures.add(w9);
		
		cal.set(Calendar.MONTH, 9);
		WeatherMeasureDto w10 = new WeatherMeasureDto(19d, 11d, 10d, cal.getTime());
		listMeasures.add(w10);
		
		cal.set(Calendar.MONTH, 10);
		WeatherMeasureDto w11 = new WeatherMeasureDto(11d, 3d, 25d, cal.getTime());
		listMeasures.add(w11);

		cal.set(Calendar.MONTH, 11);
		WeatherMeasureDto w12 = new WeatherMeasureDto(1d, 0d, 36d, cal.getTime());
		listMeasures.add(w12);
		
		return listMeasures;
	}

	
}
