import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plantData = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 12, thumbnail: "https://via.placeholder.com/150" },
      { id: 2, name: "Peace Lily", price: 15, thumbnail: "https://via.placeholder.com/150" },
      { id: 3, name: "Aloe Vera", price: 10, thumbnail: "https://via.placeholder.com/150" },
      { id: 4, name: "Spider Plant", price: 9, thumbnail: "https://via.placeholder.com/150" },
      { id: 5, name: "Rubber Plant", price: 18, thumbnail: "https://via.placeholder.com/150" },
      { id: 6, name: "ZZ Plant", price: 20, thumbnail: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 7, name: "Rose", price: 14, thumbnail: "https://via.placeholder.com/150" },
      { id: 8, name: "Hibiscus", price: 16, thumbnail: "https://via.placeholder.com/150" },
      { id: 9, name: "Jasmine", price: 11, thumbnail: "https://via.placeholder.com/150" },
      { id: 10, name: "Bougainvillea", price: 19, thumbnail: "https://via.placeholder.com/150" },
      { id: 11, name: "Sunflower", price: 8, thumbnail: "https://via.placeholder.com/150" },
      { id: 12, name: "Tulsi", price: 6, thumbnail: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 13, name: "Echeveria", price: 7, thumbnail: "https://via.placeholder.com/150" },
      { id: 14, name: "Haworthia", price: 8, thumbnail: "https://via.placeholder.com/150" },
      { id: 15, name: "Jade Plant", price: 10, thumbnail: "https://via.placeholder.com/150" },
      { id: 16, name: "Cactus", price: 9, thumbnail: "https://via.placeholder.com/150" },
      { id: 17, name: "Sedum", price: 6, thumbnail: "https://via.placeholder.com/150" },
      { id: 18, name: "Crassula", price: 11, thumbnail: "https://via.placeholder.com/150" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <div>
      {/* Navbar */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </nav>

      <h1>Our Plants</h1>

      {plantData.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {category.plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  margin: "10px",
                  padding: "10px",
                  width: "180px"
                }}
              >
                <img
                  src={plant.thumbnail}
                  alt={plant.name}
                  style={{ width: "100%" }}
                />
                <h4>{plant.name}</h4>
                <p>Price: ${plant.price}</p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
