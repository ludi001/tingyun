import React, {Component} from 'react';
import {connect} from 'react-redux';
var Highcharts = require('react-highcharts');
		
class SwPie extends Component{
	render() {
		let {sw_pieData}=this.props;
		console.log('sw_pieData',sw_pieData)
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
	            //headerFormat: '{series.name}<br>',
            	//pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
            	useHTML: true, //是否使用HTML编辑提示信息
	            headerFormat: '<small>{point.name}</small><table>',
	            pointFormat: '<tr><td>{point.name}: </td><td><b>{point.y}</b></td></tr> <tr><td>averageTime: </td><td><b>{point.averageTime}</b></td></tr> <tr><td>maxTime: </td><td><b>{point.maxTime}</b></td></tr> <tr><td>minTime: </td><td><b>{point.minTime}</b></td></tr>',
	            footerFormat: '</table>',
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
	            data: sw_pieData
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