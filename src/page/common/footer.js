/*
* @Author: Issac
* @Date:   2017-08-12 08:52:49
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-12 09:13:42
*/

'use strict';
import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class CommonFooter extends React.Component{
	render(){
		return(
              <Footer class='footer'>
                 <span>&copy;&nbsp;2017 ReactNews. All Rights Reserved.</span>
              </Footer>
			)
	}

}