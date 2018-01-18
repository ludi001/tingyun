import React, {Component} from 'react';
import {connect} from 'react-redux';
var Highcharts = require('react-highcharts');
		
class SwPie extends Component{
	render() {
    	let configPie = {
            chart: {
	            height:300,
	        },
	        title: {
	            text: ''
	        },
	        // legend: {//图例
	        //     align: 'center',
	        //     verticalAlign: 'bottom',
	        //     x: 0,
	        //     y: 20,
	        //     floating: true,
	        //     borderWidth: 1,
	        //     backgroundColor: '#fff',
	        //     itemStyle: {
         //            fontSize:"12px",
         //            fontWeight:"normal",
         //            fontFamily:"微软雅黑"
         //        },
	        // },
	        tooltip: {//hover提示框
	            headerFormat: '{series.name}<br>',
            	pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
	        },
	        credits: {
	            enabled: false //不显示highCharts版权信息
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: false
	                },
	                showInLegend: true
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: '访问量占比',
	            data: [
	                ['Firefox',   45.0],
	                ['IE',       26.8],
	                {
	                    name: 'Chrome',
	                    y: 12.8,
	                    sliced: true,
	                    selected: true
	                },
	                ['Safari',    8.5],
	                ['Opera',     6.2],
	                ['其他',   0.7]
	            ]
	        }]
        }
        return (
        	<div>
        		<Highcharts config={configPie}/>
        	</div>        	
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SwPie);