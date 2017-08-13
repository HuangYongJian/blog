/*
* @Author: Issac
* @Date:   2017-08-12 14:46:46
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-13 09:20:45
*/

'use strict';
require('./index.css');
import React           from 'react';
import { Layout }      from 'antd';
import ReactDOM        from 'react-dom';
import AboutHeader     from '../component/about_header';
const { Content } = Layout;

class About extends React.Component{
	  render(){
		return(
          <div class='root'>
             <Layout class='layout'>
                <AboutHeader/>
             </Layout>
          </div>
		  )	
	     } 
};

ReactDOM.render(
      <About/>,
      document.getElementById('container')
);


export default About;