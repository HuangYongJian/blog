/*
* @Author: Issac
* @Date:   2017-08-11 10:50:44
* @Last Modified by:   Issac
* @Last Modified time: 2017-08-13 09:22:42
*/

'use strict';
require('./index.css');
import React                         from 'react';
import ReactDOM                      from 'react-dom';
import Master                        from '../component/master';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import About                         from '../about/index';
import Demo                          from '../demo/index';
import Sum                           from '../sum/index';

function Index(){
	return (
       <div class='mata'>
           <BrowserRouter>
             <Switch>
                <Route path="/dist/view/index" component={Master}></Route>
                <Route path="/dist/view/about" component={About}></Route>
                <Route path="/dist/view/demo" component={Demo}></Route>
                <Route path="/dist/view/sum" component={Sum}></Route>
             </Switch>
           </BrowserRouter>
       </div>
		)
};

ReactDOM.render(
     <Index/>,
     document.getElementById('container')
);
