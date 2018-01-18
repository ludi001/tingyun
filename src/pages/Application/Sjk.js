//数据库
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/sjk.css';
import Header from 'pages/functionalCom/Header.js';
import SortHeader from 'pages/functionalCom/SortHeader.js';
import Sjk_right from './sjk_right.js';
import { Icon } from 'antd';
import SwChart from 'pages/chart/SwChart.js';
import SwChart2 from 'pages/chart/SwChart2.js';
import data from './data.js';

class Sjk extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {showAdd,sjk_right=false,showRight}=this.props;
        let tabData=['SQL耗时','平均响应时间','吞吐率','事务响应时间','top'];
        return (
            <div className='sjk' id='sjk'>
                <Header headerFlag={true} optionData={'more'} />
                <div className='sjk_body'>
                    <SortHeader tabData={tabData}  />
                    <div className='sjk_content'>
                        <div className='sjk_content_left'>
                            <div className='sjk_content_left_titlt'>数据库一览</div>
                            <div className='sjk_content_left_input'><input/><span>搜索</span></div>
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
                        <div className='sjk_content_right'>
                            {
                                sjk_right && <Sjk_right />
                            }
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> TOP5 最耗时事务(墙钟时间比)堆叠图</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart />
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 事务响应时间和吞吐率</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart2 />
                            <div className="sjk_content_right_table">
                                <div>
                                    <div className='header'>
		                                <Icon type="question-circle" />
		                                <span> 慢SQL追踪列表</span>
		                            </div>
                                    <div className='search' style={{marginTop: '20px',marginBottom:'20px'}}>                                        
                                        <span>SQL操作: </span><input />
                                        <button value='查询'>查询</button>
                                    </div>                                    
                                    <table style={{width:'100%'}}>
                                        <thead>
                                            <tr>
                                                <th>SQL操作</th>
                                                <th>追踪次数</th>
                                                <th>平均执行时间(ms)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.data.sw2.map((value)=>{
                                                    return(
                                                        <tr key={value.order}>
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
        sjk_right:state.vars.sjk_right
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{
    		
    	},
    	init:()=>{
    		let height=$('#sjk').css('height');
            $('#secondTree').css('height',height);
    	},
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true))
        },
        showRight:()=>{
            dispatch(actions.setVars('sjk_right',true))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sjk);