import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { listMeals } from "../../actions/mealActions";
import { Loader, MealCard } from "../../components";
import { useNavigate } from "react-router-dom";

import "./mamaputin.css";

const Head = styled.div`
  background-image: url("./images/mamaputin-big-img.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
`;

const Meal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mealList = useSelector((state) => state.mealList);
  const { loading, error, meals } = mealList;

  useEffect(() => {
    dispatch(listMeals());
  }, [dispatch]);

  const addToCartHandler = () => {
    console.log("Clicked");
    navigate(`/cart`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mamaputin">
          <Head className="mamaputin-head">
            <h1>MAMAPUTIN RESTAURANT</h1>
          </Head>
          <div className="mamaputin-address">
            <ul>
              <li>
                <span>Address</span>
              </li>
              <li>106 Loudon street, 44018 Mac,NJ</li>
            </ul>
            <ul>
              <li>
                <span>Customer rating</span>
              </li>
              <li>
                <span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>Business Hours</span>
              </li>
              <li>10am-9pm Everyday</li>
            </ul>
          </div>

          <h3>Food Menu</h3>

          <div className="mamaputin-row">
            {meals.map((meal) => (
              <MealCard key={meal.id} onClick={addToCartHandler} {...meal} />
            ))}
          </div>

          <h3>Customer Reviews</h3>
          <div className="mamaputin-review-row">
            <div className="mamaputin-review">
              <div className="mamaputin-review-details">
                <img src="./Images/mamaputin-review.png" alt="" />
                <h4>Patricia Akinmade</h4>
                <span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </span>
                <p>
                  "Lorem ipsum dolor sit amet consectetur
                  <br />
                  adipisicing elit. Molestiae dolorem <br />
                  provident inventore harum nemo qui illo
                  <br />
                  Autem"
                </p>
                <p className="review-slide">
                  &gt; <span>1/4</span> &gt;
                </p>
              </div>
            </div>

            <img
              className="mamaputin-review-footer"
              src="./Images/mamaputin-feedback.png"
              alt=""
            />
          </div>

          <h2 className="mamaputin-footer-header">Order on The Go</h2>
          <div className="mamaputin-footer">
            <img src="./Images/phone-img.png" alt="" />
            <img src="./Images/laptop-img.png" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Meal;
