//外部应用
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/wbyy.css';
import Header from 'pages/functionalCom/Header.js';
import SortHeader from 'pages/functionalCom/SortHeader.js';
import Wbyy_right from './wbyy_right.js';
import { Icon } from 'antd';
import SwChart from 'pages/chart/SwChart.js';
import SwChart2 from 'pages/chart/SwChart2.js';
import data from './data.js';

class Wbyy extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {showAdd,wbyy_right=false,showRight}=this.props;
        let tabData=['响应时间占比','平均响应时间','响应总时间','吞吐率','错误率','top'];
        return (
            <div className='wbyy' id='wbyy'>
                <Header headerFlag={true} optionData={'more'} />
                <div className='wbyy_body'>
                    <SortHeader tabData={tabData}  />
                    <div className='wbyy_content'>
                    	<div className='tab_ul'>
                    		<span>Http</span>
                    		<span>Thrift</span>
                    		<span>Dubbo</span>
                    		<span>Web Service</span>
                    	</div>
                        <div className='wbyy_content_left'>
                            <div className='wbyy_content_left_titlt'>外部应用一览</div>
                            <div className='wbyy_content_left_input'><input/><span>搜索</span></div>
                            <ul style={{width:'100%',listStyle:'none',padding:'0'}}>
                                {
                                    data.data.sw && data.data.sw.map((value)=>{
                                        return(
                                            <li key={value.key} style={{marginBottom:'3px'}} onClick={()=>showRight()}>
                                                <span style={{width:'165px',height:'22px',float:'left'}}>{value.name}</span>
                                                <span style={{width:'50px',height:'22px',float:'right',textAlign:'center'}}>{value.rate}</span>
                                            </li>
                                        )
                                    })
                                }                                
                            </ul>
                        </div>
                        <div className='wbyy_content_right'>
                            {wbyy_right && <Wbyy_right/>}
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 最耗时Memcached操作堆叠图</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart />
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> Memcached吞吐率堆叠图</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart2 />
                            <div className='header'>
		                        <Icon type="question-circle" />
		                        <span> Memcached响应时间曲线图</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
		                    </div>  
		                    <SwChart />                               
                        </div>
                        <div style={{clear:'both'}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        wbyy_right:state.vars.wbyy_right
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{

    	},
    	init:()=>{
    		let height=$('#wbyy').css('height');
            $('#secondTree').css('height',height);
    	},
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true))
        },
        showRight:()=>{
            dispatch(actions.setVars('wbyy_right',true))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wbyy);