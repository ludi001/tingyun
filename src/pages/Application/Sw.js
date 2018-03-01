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
import myAjax from 'pages/functionalCom/myAjax.js';
const ajax=myAjax.myAjax;

class Sw extends Component{  
	componentWillMount() {
        this.props.willMount(this.props.headerOptionsID);
    }
    componentDidMount() {
        this.props.init();
    }
    formatDateTime(inputTime) {  //转化时间戳  
        var date = new Date(inputTime);  
        var y = date.getFullYear();    
        var m = date.getMonth() + 1;    
        m = m < 10 ? ('0' + m) : m;    
        var d = date.getDate();    
        d = d < 10 ? ('0' + d) : d;    
        var h = date.getHours();  
        h = h < 10 ? ('0' + h) : h;  
        var minute = date.getMinutes();  
        var second = date.getSeconds();  
        minute = minute < 10 ? ('0' + minute) : minute;    
        second = second < 10 ? ('0' + second) : second;   
        return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;    
    }; 
    render() {
    	let {swTable,swyl,showAdd,sw_display=false,show_sw,sw_back,jump,swChartData}=this.props;
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
                                    swyl && swyl.map((value)=>{
                                        return(
                                            <li key={value.transaction.rpc} style={{marginBottom:'3px'}} onClick={()=>show_sw(value.transaction.rpc)}>
                                                <span style={{width:'165px',height:'22px',float:'left'}}>{value.transaction.rpc}</span>
                                                <span style={{width:'50px',height:'22px',float:'right',textAlign:'center'}}>{value.transactionPer}</span>
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
                            <SwChart swChartData={swChartData} />
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
                                                swTable && swTable.map((value)=>{
                                                    return(
                                                        <tr key={value.spanId} onClick={()=>jump(value.transactionId)}>
                                                            <td>{value.spanId}</td>
                                                            <td>{this.formatDateTime(Number(value.startTime))}</td>
                                                            <td>{value.rpc}</td>
                                                            <td>{value.elapsed}</td>
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
        sw_display: state.vars.sw_display,
        swyl : state.vars.swyl,
        swTable : state.vars.swTable,
        headerOptionsID : state.vars.headerOptionsID,//默认ID
        swChartData : state.vars.swChartData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:(headerOptionsID)=>{
    		let obj1={//事务一览
                type: 'get',
                url: 'apm/transactionList.pinpoint' ,
                data: 'appId='+headerOptionsID,
                dataType: 'json'
            };
            ajax(obj1,callback1);
            function callback1(data){
                console.log('事务一览',data)
                dispatch(actions.setVars('swyl',data.objectList))
            }
            
            let obj2={//慢事务追踪列表
                type: 'get',
                url: 'apm/slowTransaction.pinpoint',
                data: 'appId='+headerOptionsID,
                dataType: 'json'
            };
            ajax(obj2,callback2);
            function callback2(data){
                console.log('慢事务追踪列表',data)
                dispatch(actions.setVars('swTable',data.objectList))
            }

            let obj3={//top事务
                type: 'get',
                url: 'apm/expensiveTranList.pinpoint',
                data: 'topNum=5&appId='+headerOptionsID ,
                dataType: 'json'
            };
            ajax(obj3,callback3);
            function callback3(data){
                console.log('top事务',data);
                let swChartData={
                    tranName:[],
                    maxTime:[],
                    minTime:[],
                    avgTime:[]
                }
                for(let i=0;i<data.objectList.length;i++){
                    swChartData.tranName.push(data.objectList[i].transaction.rpc);
                    swChartData.maxTime.push(data.objectList[i].maxTransactionTime);
                    swChartData.minTime.push(data.objectList[i].minTransactionTime);
                    swChartData.avgTime.push(Number(data.objectList[i].avgTransactionTime));
                }
                dispatch(actions.setVars('swChartData',swChartData))
            }
    	},
    	init:()=>{
    		let height=$('#sw').css('height');
            $('#secondTree').css('height',height);
    	},
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true))
        },
        show_sw:(url)=>{
            dispatch(actions.setVars('sw_display',true));
            dispatch(actions.setVars('sw_rpc',url));
        },
        jump:(id)=>{
            dispatch(actions.setVars('slowTransition',true));
            dispatch(actions.setVars('transactionId',id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sw);