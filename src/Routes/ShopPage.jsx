import { useEffect, useState } from "react";

export default function ShopPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await (await fetch(`https://fakestoreapi.com/products`)).json();
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  if (loading) return <h2>Loading Items...</h2>;

  return (
    <ul>
      {data &&
        data.map((data) => (
          <li key={data.id}>
            <h2>{data?.title}</h2>
            <img src={data?.image} alt="" style={{ width: "100px", height: "auto" }} />
            <p>
              {data?.price} {data?.rating.rate} {data?.rating.count}
            </p>
            <p>{data?.description}</p>
          </li>
        ))}
    </ul>
  );
}
