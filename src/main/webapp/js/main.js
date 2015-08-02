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
		var selected = $('#company option:selected');
		var companyList = [];
		var total = selected.length;
		
		if(total != 0) {
			for(var i=0; i < total; i++) {
				companyList.push(selected[i].value);
			}
			var inputJson = {
				"companyList": companyList
			};
		}
		
		/* Act on the event */
		$.ajax({
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			url: "secure/getCompaniesStockInfo",
			method: 'POST',
			// url: "resources/fixtures/getCompaniesStockInfo.json",
			scope: companyList,
			data: JSON.stringify(inputJson),
			success: function(response){
				//Traverse data
				var data = response.dataArray[0];
				var output = [];
				
				for(var i=0; i < companyList.length; i++) {
					var key = companyList[i];
					output.push({
						"code": data[key].symbol,
						"companyName": data[key].name.split(' ')[0],
						"price": data[key].quote.price,
						"dayHigh": data[key].quote.dayHigh,
						"dayLow": data[key].quote.dayLow,
						"change": data[key].quote.change,
					});
				}
				
				drawChart(output);
			}
		});
	});
});

function drawChart(data) {
	var chart = new CanvasJS.Chart("chartContainer", {
		
		axisX: {
			title: 'Company'
		},
		axisY: {
			title: 'Stock Price',
			prefix: '$ '
		}
	});
	chart.options.title = { text: "NYSE" };
	chart.options.data = [];
	// chart.axisY.prefix = '$';
	
	var datapoints = [];
	var seriesHigh = {
		type: "column",
		toolTipContent: '{type}: $ {y}'
	};
	for(var i=0,len = data.length;i<len;i++){
		var item = {
			label : data[i].companyName,
			type: 'Highest',
			y : data[i].dayHigh
		}
		datapoints.push(item);	
	}
	seriesHigh.dataPoints = datapoints;
	chart.options.data.push(seriesHigh);
	
	var datapoints = [];
	var seriesLow = {
		type: "column",
		toolTipContent: '{type}: $ {y}'
	};
	for(var i=0,len = data.length;i<len;i++){
		var item = {
			label : data[i].companyName,
			type: 'Lowest',
			y : data[i].dayLow
		}
		datapoints.push(item);	
	}
	seriesLow.dataPoints = datapoints;
	chart.options.data.push(seriesLow);
	
	var datapoints = [];
	var seriesPrice = {
		type: "line",
		toolTipContent: '{type}: $ {y}'
	};
	for(var i=0,len = data.length;i<len;i++){
		var item = {
			label : data[i].companyName,
			type: 'Closing Price',
			y : data[i].price
		}
		datapoints.push(item);	
	}
	seriesPrice.dataPoints = datapoints;
	chart.options.data.push(seriesPrice);
	
	chart.render();
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