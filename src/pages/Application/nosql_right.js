import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import { Icon } from 'antd';
import SwPie from 'pages/chart/swPie.js';
import './nosql_right.css';

class Nosql_right extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {sw_back,showAdd}=this.props;
        return (
            <div className='nosql_content_right_block'>
                <div className='nosql_content_right_block_tab'>
                    <span>性能分解</span><span>错误</span>
                </div>
                <div className='nosql_content_right_block_chart'>
                    <div className="back" onClick={()=>sw_back()}><Icon type="rollback" />返回</div>
                    <div>
                        <div className='header'>
                            <Icon type="question-circle" />
                        	<span> 事务性能分解堆叠图</span>
                            <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                        </div>
                        <SwPie/>
                        <div className='header'>
                            <Icon type="question-circle" />
                            <span> 事务分解表格</span>
                            <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                        </div>
                        <table style={{width:'100%',marginTop:'10px'}}>
                            <thead>
                                <tr>
                                    <th>代码段</th>
                                    <th>性能分类</th>
                                    <th>耗时百分比（%）</th>
                                    <th>调用次数</th>
                                    <th>平均响应时间（ms）</th>
                                </tr>
                            </thead>
                        </table>
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
    		
    	},
        sw_back:()=>{
            dispatch(actions.setVars('nosql_right',false))
        },
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nosql_right);