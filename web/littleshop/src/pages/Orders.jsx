import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import RatingForm from "../components/RatingForm";
//const BACKEND_ORDER_URL = "http://localhost:5000/orderProducts";
const SYNC_BACKEND_ORDER_URL = "http://localhost:5000/syncOrder";
const Order = () => {
  //localStorage.removeItem("orderProduct")
  var orders = localStorage.getItem("orderProduct")
    ? JSON.parse(localStorage.getItem("orderProduct"))
    : [];
  const [popup, setShowPopUp] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [popupTitle, setPopupTitle] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [form, setShowForm] = useState(false);
  const navigate = useNavigate();
  var [billing, setBilling] = useState(0);

  const displayForm = (e) => {
    setShowForm(!e);
  };

  const popupHandler = (e) => {
    return new Promise((resolve) => {
      setShowPopUp(!e);
      setTimeout(() => {
        setShowPopUp(false);
        resolve();
      }, 2000);
    });
  };

  const ratingChanged = (newRating) => {
    setRatingValue(newRating);
    console.log(ratingValue)
  };

  useEffect(() => {
    console.log(orders);
    if (!orders || orders.length === 0) {
      axios
        .get(SYNC_BACKEND_ORDER_URL, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          orders = response.data.response;
          console.log(orders);
          if (orders.length === 0) {
            setPopupTitle("LittleShop Order management information");
            setPopupContent(
              `You haven't placed any order yet ${JSON.parse(localStorage["account"]).username
              } !`
            );
            popupHandler().then(() => {
              navigate("/products");
            });
          } else {
            localStorage.setItem("orderProduct", JSON.stringify(orders));
            //window.location.reload();
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 403) {
            localStorage.removeItem("token");
            setPopupTitle("LittleShop account management information");
            setPopupContent("You are currently not logged in !");
            popupHandler().then(() => {
              navigate("/login");
            });
          }
        });
    }
    for (let i = 0; i < orders.length; i++) {
      for (let j = 0; j < orders[i].cart.length; j++) {
        billing += orders[i].cart[j].unitPrice * orders[i].cart[j].quantity;
        console.log(billing)
      }
    }
    setBilling(billing);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="order-container">
        <div className="order-wrapper">
          <Popup trigger={popup} title={popupTitle} value={popupContent} />
          <table>
            <thead>
              <tr>
                <th>Delivery Address</th>
                <th>ProductName</th>
                <th>Quantity</th>
                <th>Value</th>
                <th>Expedition status</th>
                <th>Expedition date</th>
                <th>Order creation date</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) =>
                order.cart.map((cartProduct) => (
                  <tr className="order-raw" key={order.id}>
                    <RatingForm
                      productName={cartProduct.productName}
                      productId={cartProduct.id}
                      trigger={form}
                      rating={ratingValue}
                      updateDisplay={() => { setShowForm(false) }
                      }
                    ></RatingForm>
                    <td>
                      {`${order.address.address1} ${order.address.address2} ${order.address.address3} ${order.address.city} ${order.address.country} ${order.address.region} ${order.address.postalCode}`}
                    </td>
                    <td>{cartProduct.productName}</td>
                    <td>{cartProduct.quantity}</td>
                    <td>{cartProduct.unitPrice * cartProduct.quantity}</td>
                    <td>{cartProduct.shipped}</td>
                    <td>{cartProduct.shippingDate}</td>
                    <td>{cartProduct.created_at}</td>
                    <td>{cartProduct.shipped === "preparation" ?
                      <ReactStars
                        activeColor={'#FF7F7F'}
                        size={16}
                        onChange={(e) => {
                          ratingChanged(e);
                          displayForm();
                        }}
                      >
                      </ReactStars> : ""}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <h4>
          total billing:
          <b> {billing}€</b>
        </h4>
      </div>
    </div>
  );
};
export default Order;
