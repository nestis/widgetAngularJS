package com.nestor.angular.service.api;

import java.util.List;

import com.nestor.angular.service.dto.MobileOSDto;

/**
 * Service which handles the Mobile Requests
 * @author vaster
 */
public interface MobileService {

	/**
	 * Return a list with all the mobile OS.
	 * @return List of MobileOSDto
	 */
	List<MobileOSDto> getAllMobileOS();
	
}
