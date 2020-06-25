import React, { Component } from 'react';
import {MyContext} from './MyProvider';
export class Cart extends Component {
	render() {
		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col-10 col-lg-2"> <strong> Giỏ Hàng </strong> </div>
				</div>
				<div className="container-fluid text-center"> 
				<div className="row">
				 <table className="table mt-3" > 
				<MyContext.Consumer>
					{ (value) => {
						return value.Cart.map( car => {
							return 	<tr className="cart-item">
										<td key={car.id} className="cart-item-img" >
											<img src={car.img}  />
										</td>
										<td className="cart-item-title">
											<p>{car.brand} {car.title} </p>
										</td>
										<td>
											<button type="button" className="btn btn-danger">Delete</button>
										</td>
									</tr>
						})
					}}
				</MyContext.Consumer>
				</table>
				</div>
				</div>
			</div>
		)
	}
}
export default Cart