/*
* @Author: Issac
* @Date:   2017-08-12 08:55:40
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-12 22:45:16
*/

'use strict';
import React from 'react';
import {Layout} from 'antd';
import {Link} from 'react-router-dom';
const { Content } = Layout;

export default class CommonContenter extends React.Component{
	render(){
		return(
              <Content class='content'>
                 <div class='name'>Issac</div>
                 <div class='important'><div class='project'><Link to={`/dist/view/demo`}>demo</Link></div>
                 <div class='summary'><Link to={`/dist/view/sum`}>Sum</Link></div></div>
              </Content>
			)
	}

}