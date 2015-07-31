/**
 * 
 */
package com.verizon.m2mHackathon.Service;

import java.util.List;
import java.util.Map;

import com.verizon.m2mHackathon.exceptions.M2MException;

import yahoofinance.Stock;

/**
 * @author Administrator
 *
 */
public interface StockInfoService {
	
	public Stock getCompStockInfo(String companyName)throws M2MException;
	public Map<String, Stock> getCompaniesStockInfo(List<String> companiesList)throws M2MException;

}
