import React from "react";
import NavigationBar from "../NavigationBar";
import PrispevkyCards from "../prispevkycards/PrispevkyCards";
import { Link } from "react-router-dom";

const PrispevkyPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <div>
        <h3>Prispevky</h3>
        <Link to="/novy" className="btn btn-primary">
          Novy prispevok
        </Link>
      </div>
      <PrispevkyCards />
    </React.Fragment>
  );
};

export default PrispevkyPage;
