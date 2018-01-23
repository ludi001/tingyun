import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/functionalCom/header.css';
import TimeDrag from 'pages/functionalCom/timeDrag.js';
import { DatePicker, Select, Icon } from 'antd';
const { RangePicker } = DatePicker;
const Option = Select.Option;

class Header extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }
    onOk(value) {
        console.log('onOk: ', value);
    }
    render() {
    	let {handleChange,headerFlag,optionData,slide,slideFlag='left',showSlide,showSlideFlag=false}=this.props;
        return (
            <div>
                <div className='second_header'>
                    {
                        optionData=='more' && <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="PHP Aplication"
                            onChange={handleChange}
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="PHP Aplication">PHP Aplication</Option>
                            <Option value="Welcome to Tomcat">Welcome to Tomcat</Option>
                            <Option value="java_demo">java_demo</Option>
                            <Option value="fvt_php_49">fvt_php_49</Option>
                            <Option value="java_consumer">java_consumer</Option>
                        </Select>
                    }
                    {
                        optionData=='less' && <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Filter/encodingFilter"
                            onChange={handleChange}
                            optionFilterProp="children"
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                          >
                            <Option value="Filter/encodingFilter">Filter/encodingFilter</Option>
                            <Option value="URI/wordpress/index.php">URI/wordpress/index.php</Option>
                        </Select>
                    }
                	
                    { headerFlag && <span className='time' onClick={()=>showSlide(showSlideFlag)}>最近30分钟<span className='icon'><Icon type="caret-down" /></span></span>}
                    {
                        showSlideFlag && <div className='timeCom'>
                            <div className='title'>
                                <span>选择时间</span><span onClick={()=>showSlide(showSlideFlag)} className='close'></span>
                            </div>
                            <div className='slide'>
                                <span>指定时间</span>
                                <span className='big' onClick={()=>slide(slideFlag)}>
                                    <span className={slideFlag=='left' ? 'left':'right'}></span>
                                </span>
                                <span>最近</span>
                            </div>
                            {
                                slideFlag=='right' && 
                                <div style={{height:'350px'}}>
                                    <RangePicker
                                      showTime={{ format: 'HH:mm' }}
                                      format="YYYY-MM-DD HH:mm"
                                      placeholder={['开始时间', '结束时间']}
                                      onChange={this.onChange}
                                      onOk={this.onOk}>
                                    </RangePicker>
                                </div>
                            }                        
                            {
                                slideFlag=='left' && 
                                <div style={{height:'100px',paddingLeft:'30px',paddingTop:'25px'}}>
                                    <TimeDrag/>
                                </div>
                            }                       
                        </div>
                    }
            	</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        slideFlag:state.vars.slideFlag,
        showSlideFlag:state.vars.showSlideFlag
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{
    		
    	},
    	init:()=>{
    		
    	},
    	handleChange:(value)=>{
    		console.log(`${value}`);
    	},
        slide:(slideFlag)=>{
            if(slideFlag=='left'){
                dispatch(actions.setVars('slideFlag','right'))
            }else{
                dispatch(actions.setVars('slideFlag','left'))
            }
        },
        showSlide:(showSlideFlag)=>{
            dispatch(actions.setVars('showSlideFlag',!showSlideFlag))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
