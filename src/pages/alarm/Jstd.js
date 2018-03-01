//接收通道
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import NewJs from './newJs.js';
import { Icon } from 'antd';
import './jstd.css';

class Jstd extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {newJs=false,showNewjs,show_edit,edit=false}=this.props;
        return (
            <div className='content'>
                <div className='jstd_title'>
                    <div className='jstd_title_left'>警报接收人<input type='text' /></div>
                    <div className='jstd_title_right' onClick={()=>showNewjs()}><Icon type="plus" />新建警报接收人</div>
                </div>
                <table className='jstd_table'>
                    <thead>
                        <tr>
                            <th>接收人姓名</th>
                            <th>系统账号</th>
                            <th>邮箱地址</th>
                            <th>手机号码</th>
                            <th>微信绑定</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>adi</td>
                            <td>safas</td>
                            <td>safas@163.com</td>
                            <td>183****7554</td>
                            <td>asds</td>
                            <td className='jstd_operation'><Icon title='编辑' type="form" onClick={()=>show_edit()} /><Icon title='删除' type="delete" /></td>
                        </tr>
                    </tbody>
                </table>
                {newJs && <NewJs/>}
                {
                    edit &&<div className='jstd_edit_box'>
                        <div className='edit_info'>
                            <div className='edit_title'><Icon type="close-circle" /></div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>接收人姓名</td>
                                        <td><input/></td>
                                    </tr>
                                    <tr>
                                        <td>系统账号</td>
                                        <td><input/></td>
                                    </tr>
                                    <tr>
                                        <td>邮箱地址</td>
                                        <td><input/></td>
                                    </tr>
                                    <tr>
                                        <td>手机号码</td>
                                        <td><input/></td>
                                    </tr>
                                    <tr>
                                        <td>微信绑定</td>
                                        <td><input/></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                <span>确定</span><span>取消</span>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        newJs:state.vars.newJs,
        edit:state.vars.edit,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{

    	},
    	init:()=>{
    		
    	},
        showNewjs:()=>{
            dispatch(actions.setVars('newJs',true));      
        },
        show_edit:()=>{
            dispatch(actions.setVars('edit',true));    
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Jstd);