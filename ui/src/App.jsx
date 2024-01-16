import React, { Fragment, useEffect, useState } from "react";
import "./styles.css";
import TextField from "@material-ui/core/TextField";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { getCartData } from "./Service";
import jsonData from "./mocks/Cart.json";

export const App = () => {
  const [cartData, setCartData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const currentYear = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, index) => String(index + 1).padStart(2, '0'));
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
  const CardTypeOptions = ["Visa", "Mastercard", "Rupay"];

  const getFormattedLastThreeDigit = (cartItem) => {
    const id = cartItem.id;
    const lastThreeDigits = (id % 1000) / 100;
    return `$${lastThreeDigits.toFixed(2)}`
  }

  const formatCartDataResponse = (cartData) => {
    const updatedCartData = cartData?.length && cartData?.slice(0, 7).map(cartItem => ({
      ...cartItem,
      price: getFormattedLastThreeDigit(cartItem),
      quantity: 1,
      initialPrice: getFormattedLastThreeDigit(cartItem)
    }));
    return updatedCartData;
  }

  const fetchCartDetails = async () => {
    setIsLoading(true)
    try {
      const cartDetails = await getCartData();
      setCartData(formatCartDataResponse(cartDetails))
    }
    catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }


  const calculateTotalPrice = () => {
    let totalAmount = cartData && cartData.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);

    const formattedTotal = `$${totalAmount?.toFixed(2)}`;
    return formattedTotal;
  };

  const incrementQuantity = (index) => {
    const updatedItems = [...cartData];
    updatedItems[index].quantity += 1;
    updatedItems[index].price = `$${(updatedItems[index].quantity * updatedItems[index].initialPrice.substring(1)).toFixed(2)}`;
    setCartData(updatedItems);
  };

  const decrementQuantity = (index) => {
    const updatedItems = [...cartData];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      updatedItems[index].price = `$${(updatedItems[index].quantity * updatedItems[index].initialPrice.substring(1)).toFixed(2)}`;
    }
    setCartData(updatedItems);
  };

  const removeItem = (index) => {
    const updatedItems = [...cartData];
    updatedItems.splice(index, 1);
    setCartData(updatedItems);
  };

  useEffect(() => {
    fetchCartDetails()
  }, [])

  return (
    <Fragment>
      {isLoading ?
        <div>...isLoading</div>
        :
        <div className="App">
          <div className="container-width" >
            <div className="back-section">
              <div className="back-img" />
              <div>
                <a href="#">Continue Shopping</a>
              </div>
            </div>
            <div className="cart">
              <h3 className="title">My Cart</h3>
            </div>
            <div className="flex">
              <div className="cart-list">
                {Array.isArray(cartData) && cartData.length > 0 && cartData.map((data, index) =>
                  <>
                    <div className="food">
                      <img src={data.image} />
                      <div className="food-name">
                        {data.title}
                      </div>
                      <div className="counter">
                        <button className="counter-button" onClick={() => decrementQuantity(index)}>
                          -
                        </button>
                        <TextField
                          className="count"
                          variant="outlined"
                          margin="none"
                          value={data.quantity}
                          disabled
                          length="5"
                        />
                        <button className="counter-button" onClick={() => incrementQuantity(index)}>+</button>
                      </div>
                      <div className="price">{data?.price}</div>
                      <button onClick={() => removeItem(index)} className="close-btn">
                        <img alt="Remove Item" title="Remove Item"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfv1dF8vhJLOdEEFi0ucw_QBtpPDzoVH4WQ&usqp=CAU" />
                      </button>
                    </div>
                    <hr />
                  </>
                )}
                <div className="subtotal">
                  <h4>Subtotal:</h4>
                  <h2>{calculateTotalPrice()}</h2>
                </div>
              </div>
            </div>
          </div>
          <div
            className="details"
          >
            <h3 >
              Credit Card Details
            </h3>
            <p>Card Type</p>
            <Select
              value={selectedOption}
              onChange={(event) => setSelectedOption(event.target.value)}
              style={{ width: "167px" }}>
              {CardTypeOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <p>Cardholder's Name</p>
            <TextField className="cardnumber-width" />
            <p>Card Number</p>
            <TextField defaultValue="**** **** **** ****" />
            <div className="flex">
              <div className="expiration-width">
                <p>Expiration Date</p>
                <Select
                  className="expirationmonth-width"
                  value={expirationMonth}
                  onChange={(event) => setExpirationMonth(event.target.value)}
                  label="Expiration Month"
                  displayEmpty
                >
                  <MenuItem disabled value="">
                    <em>mm</em>
                  </MenuItem>
                  {months.map((month) => (
                    <MenuItem key={month} value={month}>{month}</MenuItem>
                  ))}
                </Select>
                <Select
                  value={expirationYear}
                  onChange={(event) => setExpirationYear(event.target.value)}
                  label="Expiration Year"
                  displayEmpty
                >
                  <MenuItem disabled value="">
                    <em>yyyy</em>
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>{year}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className="cvv-width" >
                <p>CVV</p>
                <TextField />
              </div>
            </div>
            <div className="checkout">
              <button>Check Out</button>
            </div>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default App;
