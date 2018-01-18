//事务
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/sw.css';
import Header from 'pages/functionalCom/Header.js';
import SortHeader from 'pages/functionalCom/SortHeader.js';
import Sw_right from './sw_right.js';
import { Icon } from 'antd';
import SwChart from 'pages/chart/SwChart.js';
import SwChart2 from 'pages/chart/SwChart2.js';
import data from './data.js';

class Sw extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {showAdd,sw_display=false,show_sw,sw_back}=this.props;
        let tabData=['耗时百分比','响应时间','吞吐率','Apdex','错误率'];
        return (
            <div className='sw' id='sw'>
                <Header headerFlag={true} optionData={'more'} />
                <div className='sw_body'>
                    <SortHeader tabData={tabData}/>
                    <div className='sw_content'>
                        <div className='sw_content_left'>
                            <div className='sw_content_left_titlt'>事务一览</div>
                            <div className='sw_content_left_input'><input/><span>搜索</span></div>
                            <ul style={{width:'100%',listStyle:'none',padding:'0'}}>
                                {
                                    data.data.sw && data.data.sw.map((value)=>{
                                        return(
                                            <li key={value.key} style={{marginBottom:'3px'}} onClick={()=>show_sw()}>
                                                <span style={{width:'165px',height:'22px',float:'left'}}>{value.name}</span>
                                                <span style={{width:'50px',height:'22px',float:'right',textAlign:'center'}}>{value.rate}</span>
                                            </li>
                                        )
                                    })
                                }                                
                            </ul>
                        </div>
                        <div className='sw_content_right'>
                            {
                                sw_display && <Sw_right/>
                            }
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> TOP5 最耗时事务(墙钟时间比)堆叠图</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart />
                            <div className="sw_content_right_table">
                                <div style={{margin: '20px'}}>
                                    <div><span style={{fontSize: '16px'}}>慢事务追踪列表 </span> <Icon type="question-circle" /></div>
                                    <div className='search' style={{marginTop: '20px',marginBottom:'20px'}}>
                                        <span>事务: </span><input style={{width: '10%'}} />
                                        <span>最大响应时间: </span><input />
                                        <span>最小响应时间: </span><input />
                                        <span>参数名: </span><input />
                                        <span>参数值: </span><input />
                                        <button value='查询'>查询</button>
                                    </div>
                                    <div style={{fontSize: '12px',color: '#999',marginBottom:'10px'}}>提示：如根据参数搜索，参数名和参数值必须同时填写，或同时为空</div>
                                    <table style={{width:'100%'}}>
                                        <thead>
                                            <tr>
                                                <th>序号</th>
                                                <th>时间</th>
                                                <th>事务</th>
                                                <th>服务器响应时间(ms)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.data.sw2.map((value)=>{
                                                    return(
                                                        <tr key={value.order}>
                                                            <td>{value.order}</td>
                                                            <td>{value.time}</td>
                                                            <td>{value.affair}</td>
                                                            <td>{value.response}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
        sw_display: state.vars.sw_display 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{
    		console.log('willMount')
    	},
    	init:()=>{
    		let height=$('#sw').css('height');
            $('#secondTree').css('height',height);
    	},
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true))
        },
        show_sw:()=>{
            dispatch(actions.setVars('sw_display',true))
        }
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sw);