import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import {Link} from 'react-router-dom';
import './Nav.css';
import NewPanel from 'pages/Overview/NewPanel';
import AlertBox from 'pages/functionalCom/alertbox.js';
import AddInstrument from 'pages/functionalCom/addInstrument.js';
import config from './config.js';
 
class Nav extends Component{
    componentWillMount() {
        this.props.willMount();
    }
    componentWillUpdate() {
        this.props.update();
    }
    active(key) {
        $('#firstTree').find('li').eq(key).find('a').css('color','#3598db');
        $('#firstTree').find('li').eq(key).siblings().find('a').css('color','#666666');
    }
    render() {
        let {alertFlag=false,addInstrument=false}=this.props;
        return (
            <div className='bodyHeader'>
                <NewPanel></NewPanel>
                {alertFlag && <AlertBox />}
                {addInstrument && <AddInstrument />}
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
        addInstrument:state.vars.addInstrument
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        update:()=>{
            
        },
        willMount:()=>{
            
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);