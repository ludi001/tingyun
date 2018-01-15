//线程剖析
import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'pages/Application/xcpx.css';
import Header from 'pages/functionalCom/Header.js';
import { Icon } from 'antd';
import data from './data.js';

class Htrw extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {}=this.props;
        return (
            <div className='xcpx' id='xcpx'>
                <Header optionData={'more'} />
                <div className='xcpx_body'>
                	<div className='xcpx_body_left'>
                		<div className='xcpx_start'>
                			<div className='xcpx_start_title'>开始线程剖析</div>
                			<div className='xcpx_start_select'>选择剖析的时间（2分钟）：</div>
                			<div></div>
                			<div className='xcpx_start_example'>选择实例：</div>
                			<table>
                				<thead>
                					<tr>
                						<th></th>
                						<th style={{width:'40%'}}>实例名</th>
                						<th style={{width:'20%'}}>CPU</th>
                						<th style={{width:'30%'}}>内存使用量</th>
                					</tr>
                				</thead>
                				<tbody>
                				{
                					data.data.xcpx && data.data.xcpx.map((value)=>{
                						return(
                							<tr key={value.name}>
                								<td><input type='radio' name='affair' /></td>
		                						<td style={{width:'40%'}}>{value.name}</td>
		                						<td style={{width:'20%'}}>{value.CPU}</td>
		                						<td style={{width:'30%'}}>{value.rate}</td>
                							</tr>
                						)
                					})
                				}
                				</tbody>
                			</table>
                		</div>
                		<div className='xcpx_ahout'>
                			<div className='xcpx_ahout_title'>关于听云线程剖析</div>
                			<div className='xcpx_ahout_text'>听云线程剖析在不影响用户体验的情况下，以非常低的系统开销采集线程状态。剖析完成后，显示代码消耗时间。</div>
                		</div>
                	</div>
                	<div className='xcpx_body_right'>
                		<div className='xcpx_body_right_title'>线程剖析列表</div>
                		<table style={{width:'100%'}}>
                			<thead>
                				<tr>
                					<th><input type='checkbox' /></th>
                					<th>时间</th>
                					<th>应用</th>
                					<th>持续时间(min)</th>
                					<th>采集人</th>
                				</tr>
                			</thead>
                			<tbody>
                			{
                				data.data.xcpx2.map((value)=>{
                					return(
                						<tr key={value.app}>
                							<td><input type='checkbox' /></td>
		                					<td>{value.time}</td>
		                					<td>{value.app}</td>
		                					<td>{value.continue}</td>
		                					<td>{value.people}</td>
                						</tr>
                					)
                				})
                			}
                			</tbody>
                		</table>
                	</div>
                	<div style={{clear:'both'}}></div>
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
    		let height=$('#xcpx').css('height');
            $('#secondTree').css('height',height);
    	}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Htrw);