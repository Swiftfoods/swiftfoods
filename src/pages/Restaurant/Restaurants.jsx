import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RestaurantCard, Loader } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { listRestaurants } from "../../actions/restaurantAction";

import "./Restaurants.css";

const RestaurantMenu = () => {
  const dispatch = useDispatch();

  const restaurantList = useSelector((state) => state.restaurantList);
  const { loading, error, restaurants } = restaurantList;

  // console.log(restaurants);

  const searchHandler = (e) => {
    e.preventDefault();

    const search = e.target.elements.search.value;
    dispatch(listRestaurants(search));
  };

  useEffect(() => {
    dispatch(listRestaurants());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="restaurant">
          <div className="rest-head">
            <div className="rest-header">
              <h1>Find a restaurant</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <img src="./images/restaurant-head.png" alt="" />
          </div>
          <div className="search-rest">
            <h3 id="search-text">Let's find something delicious for you</h3>
            <div className="search-box">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i className="fa fa-search"></i>
                    </td>
                    <td>
                      <input
                        type="search"
                        id="search"
                        value="Search restaurant"
                        onChange={() => searchHandler}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rest-recommended">
            <h3>Recommended</h3>
            <p className="filter">filter &gt;</p>
          </div>

          <div className="restaurant-row">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
          <div className="rest-view-more">
            <h5>View more &gt; &gt; &gt; &gt; </h5>
            <span>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </span>
          </div>
          <h4>Order on The Go</h4>
          <div className="rest-footer">
            <img src="./images/phone-img.png" alt="" />
            <img src="./images/laptop-img.png" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
