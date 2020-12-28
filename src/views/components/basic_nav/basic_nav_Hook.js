import { useState } from "react";

import "./basicnav.css";

import ColorModeContext from "../../../context/ColorModeContext";

function BasicNav() {
  const [navState, setNavState] = useState(1);

  const [routes, setRoutes] = useState([
    {
      name: "Home",
      className: "selected",
    },
    {
      name: "Blog",
      className: "noselect",
    },
    {
      name: "Projects",
      className: "noselect",
    },
    {
        name: "Account",
        className: "noselect",
      },
  ]);

  /////////////////////////////////////////////- functions
  function onClickNav(e, iteme) {
    e.preventDefault();

    var toUpdate = [];
    routes.forEach((item) => {
      var cur = item;
      if (cur.name == iteme.name) {
        cur.className = "selected";
      } else {
        cur.className = "noselect";
      }
      toUpdate.push(cur);
    });
    setRoutes(toUpdate);

    console.log();
  }

  /////////////////////////////////////////////
  //all iterators of links
  var listOfLinks = routes.map((item) => (
    <>
      <li key={item.name}>
        <a
          onClick={(e) => {
            onClickNav(e, item);
          }}
          className={item.className}
          href="#"
        >
          {item.name}
        </a>
      </li>
    </>
  ));

  return (
    <div>
      <div id="BasicNavContainer">{listOfLinks}</div>
    </div>
  );
}

export default BasicNav;
