/**
 * 
 */
package com.verizon.m2mHackathon.Controller;

import java.util.Arrays;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.verizon.m2mHackathon.Service.StockInfoService;
import com.verizon.m2mHackathon.domain.M2MResponse;
import com.verizon.m2mHackathon.domain.M2MUIDomain;
import com.verizon.m2mHackathon.exceptions.M2MException;

import yahoofinance.Stock;

/**
 * @author Administrator
 *
 */
@Controller
@RequestMapping("secure")
public class StockCompareController {

	private static final Logger LOGGER = LoggerFactory.getLogger("StockCompareController.java");
	
	@Autowired
	private StockInfoService stockInfoServices;
	
	@RequestMapping(value="/getCompanyStockInfo",method = RequestMethod.POST)
	@ResponseBody
	public M2MResponse getCompanyStockInfo(HttpServletRequest httpRequest,HttpSession httpSession,
							@RequestBody M2MUIDomain uiDomain){
		LOGGER.debug("In method getCompanyStockInfo Controller");
		M2MResponse response = new M2MResponse();
		Stock stockInfo =null;
		String companyName = null;
		try {
			if(uiDomain!=null && uiDomain.getCompanyList()!=null
					&& uiDomain.getCompanyList().size()>0){
				companyName=uiDomain.getCompanyList().get(0);
				stockInfo = stockInfoServices.getCompStockInfo(companyName);
				
			}
			response.addToDataArray(stockInfo);
			
		}catch(M2MException m2mError){
			LOGGER.error("Error while retrieving the data from YAHOO: {}"+Arrays.toString(m2mError.getStackTrace()));
		}
		LOGGER.debug("End of method getCompanyStockInfo Controller");
		return response;
	}
	
	@RequestMapping(value="/getCompaniesStockInfo",method = RequestMethod.POST)
	@ResponseBody
	public M2MResponse getCompaniesStockInfo(HttpServletRequest httpRequest,HttpSession httpSession,
							@RequestBody M2MUIDomain uiDomain){
		LOGGER.debug("In method getCompanyStockInfo Controller");
		M2MResponse response = new M2MResponse();
		Map<String,Stock> stockInfoMap = null;
		try {
			if(uiDomain!=null && uiDomain.getCompanyList()!=null
					&& uiDomain.getCompanyList().size()>0){
				stockInfoMap = stockInfoServices.getCompaniesStockInfo(uiDomain.getCompanyList());
				
			}
			response.addToDataArray(stockInfoMap);
			
		} catch (M2MException errror) {
			LOGGER.error("Error while retrieving the data from YAHOO: {}"+Arrays.toString(errror.getStackTrace()));
		}
		LOGGER.debug("End of method getCompanyStockInfo Controller");
		return response;
	}
}
