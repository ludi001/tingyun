//应用环境
import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'pages/Application/yyhj.css';
import Header from 'pages/functionalCom/Header.js';
import data from './data.js';

class Yyhj extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {}=this.props;
        return (
            <div className='yyhj' id='yyhj'>
                <Header optionData={'more'} />
                <div className='yyhj_body'>
                	<div className='PHP'>
                		<div className='PHP_left'>
                			<table>
                				<thead>
                					<tr>
                						<th>Host</th>
                						<th>Agent Version</th>
                						<th>Latest Data Time</th>
                					</tr>
                				</thead>
                				<tbody>
                				{
                					data.data.yyhj.map((value)=>{
                						return(
                							<tr key={value.host}>
		                						<td>{value.host}</td>
		                						<td>{value.version}</td>
		                						<td>{value.time}</td>
		                					</tr>
                						)
                					})
                				}
                				</tbody>
                			</table>
                		</div>
                		<div className='PHP_right'>
                			<table>
                				<thead>
                					<tr>
                						<th>配置项</th>
                						<th>配置项</th>
                					</tr>
                				</thead>
                				<tbody>
	                				<tr><td>Processors</td><td>1</td></tr>
	                				<tr><td>OS version</td><td>Linux ucd-ty-app-demo-1.ucd.tingyun.com 2.6.32-431.11.7.el6.ucloud.x86_64 #1 SMP Wed Jan 7 23:42:27 CST 2015 x86_64</td></tr>                    				
	                				<tr><td>networkbench</td><td>Oct 15 2015</td></tr> 
                				</tbody>
                			</table>
                		</div>
                	</div>
                	<div className='Tomcat'></div>
                	<div className='java_demo'></div>
                	<div className='fvt_php'></div>
                	<div className='java_consumer'></div>
                </div>
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
    	willMount:()=>{

    	},
    	init:()=>{
    		let height=$('#yyhj').css('height');
            $('#secondTree').css('height',height);
    	}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Yyhj);