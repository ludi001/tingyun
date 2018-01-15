//MQ
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/mq.css';
import Header from 'pages/functionalCom/Header.js';
import SortHeader from 'pages/functionalCom/SortHeader.js';
import { Icon } from 'antd';
import SwChart from 'pages/chart/SwChart.js';
import SwChart2 from 'pages/chart/SwChart2.js';
import data from './data.js';

class MQ extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {mq_page='consumer',mq_showConsumer,mq_showProducer,showAdd}=this.props;
        let tabData=['消息总数','每分钟消息数','平均消息发送时间','总流量','每分钟流量数','top'];
        return (
            <div className='mq' id='mq'>
                <Header headerFlag={true} optionData={'more'} />
                <div className='mq_tab'>
                	<span className={mq_page=='consumer' ? 'active':''} onClick={()=>mq_showConsumer()}>消费者</span>
                    <span className={mq_page=='producer' ? 'active':''} onClick={()=>mq_showProducer()}>生产者</span>
                </div>
                <div className='mq_body'>
                    <SortHeader tabData={tabData}  />
                    <div className='mq_content'>
                    	<div className='tab_ul'>
                    		<span>RabbitMQ</span>
                    		<span>JMS</span>
                    		<span>ActiveMQ</span>
                    		<span>MSMQ</span>
                    	</div>
                        <div className='mq_content_left'>
                            <div className='mq_content_left_titlt'>MQ一览</div>
                            <div className='mq_content_left_input'><input/><span>搜索</span></div>
                            <ul style={{width:'100%',listStyle:'none',padding:'0'}}>
                                {
                                    data.data.sw && data.data.sw.map((value)=>{
                                        return(
                                            <li key={value.key} style={{marginBottom:'3px'}}>
                                                <span style={{width:'165px',height:'22px',float:'left'}}>{value.name}</span>
                                                <span style={{width:'50px',height:'22px',float:'right',textAlign:'center'}}>{value.rate}</span>
                                            </li>
                                        )
                                    })
                                }                                
                            </ul>
                        </div>
                        <div className='mq_content_right'>
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> Top5 最耗时MQ服务</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart />
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 每分钟流量</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart2 />
                            <div className='header'>
		                        <Icon type="question-circle" />
		                        <span> 每分钟消息数和平均消息发送时间</span>
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
        mq_page : state.vars.mq_page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{

    	},
    	init:()=>{
    		let height=$('#mq').css('height');
            $('#secondTree').css('height',height);
    	},
        mq_showProducer:()=>{
            dispatch(actions.setVars('mq_page','producer'))
        },
        mq_showConsumer:()=>{
            dispatch(actions.setVars('mq_page','consumer'))
        },
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MQ);