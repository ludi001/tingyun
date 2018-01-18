//数据库
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/sjk_right.css';
import { Icon } from 'antd';

class Sjk_right extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {sjk_back,showAdd}=this.props;
        return (
            <div className='sjk_right'>
                <div className="back" onClick={()=>sjk_back()}><Icon type="rollback" />返回</div>
                <div className='header'>
                    <Icon type="question-circle" />
                    <span> 数据库响应时间和吞吐率曲线图</span>
                    <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
                </div>
                <div className='header'>
                    <Icon type="question-circle" />
                    <span> 调用者耗时百分比图</span>
                    <span className='add' onClick={()=>showAdd()}><Icon type="plus-circle-o" /></span>
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
        sjk_back:()=>{
            dispatch(actions.setVars('sjk_right',false))
        },
        showAdd:()=>{
            dispatch(actions.setVars('addInstrument',true));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sjk_right);