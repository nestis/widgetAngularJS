var WidgetOptions = {
		
		mobileGrid : {
			datatype: "local",
			height: 150,
		   	colNames:['Operating System','Company', 'Market Share'],
		   	colModel:[
		   		{name:'name',index:'name', width:200, sortable:false},
		   		{name:'company',index:'company', width:150, sortable:false},
		   		{name:'share',index:'share', width:200, align:"right",sortable:false, formatter: avgFormatter}
		   	],
		   	multiselect: false
		},

		commonPlot : function(type, chart) {
			return {
				chart: { type: type},
				title: {text: chart.title},
				xAxis: {categories: chart.xAxis.categories},
				yAxis: {title: {
					text: chart.yAxis.title
				    }
				},
				series: chart.data
		    };
		}
};

function avgFormatter (cellvalue, options, rowObject)
{
	var share = 0;
	var items = 0;
	for(var obj in cellvalue){ 
		share= share + cellvalue[obj];
		items++;
	}
	share = share / items;
   return share.toFixed(2) + "%";
}