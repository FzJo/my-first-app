import React from "react";
import { ListGroup } from "react-bootstrap";
import { articles, categories } from "../data/index";

const Sidebar = () => (
  <aside>
    <ListGroup>
      {articles.map((item, index) => (
        <ListGroup.Item key={`article-link${index}`}>
          {item.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
    <ListGroup>
      <h3>Categories</h3>
      {categories.map((item, index) => (
        <ListGroup.Item key={`category-link${index}`}>
          {item.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </aside>
);
export default Sidebar;
