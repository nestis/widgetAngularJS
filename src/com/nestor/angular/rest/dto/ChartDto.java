package com.nestor.angular.rest.dto;

import java.util.Collections;
import java.util.List;

public class ChartDto {

	private String chartTitle;
	private AxisDto xAxis;
	private AxisDto yAxis;
	private List<ChartDataDto> data;
	
	public final String getChartTitle() {
		return chartTitle;
	}
	public final void setChartTitle(String chartTitle) {
		this.chartTitle = chartTitle;
	}
	public final AxisDto getxAxis() {
		return xAxis;
	}
	public final void setxAxis(AxisDto xAxis) {
		this.xAxis = xAxis;
	}
	public final AxisDto getyAxis() {
		return yAxis;
	}
	public final void setyAxis(AxisDto yAxis) {
		this.yAxis = yAxis;
	}
	public final List<ChartDataDto> getData() {
		return data;
	}
	public final void setData(List<ChartDataDto> data) {
		this.data = data;
	}
	
	public ChartDto() {
		this.chartTitle = "";
		this.xAxis = new AxisDto();
		this.yAxis = new AxisDto();
		this.data = Collections.EMPTY_LIST;
	}
	
}
