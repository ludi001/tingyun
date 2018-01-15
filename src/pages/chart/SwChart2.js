import React, {Component} from 'react';
import {connect} from 'react-redux';
var Highcharts = require('react-highcharts');
		
class swChart2 extends Component{
	render() {
    	let configPie = {
            chart: {
	            zoomType: 'xy',
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
	            categories: ['10.00','10.01','10.02','10.03','10.04','10.05','10.06','10.07','10.08'],
	            tickLength: 0,
	            tickmarkPlacement: 'on',
	            startOnTick :false,
	            gridLineWidth: 1,
	            gridLineDashStyle: 'longdash',
	            min:0,
	        },
	        yAxis: [{
	        	gridLineDashStyle: 'longdash',
	            title: {
	                text: '(rpm)',
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
	        },{
	        	title: {
	                text: '(秒)',
	                align:'high',
	                rotation:0,
	                x:0,
	                y:5,
	            },
	            labels: {
	                align: 'left',
	                x: 0,
	                y: 20
            	},
            	opposite: true	
	        }],
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
	            name: '吞吐率',
	            type: 'column',            	
	            data: [75,17,6, 8, 0, 5, 2, 1, 3]
	        },{
	            name: '平均响应时间',
	            type: 'spline',
	            yAxis: 1,
	            data: [3.3, 2.3, 2.4, 2.3, 2.2, 2.5, 2, 1, 1.3]
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

export default connect(mapStateToProps, mapDispatchToProps)(swChart2);