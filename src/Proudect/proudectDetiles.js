import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
export default function ProudectDetiles(props) {
  const [detils, setdetiels] = useState({});
  const params = useParams();
  // console.log("params", params);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => setdetiels(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h1>ProudectDetiles</h1>
      <img src={detils.image} />
      <h4>{detils.title}</h4>
    </div>
  );
}
