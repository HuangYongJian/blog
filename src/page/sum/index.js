/*
* @Author: Issac
* @Date:   2017-08-12 14:46:25
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-12 22:48:13
*/

'use strict';
import React           from 'react';
import { Layout }      from 'antd';
import ReactDOM        from 'react-dom';
const { Content } = Layout;

class Sum extends React.Component{
	  render(){
		return(
          <div class='root'>
             <Layout class='layout'>
                <Content><h1>About</h1></Content>
             </Layout>
          </div>
		  )	
	     } 
};

ReactDOM.render(
      <Sum/>,
      document.getElementById('container')
);


export default Sum;