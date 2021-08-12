import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import './menupage.css';
import axios from 'axios';
export default function MenuPage() {
  const { restId } = useParams();
  const [menuData, setMenuData] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');

  useEffect(() => {
    var options = {
      method: 'GET',
      url: `https://documenu.p.rapidapi.com/restaurant/${restId}/menuitems`,

      headers: {
        'x-api-key': 'ecedf70ea41f9326798d5c634e950b79',
        'x-rapidapi-key': '89ad10091emshf5f1d5219661964p1bf1dfjsn0ac0497b27b2',
        'x-rapidapi-host': 'documenu.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function(response) {
  
        setMenuData(response.data.data);
        setRestaurantName(response.data.data[0].restaurant_name);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, [restId]);

  return (
    <>
      <Navbar />

      <div className="menu-restaurant-poster">
        <h1>{restaurantName}</h1>
      </div>
      <h2 className="heading-menu">Menu</h2>

      {menuData &&
        menuData.map((menu, index) => {
          return (
            <>
              <div className="restaurant-menu-info" key={menu.item_id}>
                <h2 className="menu-name"> {menu.menu_item_name}</h2>

                <p className="menu-description">{menu.menu_item_description}</p>
                {menu.menu_item_price == 0 ? (
                  <p className="menu-price">Price not available</p>
                ) : (
                  <p className="menu-price">
                    <span>Price: $</span>
                    {menu.menu_item_price}
                  </p>
                )}
              </div>
            </>
          );
        })}
    </>
  );
}
