package com.nestor.angular.service.impl.mock;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.nestor.angular.service.api.MobileService;
import com.nestor.angular.service.dto.MobileOSDto;

/**
 * Mocked service for com.nestor.angular.service.api.MobileService
 * @author vaster
 *
 */
public class MobileServiceMockImpl implements MobileService{

	public List<MobileOSDto> getAllMobileOS(){
		List<MobileOSDto> listMobileOS = new ArrayList<>(0);
		HashMap<String, Double> appleShare = new HashMap<String, Double>(0);
		appleShare.put("Jan", 31.30);
		appleShare.put("Feb", 34.30);
		appleShare.put("Mar", 29.30);
		appleShare.put("Apr", 31.30);
		appleShare.put("May", 39.80);
		listMobileOS.add(new MobileOSDto("iOS", "Apple", appleShare));
		
		HashMap<String, Double> androidShare = new HashMap<String, Double>(0);
		androidShare.put("Jan", 51.30);
		androidShare.put("Feb", 49.30);
		androidShare.put("Mar", 59.30);
		androidShare.put("Apr", 57.30);
		androidShare.put("May", 51.80);
		listMobileOS.add(new MobileOSDto("Android", "Google", androidShare));
		
		HashMap<String, Double> symbianShare = new HashMap<String, Double>(0);
		symbianShare.put("Jan", 0.50);
		symbianShare.put("Feb", 2.30);
		symbianShare.put("Mar", 1.30);
		symbianShare.put("Apr", 0.30);
		symbianShare.put("May", 0.80);
		listMobileOS.add(new MobileOSDto("Symbian", "Nokia", symbianShare));
		
		HashMap<String, Double> bbShare = new HashMap<String, Double>(0);
		bbShare.put("Jan", 5.30);
		bbShare.put("Feb", 4.30);
		bbShare.put("Mar", 3.30);
		bbShare.put("Apr", 3.30);
		bbShare.put("May", 5.80);
		listMobileOS.add(new MobileOSDto("Blackberry", "Blackberry", bbShare));
		
		HashMap<String, Double> windowShare = new HashMap<String, Double>(0);
		windowShare.put("Jan", 2.30);
		windowShare.put("Feb", 3.30);
		windowShare.put("Mar", 4.30);
		windowShare.put("Apr", 2.30);
		windowShare.put("May", 3.80);
		listMobileOS.add(new MobileOSDto("Windows Phone", "Microsoft", windowShare));
		
		return listMobileOS;
	}
}
