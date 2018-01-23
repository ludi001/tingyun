import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import {Link} from 'react-router-dom';
import './Nav.css';
import NewPanel from 'pages/Overview/NewPanel';
import AlertBox from 'pages/functionalCom/alertbox.js';
import AddInstrument from 'pages/functionalCom/addInstrument.js';
import Confirm from 'pages/functionalCom/confirm.js';
import config from './config.js';
 
class Nav extends Component{
    componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    active(key) {
        $('#firstTree').find('li').eq(key).find('a').css('color','#3598db');
        $('#firstTree').find('li').eq(key).siblings().find('a').css('color','#666666');
    }
    render() {
        let {alertFlag=false,addInstrument=false,confirm=false}=this.props;
        return (
            <div className='bodyHeader'>
                <NewPanel></NewPanel>
                {alertFlag && <AlertBox />}
                {addInstrument && <AddInstrument />}
                {confirm && <Confirm/>}
                <div className='bg'>Logo</div>
                <ul className='firstTree' id='firstTree'>
                {
                    config.page.map((value)=>{
                        return(
                            <li key={value.id} onClick={()=>this.active(value.id)}><Link to={value.url}>{value.name}</Link></li>
                        )
                    })
                }
                </ul>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addInstrument:state.vars.addInstrument,
        confirm:state.vars.confirm,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init:()=>{
            
        },
        willMount:()=>{
            
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);