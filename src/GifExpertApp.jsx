import React, { useState } from "react";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
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
