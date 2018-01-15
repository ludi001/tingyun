import React, {Component} from 'react';
import {connect} from 'react-redux';
var Highcharts = require('react-highcharts');
		
class ApplicationChart extends Component{
	render() {
    	let configPie = {
            chart: {
	            type: 'areaspline',
	            height:365,
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
	            categories: ['10.00','10.01','10.02','10.03','10.04'],
	            tickLength: 0,
	            tickmarkPlacement: 'on',
	            startOnTick :false,
	            gridLineWidth: 1,
	            gridLineDashStyle: 'longdash',
	            min:0,
	        },
	        yAxis: {
	        	gridLineDashStyle: 'longdash',
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
	            name: 'Memcached响应时间',
	            data: [3, 4, 3, 5,1]
	        },{
	            name: '外部服务时间',
	            data: [1, 3, 4, 3,2]
	        },{
	            name: '数据库调用时间',
	            data: [3, 4, 3, 5,3]
	        },{
	            name: '应用层时间',
	            data: [1, 2, 4, 4,4]
	        },{
	            name: '阻塞时间',
	            data: [1, 3, 5, 3,5]
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationChart);