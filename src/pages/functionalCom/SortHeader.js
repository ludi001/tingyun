import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/functionalCom/sortHeader.css';

class SortHeader extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        let {tabData}=this.props;
        this.props.init(tabData);
    }
    
    render() {
    	let {tabData,sort,active}=this.props;
        return (
        	<div className='sortHeader'>
                <span className='sortHeader_title'>排序:</span>
                    <ul>
                        {
                            tabData && tabData.map((value)=>{
                                if(value=='top'){
                                	return(
	                                    <span key={value} style={{marginLeft:'100px',float:'left',width:'200px',height:'24px',lineHeight:'24px'}}><input type='checkbox' />显示Top20</span>
	                                )
                                }else{
                                	return(
	                                    <li className={active==value ? 'active':''} onClick={()=>sort(value)} key={value}>{value}</li>
	                                )
                                }                                    
                            })
                        }
                    </ul>
            </div>
       	)
    }
}


const mapStateToProps = (state) => {
    return {
        active:state.vars.active
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{
    		
    	},
    	init:(tabData)=>{
    		dispatch(actions.setVars('active',tabData[0]))
    	},
        sort:(value)=>{
            dispatch(actions.setVars('active',value))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortHeader);