import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: "p1",
      price: 130,
      title: "Red Cap",
      description: "Rounded and color red with Stricker ",
    },
    {
      id: "p2",
      price: 310,
      title: "White tshirt",
      description: "tshirt with print logo",
    },
    {
      id: "p3",
      price: 550,
      title: "Shirt",
      description: "shirt with color black and round neck",
    },
    {
      id: "p4",
      price: 2444,
      title: "Shoes",
      description: "a high quality and color white ",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
