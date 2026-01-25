import React from "react";
import { Link } from "react-router-dom";
import { quizzes } from "../data/data"; 

function MenuLinks() {
  return (
    <>
      <div className="menu__lists">
        {quizzes.map((item) => (
          <Link
            to={`quiz/${item.title}`}
            key={item.title}
            className="logo__header"
          >
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default MenuLinks;
