/*
* @Author: Issac
* @Date:   2017-08-11 15:22:32
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-12 22:26:21
*/

'use strict';
import React           from 'react';
import { Layout }      from 'antd';
import CommonHeader    from '../common/header';
import CommonFooter    from '../common/footer';
import CommonContenter       from '../common/contenter';

export default class Master extends React.Component{
	render(){
		return(
          <div class='root'>
             <Layout class='layout'>
                <CommonHeader/>
                <CommonContenter/>
                <CommonFooter/>
             </Layout>
          </div>
			)
	}

}