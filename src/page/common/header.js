/*
* @Author: Issac
* @Date:   2017-08-12 08:48:05
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-12 21:07:42
*/

'use strict';
import React from 'react';
import { Layout } from 'antd';
import {Link} from 'react-router-dom';
const text = <span>关于我</span>;
const { Header } = Layout;

export default class CommonHeader extends React.Component{
	render(){
		return(
              <Header class='header'>
                <div class='about'>
                  <span>About Me =>
                    <Link class='glyphicon glyphicon-align-justify' to={`/dist/view/about`}>
                    </Link>
                  </span>
                </div>
              </Header>
			)
	}

}