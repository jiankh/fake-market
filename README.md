# Fake Market
![Website preview](/fake-market.png)

[Live Demo]( https://fake-market.vercel.app/)


Fake Market is a e-commerce page made using data from the [Fake Store API](https://fakestoreapi.com/). 


## Built with
- React.js
- Vite
- TailwindCSS


## Features

 - Working shopping cart. Allows user to add items into the cart, change the quantity of each item, and remove them from the cart.

- Small indicator next to the cart icon that keeps count of how many items are currently in the shopping cart.
- User is able to sort the items in the shop based on the category selected.

## Insights and Takeaways From the Project
The main purpose of the project was to create a working shopping cart.
- One of the main lesson learnt from this project was handling the react-router-dom for redirects. By creating a Router component in a separate file, organizing the routes was a breeze. The pattern used in this project was as followed:
```javascript
import { createBrowserRouter, RouterProvider } from  "react-router-dom";
import ErrorPage from  "./error-page";
import Root from  "./routes/Root";
import Products from  "./routes/Products";
import Details from  "./routes/Details";

const  Router  = () => {
	const router =  createBrowserRouter([
	{
	path: "/",
	element: <Root />,
	errorElement: <ErrorPage />,
	},
	{
	path: "/products",
	element: <Products />,
	errorElement: <ErrorPage />,
	},
	{
	path: "/products/:id",
	element: <Details />,
	errorElement: <ErrorPage />
	},
	]);
	return <RouterProvider  router={router} />;
};
export  default  Router;
```
Where the Router component was simply added to the main.jsx file:
```javascript
import React from  'react'
import ReactDOM from  'react-dom/client'
import  './index.css'
import Router from  './Router.jsx'
import { ShoppingCartProvider } from  './ShoppingCartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ShoppingCartProvider>
			<Router />
		</ShoppingCartProvider>
	</React.StrictMode>,
)
```
<hr>


 - Another important takeaway lesson was using the Context API. The Context was handle outside the main route file as well for better organization and less clutter.
The pattern used in this project:

 
```javascript 
import { createContext, useContext, useState, useEffect } from  "react";

const  ShoppingCartContext  =  createContext([])

export  function  useShoppingCart() {
	return  useContext(ShoppingCartContext)
}

export  function  ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] =  useState(() => {

	// Retrieve cart items from LocalStorage on component mount
	const  storedCart  =  localStorage.getItem("cart");
	return  storedCart  ?  JSON.parse(storedCart) : [];
	});

	// Update LocalStorage whenever cartItems change
	useEffect(() => {
	localStorage.setItem("cart", JSON.stringify(cartItems));
	}, [cartItems]);
    
    //{Other functions that we want to pass as props go here}
    
    return (
		<ShoppingCartContext.Provider  value={{cartItems, //Other functions here. }}>
			{children}
		</ShoppingCartContext.Provider>
)
```
The important pattern here is to include the {children} prop for the return component to be able to wrap other elements with the Context Provider.

In order to consume the Context, we will simple import the useShoppingCart() function and will not need to constantly have to import useContext and use it with the name of the Context as a parameter.
```javascript 
import {useShoppingCart} from './ShoppingCartContext'
const {cartItems} =  useShoppingCart()
```
<hr>

 - The last takeaway lesson for the project is the use of Fetch to fetch from the [Fake Store API](https://fakestoreapi.com/). Throughout the project I used this simple pattern of code and tweak it a little to fit the utility needed:
 ```javascript 
 function  itemList(category) {

	const [items, setItems] =  useState(null)
	const [error, setError] =  useState(null)
	const [loading, setLoading] =  useState(true)

	useEffect(() => {
		setLoading(true)
		let urlAttach =  category  ===  'all'  ?  ''  :  `category/${category}`;
		fetch(`https://fakestoreapi.com/products/${urlAttach}`, {mode: "cors"})
			.then((response) => {
				if (response.status  >=  400) {
					throw  new  Error("Server Error")
				}
				return  response.json()
			})
			.then((response) =>  setItems(response))
			.catch((error) =>  setError(error))
			.finally(() =>  setLoading(false))
		}, [category])

return { items, error, loading }
}
```

For this pattern we set three states to easily hold information. The state of error helps us keep track of errors and the loading state improves the use experience while the fetch function loads the items from the API.
 

