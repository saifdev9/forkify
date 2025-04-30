import { Link } from "react-router-dom";

function Copyright() {
  return (
    <p className="copyright">
      &copy; Copyright by{" "}
      <Link
        className="twitter-link"
        target="_blank"
        rel="noopener noreferrer"
        to="https://twitter.com/jonasschmedtman"
      >
        Jonas Schmedtmann
      </Link>
      . Use for learning or your portfolio. Don't use to teach. Don't claim as
      your own.
    </p>
  );
}

export default Copyright;
