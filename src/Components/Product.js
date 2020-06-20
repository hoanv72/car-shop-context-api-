import React, { Component } from 'react';
import Item from './Item';
import {MyContext} from './MyProvider';

export class Product extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row" >
				<MyContext.Consumer>
					{ (value) => { 
						 return value.dataProduct.map( product => {
						 	return 	<div className="col-3">
						 		  		<Item key={product.id} product={product} />
						 			</div>
						 		
						 })
					}}
				</MyContext.Consumer>
				
			</div>
			</div>
		);
	}
}

export default Product