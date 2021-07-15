import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);
  console.log(categories)
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories}/>
      <ol>
          {
              categories.map((categorie)=>(
                  <li key={categorie}>{categorie}</li>
              ))
          }
      </ol>
    </>
  );
};
