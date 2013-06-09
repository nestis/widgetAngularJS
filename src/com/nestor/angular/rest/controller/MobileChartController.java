package com.nestor.angular.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.nestor.angular.constant.PathConstants;
import com.nestor.angular.rest.dto.AxisDto;
import com.nestor.angular.rest.dto.ChartDataDto;
import com.nestor.angular.rest.dto.ChartDto;
import com.nestor.angular.rest.dto.ResponseDto;
import com.nestor.angular.service.api.MobileService;
import com.nestor.angular.service.dto.MobileOSDto;

@Controller
@RequestMapping(value = PathConstants.MOBILE_CHART_PATH)
public class MobileChartController {

	@Autowired
	private MobileService mobileSrv;
	
	@RequestMapping(value = PathConstants.GRID_PATH)
	@ResponseStatus(value = HttpStatus.OK)
	public @ResponseBody ResponseDto getMobileOSGrid() {

		List<MobileOSDto> listMobile = mobileSrv.getAllMobileOS();
		
		ResponseDto response = new ResponseDto();
		response.addData("gridData",listMobile);
		
		return response;
	}
	
	@RequestMapping(value = PathConstants.CHART_PATH)
	@ResponseStatus(value = HttpStatus.OK)
	public @ResponseBody ResponseDto getMobileOSChart() {

		List<MobileOSDto> listMobile = mobileSrv.getAllMobileOS();
		
		ChartDto chart = new ChartDto();
		AxisDto xAxis = new AxisDto();
		AxisDto yAxis = new AxisDto();

		List<String> xAxisCategories = new ArrayList<>(0);

		yAxis.setTitle("Market Share of MobileOS");
		chart.setyAxis(yAxis);

		List<ChartDataDto> listData = new ArrayList<>(0);
		
		for (MobileOSDto mob : listMobile) {
			ChartDataDto data = new ChartDataDto();
			data.setName(mob.getName()); 

			for(Double d: mob.getShare().values()){
				data.addData(d);
			}
			
			listData.add(data);
		}
		for(String month:listMobile.get(0).getShare().keySet()){
			xAxisCategories.add(month);
		}
		chart.setData(listData);
		xAxis.setCategories(xAxisCategories);
		chart.setxAxis(xAxis);

		ResponseDto response = new ResponseDto();
		response.addData("chartData", chart);

		return response;
	}
	
}
