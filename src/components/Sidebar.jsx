import React from "react";
import { ListGroup } from "react-bootstrap";
import { articles } from "../data/index";
import Category from "./Category";

const Sidebar = () => (
  <aside>
    <ListGroup>
      {articles.map((item, index) => (
        <ListGroup.Item key={`article-link${index}`}>
          {item.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
    <Category />
  </aside>
);
export default Sidebar;
