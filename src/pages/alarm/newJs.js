//警报设置
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import './newJs.css';
import { Icon } from 'antd';
import myAjax from 'pages/functionalCom/myAjax.js';
const ajax=myAjax.myAjax;

class NewJs extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {backJs}=this.props;
        return (
            <div className='newJs'>
                <div className='newJs_div'><div className='newJs_title' onClick={()=>backJs()}><Icon type="rollback" />新建接收人</div></div>
                <div className='newJs_table'>
                    <table className='newJs_details'>
                        <tbody>
                            <tr>
                                <td>接收人姓名:</td>
                                <td><input/></td>
                            </tr>
                            <tr>
                                <td>E-mail:</td>
                                <td><input/></td>
                            </tr>
                            <tr>
                                <td>手机号:</td>
                                <td><input/></td>
                            </tr>
                            <tr>
                                <td>微信:</td>
                                <td><input/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='newJs_add'>提交</div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        newJs:state.vars.newJs,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{

    	},
    	init:()=>{

    	},
    	backJs:()=>{
    		dispatch(actions.setVars('newJs',false));      
    	}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewJs);