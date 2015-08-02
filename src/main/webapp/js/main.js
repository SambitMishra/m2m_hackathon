$(document).ready(function(){
	$("#addcompany").click(function(event) {
		/* Act on the event */
		var companyInputBox = $("#company"),
		companyInput = companyInputBox.val() || null;
		if(companyInput !== null){
			var companylist = $("#companylist"),
			companylist_length = $("#companylist tr").length;
			if(companylist_length < 4){
				companylist.append('<tr><td>' + companyInput + '</td></tr>');
				$("#comparediv").show();
			}else{
				$("#alertbox").show();
			}
			companyInputBox.val("");
		}
	});
	$("#alertbox a").click(function(event) {
		/* Act on the event */
		$("#alertbox").hide();
	});
	$("#comparebtn").click(function(event) {
		var inputJson = {
			"companyList": [
				"GOOG"
				
			]
		};
		
		/* Act on the event */
		$.ajax({
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			url: "secure/getCompaniesStockInfo",
			method: 'POST',
			// url: "resources/fixtures/getCompaniesStockInfo.json",
			data: JSON.stringify(inputJson),
			success: function(response){
				console.log(response);
			}
		});
		var response = {
		    "data": [
		        {
		            "companyName": "Verizon",
		            "value": "12345"
		        },
		        {
		            "companyName": "AT&T",
		            "value": "14325"
		        },
		        {
		            "companyName": "Sprint",
		            "value": "2345"
		        },
		        {
		            "companyName": "T-Mobile",
		            "value": "1234"
		        }
		    ],
		    "success": true
		};
		var chart = new CanvasJS.Chart("chartContainer");
		var datapoints = [];
		var data = response.data;
		chart.options.title = { text: "Results" };
		chart.options.data = [];
		var series1 = { //dataSeries - first quarter
	        type: "column"
	    };
	    chart.options.data.push(series1);
		for(var i=0,len = data.length;i<len;i++){
			var item = {
				label : data[i].companyName,
				y : parseInt(data[i].value)
			}
			datapoints.push(item);	
		}
		series1.dataPoints = datapoints;
		chart.render();
	});
});
$(function(){


});
/*$(document).ajaxStart(function(){
    $('#loading').show();
 }).ajaxStop(function(){
    $('#loading').hide();
 });*/