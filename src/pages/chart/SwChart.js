import React, {Component} from 'react';
import {connect} from 'react-redux';
var Highcharts = require('react-highcharts');
		
class SwChart extends Component{	
	render() {
		let {swChartData}=this.props;
    	let configPie = {
            chart: {
	            type: 'column',
	            height:300,
	        },
	        title: {
	            text: ''
	        },
	        legend: {//图例
	            align: 'center',
	            verticalAlign: 'top',
	            x: 0,
	            y: 0,
	            floating: true,
	            borderWidth: 1,
	            backgroundColor: '#fff',
	            itemStyle: {
                    fontSize:"12px",
                    fontWeight:"normal",
                    fontFamily:"微软雅黑"
                },
	        },
	        xAxis: {//x坐标
	            categories: swChartData ? swChartData.tranName:'',
	            min:0,
	        },
	        yAxis: {
	            title: {
	                text: '(秒)',
	                align:'high',
	                rotation:0,
	                x:25,
	                y:5,
	            },
	            labels: {
	                align: 'left',
	                x: 0,
	                y: 20
            	}
	        },
	        tooltip: {//hover提示框
	            shared: true,
	            valueSuffix: 's'
	        },
	        credits: {
	            enabled: false //不显示highCharts版权信息
	        },
	        plotOptions: {
	            
	        },
	        series: [{
	            name: '最小值',
	            data: swChartData ? swChartData.minTime:''
	        },{
	            name: '平均值',
	            data: swChartData ? swChartData.avgTime:''
	        },{
	            name: '最大值',
	            data: swChartData ? swChartData.maxTime:''
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

export default connect(mapStateToProps, mapDispatchToProps)(SwChart);