import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
export default function Proudect() {
  const [proudects, SetProudects] = useState([]);

  let history = useHistory();
  const GoDetiels = () => {
    history.push("/proudectDetiles/4");
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => SetProudects(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Proudct</h1>
      <button className="btn btn-primary" onClick={() => GoDetiels()}>
        Detiels
      </button>
      {proudects.map((prodect) => {
        return (
          <Link to={`/ProudectDetiles/${prodect.id}`} key={prodect.id}>
            <li>{prodect.title}</li>;
          </Link>
        );
      })}
    </div>
  );
}
