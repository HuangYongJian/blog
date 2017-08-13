/*
* @Author: Issac
* @Date:   2017-08-12 14:46:09
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-12 22:44:10
*/

'use strict';
import React           from 'react';
import { Layout }      from 'antd';
import ReactDOM        from 'react-dom';
const { Content } = Layout;

class Demo extends React.Component{
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
      <Demo/>,
      document.getElementById('container')
);


export default Demo;