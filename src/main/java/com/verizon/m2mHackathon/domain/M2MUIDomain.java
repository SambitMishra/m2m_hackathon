/**
 * 
 */
package com.verizon.m2mHackathon.domain;

import java.io.Serializable;
import java.util.List;

/**
 * @author Administrator
 *
 */
public class M2MUIDomain implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<String> companyList;
	/**
	 * @return the companyList
	 */
	public List<String> getCompanyList() {
		return companyList;
	}
	/**
	 * @param companyList the companyList to set
	 */
	public void setCompanyList(List<String> companyList) {
		this.companyList = companyList;
	}
	
	
	

}
