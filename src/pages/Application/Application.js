import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import {Route, Switch, Link} from 'react-router-dom';
import Bundle from './../../router/Bundle';
import Loading from 'components/Loading/Loading';
import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';
import Bb from 'bundle-loader?lazy&name=bb!./Bb';
import Cwl from 'bundle-loader?lazy&name=cwl!./Cwl';
import Htrw from 'bundle-loader?lazy&name=htrw!./Htrw';
import MQ from 'bundle-loader?lazy&name=mq!./MQ';
import NoSQL from 'bundle-loader?lazy&name=nosql!./NoSQL';
import Qbhz from 'bundle-loader?lazy&name=qbhz!./Qbhz';
import Sjk from 'bundle-loader?lazy&name=sjk!./Sjk';
import Sw from 'bundle-loader?lazy&name=sw!./Sw';
import Wbyy from 'bundle-loader?lazy&name=wbyy!./Wbyy';
import Xcpx from 'bundle-loader?lazy&name=xcpx!./Xcpx';
import Yyhj from 'bundle-loader?lazy&name=yyhj!./Yyhj';
import Yytp from 'bundle-loader?lazy&name=yytp!./Yytp';
import 'pages/secondRouter.css';
import config from '../../components/Nav/config.js';

const createComponent = (modFn) => props => (
    <Bundle load={modFn}>
        {
            (WaitingComponent) => WaitingComponent ? <WaitingComponent {...props}/> : <Loading {...props}/>
        }
    </Bundle>
);

class Application extends Component {
    componentDidMount() {
        this.props.init();
    }
    componentWillMount() {
        this.props.willMount();
    }
    componentWillUpdate() {
        this.props.update();
    }
    render() {
        let {}=this.props;
        let arr=window.location.pathname.split('/');
        let param=arr[arr.length-1];
        return (
            <div className='bodyBox'>
                <div className='secondTree' id='secondTree'>
                    <ul className='leftTree' id='applicationTree'>
                    {
                        config.page[2].sonPage.map((value)=>{
                            return(
                                <li className={value.id==param ? 'active':''} key={value.id}><Link to={value.url}>{value.name}</Link></li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div id='secondContent'>
                    <Switch>
                        <Route path="/server/application/bb" component={createComponent(Bb)}/>
                        <Route path="/server/application/cwl" component={createComponent(Cwl)}/>
                        <Route path="/server/application/htrw" component={createComponent(Htrw)}/>
                        <Route path="/server/application/mq" component={createComponent(MQ)}/>
                        <Route path="/server/application/nosql" component={createComponent(NoSQL)}/>
                        <Route path="/server/application/qbhz" component={createComponent(Qbhz)}/>
                        <Route path="/server/application/sjk" component={createComponent(Sjk)}/>
                        <Route path="/server/application/sw" component={createComponent(Sw)}/>
                        <Route path="/server/application/wbyy" component={createComponent(Wbyy)}/>
                        <Route path="/server/application/xcpx" component={createComponent(Xcpx)}/>
                        <Route path="/server/application/yyhj" component={createComponent(Yyhj)}/>
                        <Route path="/server/application/yytp" component={createComponent(Yytp)}/>                        
                        <Route component={createComponent(NotFound)}/>
                    </Switch>
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
        init:()=>{
            
        },
        update:()=>{
            
        },
        willMount:()=>{
            
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);