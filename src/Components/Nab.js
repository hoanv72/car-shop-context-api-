import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {MyContext} from './MyProvider';
import Product from './Product';
import Cart from './Cart';


export class Nab extends Component {
	render() {
		return(
			<Router>
			<div className="nab"> 
			<nav className="navbar navbar-expand-lg navbar-light ml-4">
			  <a className="navbar-brand" href="#" style={{fontSize:"35px"}} >Car<span>Passion</span></a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			
			  <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">	
			    	<li className="nav-link active ml-3">Home</li>		    				  
			      <li className="nav-link active ml-3">  
			      	<NavLink exact to="/" activeStyle={{fontSize:"19px", color: "black", margin:"15px", fontFamily:"Roboto Condensed"}}> Product </NavLink>
			      </li>
			      <li className="nav-link active ml-3">  
			      	<MyContext.Consumer>
			      		{  (value) => {
			      			return <NavLink to="/cart" activeStyle={{fontSize:"19px", color: "black", margin:"15px", fontFamily:"Roboto Condensed"}}> Cart({value.Cart.length}) </NavLink>
			      		}}
			      	</MyContext.Consumer>

			        
			      </li>			      
			    </ul>

			    <form className="form-inline my-2 my-lg-0">
			      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
			    </form>

			  </div>
			</nav>

			<div className="container-fluid p-0">
			<div className="site-content">
				<div className="d-flex justify-content-center">
					<div className="d-flex flex-column">
						<h1 className="site-title">Car Passion</h1>
						<p className="site-desc">Make Your Dream Become True</p>
						<div className="d-flex flex-row">
							<input type="button" className="btn site-btn1 px-4 py-3 mr-4 btn-dark" value="Buy Car"/>
							<input type="button" value="Get Support" className="btn site-btn2 px-4 py-3 mr-4 btn-light"/>
						</div>
					</div>
				</div>
			</div>
		</div>

				<Switch>
					<Route  path="/" exact component={Product} /> 
					<Route path="/cart" component={Cart} />
				</Switch>

			</div>
			</Router>
			
		)
	}
}

export default Nab