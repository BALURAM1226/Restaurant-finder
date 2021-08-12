import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './apidata.css';
import { motion } from 'framer-motion';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { Link, useParams } from 'react-router-dom';

export default function ApiData(props) {
  const [apiData, setApiData] = useState(null);
  const [searchMessage, setSearchMessage] = useState(
    'Search for resturants to see the result'
  );

  const fetchApi = () => {
    if (props.cityName.length === 0) {
      setSearchMessage('Search for resturants to see the result');
      setApiData([]);
    }
    var options = {
      method: 'GET',
      url: `https://documenu.p.rapidapi.com/restaurants/zip_code/${
        props.cityName
      }`,
      headers: {
        'x-api-key': 'ecedf70ea41f9326798d5c634e950b79',
        'x-rapidapi-key': 'a62a740c81mshf15f5e149e2df36p1dfce8jsn250c2193799e',
        'x-rapidapi-host': 'documenu.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function(response) {
        const resultData = response.data.data;
        setApiData(resultData);
        if (resultData.length === 0) {
          setSearchMessage('No data found, please check you input');
        } else {
          setSearchMessage('Search results');
        }
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchApi();
  }, [props.cityName]);

  return (
    <>
      <h1 className="apidata-div">{searchMessage}</h1>

      {apiData &&
        apiData.map(result => {
          return (
            <>
              <div className="search-results" key={result.restaurant_id}>
                <motion.div
                  key={result.restaurant_id}
                  className="search-info"
                  animate={{
                    x: 20,
                    y: 0,
                    scale: 1,
                    rotate: 0
                  }}
                >
                  <h2 className="restaurant-name">{result.restaurant_name}</h2>
                  <p className="restaurant-food">{result.cuisines}</p>

                  <Link
                    to={`/restaurant/${result.restaurant_id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="restaurant-menu-link">View Menu</span>
                  </Link>

                  <div className="restaurant-number">
                    <PhoneAndroidIcon className="restaurant-phoneIcon" />
                    <span>{result.restaurant_phone}</span>
                  </div>
                  <p className="restaurant-address">
                    {result.address.formatted}
                  </p>
                  <a
                    href={result.restaurant_website}
                    target="_blank"
                    className="restaurant-link"
                  >
                    {result.restaurant_website}
                  </a>
                </motion.div>
              </div>
            </>
          );
        })}
    </>
  );
}
