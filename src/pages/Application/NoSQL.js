//NoSql
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/nosql.css';
import Header from 'pages/functionalCom/Header.js';
import SortHeader from 'pages/functionalCom/SortHeader.js';
import { Icon } from 'antd';
import SwChart from 'pages/chart/SwChart.js';
import SwChart2 from 'pages/chart/SwChart2.js';
import data from './data.js';

class NoSQL extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {showAdd}=this.props;
        let tabData=['操作总耗时','平均响应时间','吞吐率','top'];
        return (
            <div className='nosql' id='nosql'>
                <Header headerFlag={true} optionData={'more'} />
                <div className='nosql_body'>
                    <SortHeader tabData={tabData}  />
                    <div className='nosql_content'>
                    	<div className='tab_ul'>
                    		<span>Memcached</span>
                    	</div>
                        <div className='nosql_content_left'>
                            <div className='nosql_content_left_titlt'>Memcached一览</div>
                            <div className='nosql_content_left_input'><input/><span>搜索</span></div>
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
                        <div className='nosql_content_right'>
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
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{

    	},
    	init:()=>{
    		let height=$('#nosql').css('height');
            $('#secondTree').css('height',height);
    	},
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoSQL);