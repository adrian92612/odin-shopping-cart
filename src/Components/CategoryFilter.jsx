/* eslint-disable react/prop-types */

function CategoryButton({ onClick, categoryName }) {
  return <button onClick={() => onClick(categoryName)}>{categoryName || "All"}</button>;
}

export default function CategoryFilter({ categories, onCategorySelect }) {
  return (
    <div>
      <CategoryButton onClick={onCategorySelect} categoryName={null} />
      {categories.map((category) => (
        <CategoryButton key={category} onClick={onCategorySelect} categoryName={category} />
      ))}
    </div>
  );
}
