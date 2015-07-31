/**
 * 
 */
package com.verizon.m2mHackathon.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Administrator
 *
 */
public class M2MResponse implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public M2MResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	public List<Object> dataArray;
	
	public List<String> companyList;
	public String status;
	public String errorCode;
	/**
	 * @return the dataArray
	 */
	public List<Object> getDataArray() {
		return dataArray;
	}
	/**
	 * @param dataArray the dataArray to set
	 */
	public void setDataArray(List<Object> dataArray) {
		this.dataArray = dataArray;
	}
	public void addToDataArray(Object arrayObject){
		if(dataArray==null){
			dataArray= new ArrayList<Object>();
		}
		dataArray.add(arrayObject);
	}
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
	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}
	/**
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	/**
	 * @return the errorCode
	 */
	public String getErrorCode() {
		return errorCode;
	}
	/**
	 * @param errorCode the errorCode to set
	 */
	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}
	

}
