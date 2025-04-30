import { Link } from "react-router-dom";
import Svg from "./Svg";

function List({ data, onClick, activeId }) {
  return (
    <li key={data?.id} className="preview" onClick={onClick}>
      <Link
        className={`preview__link preview__link--${
          data?.id === activeId ? "active" : ""
        }`}
        to=""
      >
        <figure className="preview__fig">
          <img src={data?.image_url} alt="Test" />
        </figure>
        <div className="preview__data">
          <h4 className="preview__title">{data?.title}</h4>
          <p className="preview__publisher">{data?.publisher}</p>

          <div
            className={`preview__user-generated ${data?.key ? "" : "hidden"}`}
          >
            <Svg name="user" />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default List;
