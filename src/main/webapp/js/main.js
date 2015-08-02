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
				"VZ"
				
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
				console.log(JSON.stringify(response));
			}
		});
		var response = {
		    "data": [
		        {
		            "code": "VZ",
					"companyName": "Verizon",
		            "price": 46.79,
					"dayHigh": 47.17,
					"dayLow": 46.71,
					"change": 0.12,
		        },
		        {
		            "code": "t",
					"companyName": "AT & T",
		            "price": 34.74,
					"dayHigh": 34.99,
					"dayLow": 34.72,
					"change": -0.06,
		        },
		        {
		            "code": "TMUS",
					"companyName": "T-Mobile",
		            "price": 40.66,
					"dayHigh": 41.21,
					"dayLow": 39.55,
					"change": -0.06,
		        },
		        {
		            "code": "USM",
					"companyName": "US Cellular",
		            "price": 37.22,
					"dayHigh": 38.5,
					"dayLow": 36.55,
					"change": -0.06,
		        }
		    ],
		    "success": true
		};
		var chart = new CanvasJS.Chart("chartContainer");
		var data = response.data;
		chart.options.title = { text: "NYSE" };
		chart.options.data = [];
		// chart.axisY.prefix = '$';
		
		var datapoints = [];
		var seriesHigh = {
	        type: "column"
	    };
		for(var i=0,len = data.length;i<len;i++){
			var item = {
				label : data[i].companyName,
				y : data[i].dayHigh
			}
			datapoints.push(item);	
		}
		seriesHigh.dataPoints = datapoints;
		chart.options.data.push(seriesHigh);
		
		var datapoints = [];
		var seriesLow = {
	        type: "column"
	    };
		for(var i=0,len = data.length;i<len;i++){
			var item = {
				label : data[i].companyName,
				y : data[i].dayLow
			}
			datapoints.push(item);	
		}
		seriesLow.dataPoints = datapoints;
		chart.options.data.push(seriesLow);
		
		var datapoints = [];
		var seriesPrice = {
	        type: "line"
	    };
		for(var i=0,len = data.length;i<len;i++){
			var item = {
				label : data[i].companyName,
				y : data[i].price
			}
			datapoints.push(item);	
		}
		seriesPrice.dataPoints = datapoints;
		chart.options.data.push(seriesPrice);
		
		chart.render();
		drawChart(response);
	});
});

function drawChart(data) {
	
	alert('Chart is drawn');
}


$(function(){
	$(".dropdown-menu li a").click(function(){
		var selText = $(this).text();
		$(this).parents('#domains').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
		$("#disclaimer").show();
		$("#company").multiselect({
			onChange: function(option, checked, select) {
                // alert('Changed option ' + $(option).val() + '.');
                var selectedOptions = $('#company option:selected'),
                	selectedOptionCount = selectedOptions.length,
                	comparebtn = $("#comparebtn");

                if(selectedOptionCount >=2 ){
                	comparebtn.show();
                }
                else{
                	comparebtn.hide();
                }
            }
		});
	});
});