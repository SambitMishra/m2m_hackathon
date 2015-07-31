/**
 * 
 */
package com.verizon.m2mHackathon.exceptions;

/**
 * @author Administrator
 *
 */
public class M2MException extends Exception{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public M2MException(){
	}

	public M2MException(String message){
		super(message);
	}

	public M2MException(Throwable cause){
		super(cause);
	}

	public M2MException(String message, Throwable cause){
		super(message, cause);
	}

	public M2MException(String message, Throwable cause, 
                                       boolean enableSuppression, boolean writableStackTrace){
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
