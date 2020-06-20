import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './Components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MyContext, MyProvider} from './Components/MyProvider';


ReactDOM.render(
	<MyProvider>
		<MyContext.Consumer>
  			{ ({dataProduct, productDetail, Cart, handleDetails, addToCart}) => 
  				<App 
  				dataProduct={dataProduct} 
  				productDetail={productDetail} 
  				Cart={Cart} 
  				handleDetails={handleDetails} 
  				addToCart={addToCart} />
  			}
  		</MyContext.Consumer>
  	</MyProvider>,
  document.getElementById('root')
);

