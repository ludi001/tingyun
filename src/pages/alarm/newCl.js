//警报设置
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import './newCl.css';
import { Icon } from 'antd';
import myAjax from 'pages/functionalCom/myAjax.js';
const ajax=myAjax.myAjax;

class NewCl extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {backCl,productType='app',showApp,showTransaction,showOutService}=this.props;
        return (
            <div className='newCl'>
                <div className='newCl_div'>
                    <div className='newCl_title' onClick={()=>backCl()}><Icon type="rollback" />新建Server警报策略</div>
                    <span className='newCl_div_btn'>提交</span>
                </div>
                <div className='newCl_table'>
                    <table>
                        <tbody>
                            <tr>
                                <td>策略名称：</td>
                                <td><input/></td>
                            </tr>
                            <tr>
                                <td>监控项目：</td>
                                <td className='newCl_btn'>
                                    <span className={productType=='app' ? 'active':''} onClick={()=>showApp()}>应用</span>
                                    <span className={productType=='transaction' ? 'active':''} onClick={()=>showTransaction()}>关键事务</span>
                                    <span className={productType=='outService' ? 'active':''}  onClick={()=>showOutService()}>外部服务</span>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <div className='newCl_details'>
                                        <div><span>响应时间</span></div>
                                        <div>
                                            <span>触发条件：吞吐率>= </span>
                                            <input/>rpm
                                        </div>
                                        <div>
                                            <span>持续时间：</span>
                                            <input/>分钟
                                        </div>
                                        <div>
                                            <span>告警阈值：</span>
                                            <input/>分钟
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            {
                                productType!='outService' && <tr>
                                    <td></td>
                                    <td>
                                        <div className='newCl_details'>
                                            <div>
                                                <span>错误率</span>
                                            </div>
                                            <div>
                                                <span>触发条件：吞吐率>= </span>
                                                <input/>rpm
                                            </div>
                                            <div>
                                                <span>持续时间：</span>
                                                <input/>分钟
                                            </div>
                                            <div>
                                                <span>告警阈值：</span>
                                                <input/>分钟
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            }{
                                productType!='outService' && <tr>
                                    <td></td>
                                    <td>
                                        <div className='newCl_details'>
                                            <div><span>Apdex</span></div>
                                            <div>
                                                <span>触发条件：吞吐率>= </span>
                                                <input/>rpm
                                            </div>
                                            <div>
                                                <span>持续时间：</span>
                                                <input/>分钟
                                            </div>
                                            <div>
                                                <span>告警阈值：</span>
                                                <input/>分钟
                                            </div>
                                        </div>
                                    </td>
                                </tr>   
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        newCl:state.vars.newCl,
        productType:state.vars.productType,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{

    	},
    	init:()=>{
    		
    	},
    	backCl:()=>{
    		dispatch(actions.setVars('newCl',false));      
    	},
        showOutService:()=>{
            dispatch(actions.setVars('productType','outService'));
        },
        showApp:()=>{
            dispatch(actions.setVars('productType','app'));
        },
        showTransaction:()=>{
            dispatch(actions.setVars('productType','transaction'));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCl);