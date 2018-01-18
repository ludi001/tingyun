//情报汇总
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/qbhz.css';
import Header from 'pages/functionalCom/Header.js';//header组件
import { Select, Icon } from 'antd';
const Option = Select.Option;
import ApplicationChart from 'pages/chart/ApplicationChart.js';//应用服务器响应时间
import Apdexchart from 'pages/chart/Apdexchart.js';
import TimeConsuming from 'pages/chart/TimeConsuming.js';//最耗时

import data from './data.js';//假数据
class Qbhz extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }    
    render() {
    	let {showAdd,iconActive='all',iconAll,iconWarn,iconExclama}=this.props;
        return (
            <div className='qbhz' id='qbhz'>
                <Header headerFlag={true} optionData={'more'} />
            	<div className='qbhz_body'>
                	<div className='qbhz_body_first'>
                		<div className='left'>
                			<div className='header'>
                				<Icon type="question-circle" />
                				<span> 应用服务器响应时间</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                			</div>
                			<ApplicationChart />
                		</div>
                		<div className='right'>
                			<div className='header'>
                				<Icon type="question-circle" />
                				<span> Apdex指标</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                			</div>
                            <Apdexchart />
                		</div>
                        <div style={{clear:'both'}}></div>
                	</div>
                	<div className='qbhz_body_second'>
                        <div className='left secondBox'>
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 错误率</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <Apdexchart />
                        </div>
                        <div className='middle secondBox'>
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 最耗时事务图表</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <TimeConsuming />
                        </div>
                        <div className='right secondBox'>
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 吞吐率</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <Apdexchart />
                        </div>
                        <div style={{clear:'both'}}></div>
                    </div>
                	<div className='qbhz_body_third'>
                        <div className='left thirdBox'>
                            <div className='header'>
                                <Icon type="global" />
                                <span> 服务器资源</span>
                            </div>
                            <div className='cpu_box'>
                                <div className='cpu1'>
                                    <div className='header'>
                                        <Icon type="question-circle" />
                                        <span> 应用CPU使用率</span>
                                        <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                                    </div>
                                    <Apdexchart />
                                </div>
                                <div className='cpu2'>
                                    <div className='header'>
                                        <Icon type="question-circle" />
                                        <span> 应用内存使用量</span>
                                        <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                                    </div>
                                    <Apdexchart />
                                </div>
                            </div>
                            <table style={{border:'1px solid #d9d9d9'}}>
                                <thead>
                                    <tr>
                                        <th>名称</th>
                                        <th>Apdex</th>
                                        <th>响应时间(ms)</th>
                                        <th>吞吐率(rpm)</th>
                                        <th>错误率(%)</th>
                                        <th>CPU使用率(%)</th>
                                        <th>内存使用率(MB)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.qbhz.map((value)=>{
                                            return(
                                                <tr key={value.name}>
                                                    <td>{value.name}</td>
                                                    <td>{value.apdex}</td>
                                                    <td>{value.time}</td>
                                                    <td>{value.rmp}</td>
                                                    <td>{value.erro}</td>
                                                    <td>{value.cpu}</td>
                                                    <td>{value.mb}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className='right thirdBox'>
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 慢事务追踪列表</span>
                            </div>
                            <div style={{paddingTop:'20px',paddingBottom:'20px'}}>
                                <table style={{width:'100%'}}>
                                    <thead style={{width:'100%'}}>
                                        <tr style={{width:'100%'}}>
                                            <th style={{width:'40%'}}>时间</th>
                                            <th style={{width:'20%'}}>事务</th>
                                            <th style={{width:'40%'}}>服务器响应时间(ms)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.data.qbhz2.map((value)=>{
                                                return(
                                                    <tr key={value.time}>
                                                        <td style={{width:'40%'}}>{value.time}</td>
                                                        <td style={{width:'20%'}}>{value.affair}</td>
                                                        <td style={{width:'40%'}}>{value.response}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className='header' style={{marginBottom:'20px'}}>
                                <Icon type="book" />
                                <span> 最近事件</span>
                            </div>
                            <div className='header iconSpan'>                                
                                <span onClick={()=>iconAll()} className={iconActive=='all' ? 'active':''} style={{color:'#54a7db'}}> 所有</span>
                                <span onClick={()=>iconWarn()} className={iconActive=='warning' ? 'active':''} style={{color:'#ff9700'}}> <Icon type="warning" /></span>
                                <span onClick={()=>iconExclama()} className={iconActive=='exclamation' ? 'active':''} style={{color:'#fe422d'}}> <Icon type="exclamation-circle" /></span>                              
                            </div>
                            {
                                iconActive=='all' && <div className='text'>
                                    暂无事件
                                </div>
                            }
                            {
                                iconActive=='warning' && <div className='text'>
                                    暂无警告事件
                                </div>
                            }
                            {
                                iconActive=='exclamation' && <div className='text'>
                                    暂无严重问题事件
                                </div>
                            }                            
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
        iconActive:state.vars.iconActive
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{
    		console.log('willMount')
    	},
    	init:()=>{
            let height=$('#qbhz').css('height');
    		$('#secondTree').css('height',height);
    	},
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true));
        },
        iconAll:()=>{
            dispatch(actions.setVars('iconActive','all'))
        },
        iconWarn:()=>{
            dispatch(actions.setVars('iconActive','warning'))
        },
        iconExclama:()=>{
            dispatch(actions.setVars('iconActive','exclamation'))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Qbhz);