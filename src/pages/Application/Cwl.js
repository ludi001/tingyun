//错误率
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/cwl.css';
import Header from 'pages/functionalCom/Header.js';
import { Icon } from 'antd';
import SwChart from 'pages/chart/SwChart.js';
import SwChart2 from 'pages/chart/SwChart2.js';
import data from './data.js';

class Cwl extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {showAdd}=this.props;
        let tabData=['top'];
        return (
            <div className='cwl' id='cwl'>
                <Header headerFlag={true} optionData={'more'} />
                <div className='cwl_body'>
                    <div><span>显示top20 </span><input type='checkbox' /></div>
                    <div className='cwl_content'>
                        <div className='cwl_content_left'>
                            <div className='cwl_content_left_titlt'>错误一览</div>                            
                        </div>
                        <div className='cwl_content_right'>
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 应用错误率</span>
                                <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                            </div>
                            <SwChart />
                            <div className='header'>
                                <Icon type="question-circle" />
                                <span> 错误列表</span>
                            </div> 
                            <table style={{width:'100%',marginTop:'10px'}}>
                            	<thead>
                            		<tr>
                            			<th>开始出现时间</th><th>最后发生时间</th><th>持续时间(ms)</th>
                            			<th>事务/错误类型</th><th>错误信息</th><th>统计次数</th>
                            		</tr>
                            	</thead>
                            	<tbody>

                            	</tbody>
                            </table>                              
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
    		let height=$('#cwl').css('height');
            $('#secondTree').css('height',height);
    	},
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cwl);