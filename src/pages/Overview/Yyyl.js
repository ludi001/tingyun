//应用一览
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Overview/yyyl.css';
import data from './data.js';//假数据
 
class Yyyl extends Component{
    render() {
        let {allTabYyyl,alarmTabYyyl,seriousTabYyyl,alarmFlagYyyl='allTab'}=this.props;
        return (
            <div className='content'>
            	<div className='header'>
            		<span className='headerLeft'>应用列表</span>
            		<div className='headerRight'>
            			<span className='oneSection'>分组筛选: </span>
            			<span className='twoSection'>全部</span>
            			<input className='threeSection' />
            			<span className='fourSection'>最近30分钟</span>
            		</div>
				</div>
				<table cellSpacing="0" cellPadding='0' width='100%'>
					<thead>
						<tr>
							<th width='55%'></th>
							<th>响应时间(ms)</th>
							<th>Apdex</th>
							<th>错误率(%)</th>
							<th>吞吐率(rpm)</th>
						</tr>
					</thead>
                    <tbody>
                        {
                            data.data.yyyl.map((value)=>{
                                return(
                                    <tr key={value.name}>
                                        <td width='55%'><div>{value.name}</div></td>
                                        <td><div>{value.time}</div></td>
                                        <td><div>{value.Apdex}</div></td>
                                        <td><div>{value.erro}</div></td>
                                        <td><div>{value.throughput}</div></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr> 
                            <td width='55%'></td>
                            <td></td>
                            <td></td>
                            <td>注：将24小时内无数据的应用隐藏。</td>
                            <td>隐藏</td>
                        </tr>
                    </tfoot>
				</table>
                <div className='browse'>
                    <div className='title'>最近事件一览(最近2周)</div>
                    <ul>
                        <li><a className={alarmFlagYyyl=='allTab' ? 'active':''} id='allTab' onClick={()=>allTabYyyl()}>所有(0)</a></li>
                        <li><a className={alarmFlagYyyl=='alarmTab' ? 'active':''} id='alarmTab' onClick={()=>alarmTabYyyl()}>警告(0)</a></li>
                        <li><a className={alarmFlagYyyl=='seriousTab' ? 'active':''} id='seriousTab' onClick={()=>seriousTabYyyl()}>严重问题(0)</a></li>
                    </ul> 
                    <div className='alarm'>
                        {
                            alarmFlagYyyl=='allTab' && <div className='alarmContent'>暂无事件</div>
                        }
                        {
                            alarmFlagYyyl=='alarmTab' && <div className='alarmContent'>暂无警告(0)事件</div>
                        }
                        {
                            alarmFlagYyyl=='seriousTab' && <div className='alarmContent'>暂无严重问题(0)事件</div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        alarmFlagYyyl : state.vars.alarmFlagYyyl
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        seriousTabYyyl:()=>{            
            dispatch(actions.setVars('alarmFlagYyyl','seriousTab'))
        },
        alarmTabYyyl:()=>{            
            dispatch(actions.setVars('alarmFlagYyyl','alarmTab'))
        },
        allTabYyyl:()=>{            
            dispatch(actions.setVars('alarmFlagYyyl','allTab'))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Yyyl);