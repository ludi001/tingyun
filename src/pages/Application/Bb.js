//报表
import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from 'actions';
import 'pages/Application/bb.css';
import Header from 'pages/functionalCom/Header.js';

class Bb extends Component{  
	componentWillMount() {
        this.props.willMount();
    }
    componentDidMount() {
        this.props.init();
    }
    
    render() {
    	let {bb_tab_flag='swbb',bb_body1,bb_body2,bb_body3,bb_body4}=this.props;
        return (
            <div className='bb' id='bb'>
                <Header headerFlag={false} optionData={'more'} />
                <div className='bb_tab'>
                	<span className={bb_tab_flag=='swbb'? 'active':''} onClick={()=>bb_body1()}>事务报表</span>
                	<span className={bb_tab_flag=='gjswbb'? 'active':''} onClick={()=>bb_body2()}>关键事务报表</span>
                	<span className={bb_tab_flag=='sjkbb'? 'active':''} onClick={()=>bb_body3()}>数据库报表</span>
                	<span className={bb_tab_flag=='nosql'? 'active':''} onClick={()=>bb_body4()}>NoSQL报表</span>
                </div>
                <div className='bb_body'>
                {
                	bb_tab_flag && bb_tab_flag=='swbb' &&
                	<div className='bb_body1'>
                    	<div className='bb_body1_header'>
                    		<span>实例名称:</span>
                    		<select>
                    			<option>所有实例</option>
                    			<option>ucd-ty-app-demo-1:18080</option>
                    			<option>dell-goruntime:8080</option>
                    			<option>10.10.46.144:8080</option>
                    		</select>
                    		<span>时间: </span>
                    		<span><input type='checkbox' />今天</span>
                    		<span><input type='checkbox' />昨天</span>
                    		<span><input type='checkbox' />7日内</span>
                    		<span><input type='checkbox' />7日前</span>
                    		<span></span>
                    	</div>
                    	<div style={{height:'50px'}}></div>
                    	<table style={{width:'100%'}}>
                    		<thead>
                    			<tr>
                    				<th>事务</th>
                    				<th>时间</th>
                    				<th>平均响应时间</th>
                    				<th>最长响应时间</th>
                    				<th>吞吐率</th>
                    				<th>错误率</th>
                    				<th>不满意次数</th>
                    				<th>Apdex</th>
                    			</tr>
                    		</thead>
                    		<tbody>
                    			<tr>
                    				<td rowSpan="4">JSP/index.jsp</td>
                    				<td>今日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>昨日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日内</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日前</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    		</tbody>
                    	</table>
                    </div>
                }
                {
                	bb_tab_flag && bb_tab_flag=='gjswbb' &&
                	<div className='bb_body2'>
                		<div className='bb_body1_header'>
                    		<span>时间: </span>
                    		<span><input type='checkbox' />今天</span>
                    		<span><input type='checkbox' />昨天</span>
                    		<span><input type='checkbox' />7日内</span>
                    		<span><input type='checkbox' />7日前</span>
                    		<span></span>
                    	</div>
                    	<div style={{height:'50px'}}></div>
                    	<table style={{width:'100%'}}>
                    		<thead>
                    			<tr>
                    				<th>关键事务</th>
                    				<th>时间</th>
                    				<th>平均响应时间</th>
                    				<th>最长响应时间</th>
                    				<th>吞吐率</th>
                    				<th>错误率</th>
                    				<th>不满意次数</th>
                    				<th>Apdex</th>
                    			</tr>
                    		</thead>
                    		<tbody>
                    			<tr>
                    				<td rowSpan="4">JSP/index.jsp</td>
                    				<td>今日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>昨日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日内</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日前</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    		</tbody>
                    	</table>
                	</div>
                }
                {
                	bb_tab_flag && bb_tab_flag=='sjkbb' &&
                	<div className='bb_body3'>
                		<div className='bb_body1_header'>
                    		<span>实例名称:</span>
                    		<select>
                    			<option>所有实例</option>
                    			<option>ucd-ty-app-demo-1:18080</option>
                    			<option>dell-goruntime:8080</option>
                    			<option>10.10.46.144:8080</option>
                    		</select>
                    		<span>时间: </span>
                    		<span><input type='checkbox' />今天</span>
                    		<span><input type='checkbox' />昨天</span>
                    		<span><input type='checkbox' />7日内</span>
                    		<span><input type='checkbox' />7日前</span>
                    		<span></span>
                    	</div>
                    	<div style={{height:'50px'}}></div>
                    	<table style={{width:'100%'}}>
                    		<thead>
                    			<tr>
                    				<th>数据库</th>
                    				<th>时间</th>
                    				<th>平均响应时间</th>
                    				<th>最长响应时间</th>
                    				<th>吞吐率</th>
                    			</tr>
                    		</thead>
                    		<tbody>
                    			<tr>
                    				<td rowSpan="4">JSP/index.jsp</td>
                    				<td>今日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>昨日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日内</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日前</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    		</tbody>
                    	</table>
                	</div>
                }
                {
                	bb_tab_flag && bb_tab_flag=='nosql' &&
                	<div className='bb_body4'>
                		<div className='bb_body1_header'>
                    		<span>实例名称:</span>
                    		<select>
                    			<option>所有实例</option>
                    			<option>ucd-ty-app-demo-1:18080</option>
                    			<option>dell-goruntime:8080</option>
                    			<option>10.10.46.144:8080</option>
                    		</select>
                    		<span>时间: </span>
                    		<span><input type='checkbox' />今天</span>
                    		<span><input type='checkbox' />昨天</span>
                    		<span><input type='checkbox' />7日内</span>
                    		<span><input type='checkbox' />7日前</span>
                    		<span></span>
                    	</div>
                    	<div style={{height:'50px'}}></div>
                    	<table style={{width:'100%'}}>
                    		<thead>
                    			<tr>
                    				<th>Memcached</th>
                    				<th>时间</th>
                    				<th>平均响应时间</th>
                    				<th>最长响应时间</th>
                    				<th>吞吐率</th>
                    			</tr>
                    		</thead>
                    		<tbody>
                    			<tr>
                    				<td rowSpan="4">JSP/index.jsp</td>
                    				<td>今日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>昨日</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日内</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
                    			<tr>
                    				<td>7日前</td>
                    				<td></td>
                    				<td></td>
                    				<td></td>
                    			</tr>
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
        bb_tab_flag:state.vars.bb_tab_flag,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    	willMount:()=>{

    	},
    	init:()=>{
    		let height=$('#bb').css('height');
            $('#secondTree').css('height',height);
    	},
    	bb_body1:()=>{
    		dispatch(actions.setVars('bb_tab_flag','swbb'))
    	},
    	bb_body2:()=>{
    		dispatch(actions.setVars('bb_tab_flag','gjswbb'))
    	},
    	bb_body3:()=>{
    		dispatch(actions.setVars('bb_tab_flag','sjkbb'))
    	},
    	bb_body4:()=>{
    		dispatch(actions.setVars('bb_tab_flag','nosql'))
    	}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bb);