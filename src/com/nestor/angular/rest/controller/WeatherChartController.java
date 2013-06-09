package com.nestor.angular.rest.controller;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.nestor.angular.constant.PathConstants;
import com.nestor.angular.rest.dto.AxisDto;
import com.nestor.angular.rest.dto.ChartDataDto;
import com.nestor.angular.rest.dto.ChartDto;
import com.nestor.angular.rest.dto.ResponseDto;
import com.nestor.angular.service.api.WeatherService;
import com.nestor.angular.service.dto.WeatherMeasureDto;
import com.nestor.angular.util.AngularUtil;

@Controller
@RequestMapping(value = PathConstants.WEATHER_CHART_PATH)
public class WeatherChartController {

	@Autowired
	private WeatherService weatherSrv;

	@RequestMapping(value = PathConstants.CHART_PATH +"/{year}")
	@ResponseStatus(value = HttpStatus.OK)
	public @ResponseBody
	ResponseDto getWeatherByYear(@PathVariable int year) {
		List<WeatherMeasureDto> listYear = weatherSrv.getWeatherByYear(year);

		ChartDto chart = new ChartDto();
		AxisDto xAxis = new AxisDto();
		AxisDto yAxis = new AxisDto();

		List<String> xAxisCategories = new ArrayList<>(0);

		yAxis.setTitle("Weather observed during year " + year);
		chart.setyAxis(yAxis);

		List<ChartDataDto> listData = new ArrayList<>(0);
		Calendar cal = Calendar.getInstance();
		ChartDataDto maxTemp = new ChartDataDto();
		maxTemp.setName("Max Temp");
		ChartDataDto minTemp = new ChartDataDto();
		minTemp.setName("Min Temp");
		ChartDataDto rain = new ChartDataDto();
		rain.setName("Rain");
		
		for (WeatherMeasureDto wea : listYear) {
			cal.setTime(wea.getDate());

			xAxisCategories.add(AngularUtil.getMonthName(cal.get(Calendar.MONTH)));

			maxTemp.addData(wea.getMaxTemp());
			minTemp.addData(wea.getMinTemp());
			rain.addData(wea.getRain());

		}
		listData.add(maxTemp);
		listData.add(minTemp);
		listData.add(rain);
		chart.setData(listData);
		xAxis.setCategories(xAxisCategories);
		chart.setxAxis(xAxis);

		ResponseDto response = new ResponseDto();
		response.addData("chartData", chart);

		return response;
	}

	@RequestMapping(value = PathConstants.CHART_PATH + "/{year}/{month}")
	@ResponseStatus(value = HttpStatus.OK)
	public @ResponseBody
	ResponseDto getWeatherByYearMonth(@PathVariable int year,
			@PathVariable int month) {
		List<WeatherMeasureDto> listMonth = weatherSrv.getWeatherByMonth(month, year);

		ChartDto chart = new ChartDto();
		AxisDto xAxis = new AxisDto();
		AxisDto yAxis = new AxisDto();

		List<String> xAxisCategories = new ArrayList<>(0);
		String monthName = AngularUtil.getMonthName(month);
		
		yAxis.setTitle("Weather observed during " + monthName + " " + year);
		chart.setyAxis(yAxis);

		List<ChartDataDto> listData = new ArrayList<>(0);
		Calendar cal = Calendar.getInstance();
		ChartDataDto maxTemp = new ChartDataDto();
		maxTemp.setName("Max Temp");
		ChartDataDto minTemp = new ChartDataDto();
		minTemp.setName("Min Temp");
		ChartDataDto rain = new ChartDataDto();
		rain.setName("Rain");
		
		for (WeatherMeasureDto wea : listMonth) {
			cal.setTime(wea.getDate());

			xAxisCategories.add(cal.get(Calendar.DAY_OF_MONTH) + " " + monthName);

			maxTemp.addData(wea.getMaxTemp());
			minTemp.addData(wea.getMinTemp());
			rain.addData(wea.getRain());

		}
		listData.add(maxTemp);
		listData.add(minTemp);
		listData.add(rain);
		chart.setData(listData);
		xAxis.setCategories(xAxisCategories);
		chart.setxAxis(xAxis);

		ResponseDto response = new ResponseDto();
		response.addData("chartData", chart);

		return response;
	}

	
}
