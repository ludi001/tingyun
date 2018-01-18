//应用拓扑
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/yytp.css';
import Header from 'pages/functionalCom/Header.js';
import data from './data.js';

class Yytp extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {yytp_page='image',yytp_showImg,yytp_showTab}=this.props;
        return (
            <div className='yytp'>
                <Header headerFlag={true} optionData={'more'}/>
                <div className='yytp_body'>
                    <div className='yytp_body_tab'>
                        <div className={yytp_page=='image' ? 'active':''} onClick={()=>yytp_showImg()}>拓扑图</div>
                        <div className={yytp_page=='table' ? 'active':''} onClick={()=>yytp_showTab()}>拓扑表格</div>
                    </div>
                    {
                        yytp_page=='image' &&  
                        <div className='image_box'>

                        </div>
                    }
                    {
                        yytp_page=='table' && 
                        <div className='table_box'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>调用者</th>
                                        <th>被调用者</th>
                                        <th>调用者类型</th>
                                        <th>被调用者类型</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.yytp && data.data.yytp.map((value)=>{
                                            return(
                                                <tr key={value.caller}>
                                                    <td>{value.caller}</td>
                                                    <td>{value.callee}</td>
                                                    <td>{value.protocol}</td>
                                                    <td>{value.time}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div> 
                    }
                    
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        yytp_page:state.vars.yytp_page,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{
    		console.log('willMount')
    	},
    	init:()=>{
    		console.log('init')
    	},
        yytp_showTab:()=>{
            dispatch(actions.setVars('yytp_page','table'))
        },
        yytp_showImg:()=>{
            dispatch(actions.setVars('yytp_page','image'))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Yytp);