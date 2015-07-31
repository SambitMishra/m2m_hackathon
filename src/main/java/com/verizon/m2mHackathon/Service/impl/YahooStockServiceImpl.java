/**
 * 
 */
package com.verizon.m2mHackathon.Service.impl;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.verizon.m2mHackathon.exceptions.M2MException;
import com.verizon.m2mHackathon.Service.StockInfoService;

import yahoofinance.Stock;
import yahoofinance.YahooFinance;

/**
 * @author Administrator
 *
 */
@Component("stockInfoServices")
public class YahooStockServiceImpl implements StockInfoService {

	private static final Logger LOGGER = LoggerFactory.getLogger("YahooStockServiceImpl.java");
	/* (non-Javadoc)
	 * @see com.verizon.m2mHackathon.Service.StockInfoService#getCompStockInfo(java.lang.String)
	 */
	@Override
	public Stock getCompStockInfo(String companyName)throws M2MException{
		Stock stockInfo =null;
		try {
			stockInfo = YahooFinance.get(companyName);
		} catch (IOException errror) {
			LOGGER.error("Error while retrieving the data from YAHOO: {}"+Arrays.toString(errror.getStackTrace()));
		}
		return stockInfo;
	}

	/* (non-Javadoc)
	 * @see com.verizon.m2mHackathon.Service.StockInfoService#getCompaniesStockInfo(java.util.List)
	 */
	@Override
	public Map<String,Stock> getCompaniesStockInfo(List<String> companiesList)throws M2MException{
		Stock stockInfo =null;
		Map<String,Stock> stockInfoMap = null;
		if(companiesList!=null && companiesList.size()>0){
			for(String companyName:companiesList){
				if(stockInfoMap == null){
					stockInfoMap = new HashMap<String,Stock>();
				}
				try {
					stockInfo = getCompStockInfo(companyName);
					stockInfoMap.put(companyName, stockInfo);
				} catch (M2MException errror) {
					LOGGER.error("Error while retrieving the data from YAHOO: {}"+Arrays.toString(errror.getStackTrace()));
					stockInfoMap.put(companyName, null);
				}
			}
		}
		return stockInfoMap;
	}

}
