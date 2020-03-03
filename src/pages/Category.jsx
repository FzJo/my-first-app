import React from "react";
import { Layout } from "../components";
import { categories } from "../data";

const Category = props => {
  // Add logic
  const id = props.match.params.id;
  const category = categories[id];

  return (
    <Layout>
      <h1>{category.name}</h1>
    </Layout>
  );
};

export default Category;
