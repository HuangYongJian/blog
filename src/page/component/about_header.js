/*
* @Author: Issac
* @Date:   2017-08-13 08:28:28
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-13 08:57:44
*/

'use strict';
import React from 'react';
import { Layout } from 'antd'; 
const text = <span>关于我</span>;
const { Header } = Layout;

export default class AboutHeader extends React.Component{
	render(){
		return(
              <Header class='about_header'>
                   <a class='glyphicon glyphicon-triangle-left' href='/dist/view/index'>
                   </a>
                   <h1>About</h1>
              </Header>
			)
	}

}