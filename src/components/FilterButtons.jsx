// FilterButtons Component
// Displays a button for each project category.
// When a button is clicked, it tells the parent
// component (Portfolio) which category was selected.

function FilterButtons({
  // Array of category names.
  // Example:
  // ["All", "Graphic Design", "CAD", "3D"]
  categories,

  // Currently selected category.
  active,

  // Function received from Portfolio.jsx.
  // Used to change the selected category.
  setActive,
}) {
  return (
    // Container for all filter buttons.
    <div className="flex flex-wrap justify-center gap-3">
      {/* Loop through every category */}
      {categories.map(
        // category is one item in the categories array.
        (category) => (
          <button
            // React uses the key to identify each button.
            key={category}
            // Update the selected category when clicked.
            onClick={() => setActive(category)}
            // Apply different styles depending on
            // whether this button is currently selected.
            className={`

              px-5
              py-2
              rounded-full
              transition

              ${
                active === category
                  ? // Active button style
                    "bg-blue-600 text-white"
                  : // Inactive button style
                    "bg-gray-100 hover:bg-gray-200"
              }

            `}
          >
            {/* Display the category name */}
            {category}
          </button>
        ),
      )}
    </div>
  );
}

// Export the component.
export default FilterButtons;
