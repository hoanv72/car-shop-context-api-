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
			<nav className="navbar navbar-expand-lg navbar-danger bg-warning">
			  <a className="navbar-brand" href="#">Showroom</a>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			
			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">			    				  
			      <li className="nav-item active ml-3">  
			      	<NavLink exact to="/" activeStyle={{fontWeight: "bold",color: "white"}} > Xe </NavLink>
			      </li>
			      <li className="nav-item active ml-3">  
			      	<MyContext.Consumer>
			      		{  (value) => {
			      			return <NavLink to="/cart"   activeStyle={{fontWeight: "bold",color: "white"}} > Giỏ Hàng({value.Cart.length}) </NavLink>
			      		}}
			      	</MyContext.Consumer>

			        
			      </li>			      
			    </ul>

			    <form className="form-inline my-2 my-lg-0">
			      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
			    </form>

			  </div>
			</nav>

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