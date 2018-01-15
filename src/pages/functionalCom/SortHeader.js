import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'pages/functionalCom/sortHeader.css';

class SortHeader extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {tabData}=this.props;
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
	                                    <li key={value}>{value}</li>
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
        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{
    		
    	},
    	init:()=>{
    		
    	}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortHeader);