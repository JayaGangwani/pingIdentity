import React, { Fragment } from "react";
import "./styles.css";
import TextField from "@material-ui/core/TextField";
import { Select } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

export const App = () => {
  return (
    <Fragment>
      <div className="App">
        <div style={{ width: "55%" }}>
          <div className="back-section">
            <div className="back-img"/>
            <div>
              <a href="#">Continue Shopping</a>
            </div>
          </div>
          <div className="cart">
            <h3 className="title">My Cart</h3>
          </div>
          <div className="flex">
            <div className="cart-list">
              <div className="food">
                <img src="https://spoonacular.com/recipeImages/716426-312x231.jpg" />
                <div className="food-name">
                  Cauliflower, Brown Rice, and Vegetable Fried Rice
                </div>
                <div className="counter">
                  <button className="counter-button" onClick={() => {}}>
                    -
                  </button>
                  <TextField
                    className="count"
                    variant="outlined"
                    margin="none"
                    value="1"
                    disabled
                    length="5"
                  />
                  <button className="counter-button">+</button>
                </div>
                <div className="price">$6.99</div>
                <button className="close-btn">
                  <img alt="Remove Item" title="Remove Item"
                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfv1dF8vhJLOdEEFi0ucw_QBtpPDzoVH4WQ&usqp=CAU" />
                </button>
              </div>
              <hr />
              <div className="food">
                <img src="https://spoonacular.com/recipeImages/715594-312x231.jpg" />
                <div className="food-name">
                  Homemade Garlic and Basil French Fries
                </div>
                <div className="counter">
                  <button className="counter-button">-</button>
                  <TextField
                    className="count"
                    variant="outlined"
                    margin="none"
                    value="1"
                    disabled
                    length="5"
                  />
                  <button className="counter-button">+</button>
                </div>
                <div className="price">$7.30</div>
                <button className="close-btn">
                  <img alt="close-btn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfv1dF8vhJLOdEEFi0ucw_QBtpPDzoVH4WQ&usqp=CAU" />
                </button>
              </div>
              <hr />
              <div className="food">
                <img src="https://spoonacular.com/recipeImages/715497-312x231.jpg" />
                <div className="food-name">Berry Banana Breakfast Smoothie</div>
                <div className="counter">
                  <button className="counter-button">-</button>
                  <TextField
                    className="count"
                    variant="outlined"
                    margin="none"
                    value="1"
                    disabled
                    length="5"
                  />
                  <button className="counter-button">+</button>
                </div>
                <div className="price">$7.67</div>
                <button className="close-btn">
                  <img alt="close-btn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfv1dF8vhJLOdEEFi0ucw_QBtpPDzoVH4WQ&usqp=CAU" />
                </button>
              </div>
              <hr />
              <div className="subtotal">
                <h4>Subtotal:</h4>
                <h2>$21.96</h2>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#303f5f",
            borderRadius: "10px",
            height: "630px",
            marginLeft: "40px",
            padding: "20px",
            width: "25%"
          }}
          className="details"
        >
          <h3 >
            Credit Card Details
          </h3>
          <p>Card Type</p>
          <Select style={{ width: "167px" }}>
            <MenuItem key="visa" value="visa">
              Visa
            </MenuItem>
          </Select>
          <p>Cardholder's Name</p>
          <TextField style={{ width: "200px" }} />
          <p>Card Number</p>
          <TextField defaultValue="**** **** **** ****" />
          <div className="flex">
            <div style={{ marginRight: "40px" }}>
              <p>Expiration Date</p>
              <Select
                style={{ width: "75px", marginRight: "20px" }}
                defaultValue="none"
              >
                <MenuItem value="none" disabled>
                  mm
                </MenuItem>
                <MenuItem key="mm" value="01">
                  01
                </MenuItem>
              </Select>
              <Select style={{ width: "100px" }} defaultValue="none">
                <MenuItem value="none" disabled>
                  yyyy
                </MenuItem>
                <MenuItem key="yyyy" value="2021">
                  2021
                </MenuItem>
              </Select>
            </div>
            <div style={{ width: "75px" }}>
              <p>CVV</p>
              <TextField />
            </div>
          </div>
          <div className="checkout">
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
