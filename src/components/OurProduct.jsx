import { data } from "../assets/assets";
import Card from "./Card/Card";
function OurProduct() {
  const title = "Our product categories";
  const type =
    "In this section, you can view our products by category and navigate to the desired page if you wish.";

  return (
    <div className="Our_Product_section">
      <div className="top_title">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="type">
          <p>{type}</p>
        </div>
      </div>

      <div className="content_section">
        <ul>
          {data.map((d) => {
            return <Card key={d.id} data={d} variant={"ourProducts"} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default OurProduct;
