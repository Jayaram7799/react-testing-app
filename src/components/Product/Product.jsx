import { useState, useEffect } from "react";
function Product() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setProduct({
        name: "Laptop",
      });
    }, 1000);
  }, []);

  if (!product) {
    return <p>Loading...</p>;
  }

  return <h2>{product.name}</h2>;
}

export default Product;
