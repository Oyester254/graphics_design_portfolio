// Import React hooks.
// useState stores component state.
// useMemo caches computed values for better performance.
import { useMemo, useState } from "react";

// Import the array containing all portfolio projects.
import projects from "../data/projects";

// Import the reusable project card component.
import ProjectCard from "../components/ProjectCard";

// Import the reusable filter button component.
import FilterButtons from "../components/FilterButtons";

// Portfolio page component.
function Portfolio() {
  // STATE
  // Store the currently selected category.
  // Initial value is "All".
  const [activeCategory, setActiveCategory] = useState("All");

  // CREATE FILTER CATEGORIES
  // Create an array of unique categories.
  // Example:
  // ["All", "Graphic Design", "CAD", "BIM", "3D"]
  const categories = [
    "All",

    // Extract every category from the projects array.
    // Remove duplicates using Set.
    ...new Set(
      // Create a new array containing only category names.
      projects.map(
        // project represents one object inside the projects array.
        (project) => project.category,
      ),
    ),
  ];

  // FILTER PROJECTS

  // Calculate which projects should be displayed.
  // useMemo only recalculates when activeCategory changes.
  const filteredProjects = useMemo(() => {
    // If "All" is selected,
    // display every project.
    if (activeCategory === "All") {
      return projects;
    }

    // Otherwise,
    // return only projects that belong
    // to the selected category.
    return projects.filter(
      // Keep projects whose category matches
      // the selected category.
      (project) => project.category === activeCategory,
    );

    // Dependency array.
    // Recalculate only when activeCategory changes.
  }, [activeCategory]);
  //selectedImage stores the image the user clicked.
  //null means no image is open.
  const [selectedImage, setSelectedImage] = useState(null);

  // Render User Interface

  return (
    // Main portfolio section.
    <section className="py-16 md:py-24  min-h-screen">
      {/* Center content and limit maximum width */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Portfolio Heading */}
        <div className="text-center">
          {/* Main title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Portfolio
          </h2>

          {/* Short description */}
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore a selection of my graphic design, architectural, interior
            design, and 3D visualization projects.
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="mt-10">
          <FilterButtons
            // Pass the available categories.
            categories={categories}
            // Pass the currently selected category.
            active={activeCategory}
            // Pass the function used to update
            // the selected category.
            setActive={setActiveCategory}
          />
        </div>
        {/* Responsive project grid */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {/* Create one ProjectCard for every filtered project */}
          {filteredProjects.map(
            // project is one object in the filtered array.
            (project) => (
              <ProjectCard
                // Unique identifier used by React.
                key={project.id}
                // Pass the project object
                // to the ProjectCard component.
                project={project}
                //Sends the function to ProjectCard so the card can open the modal.
                onImageClick={setSelectedImage}
              />
            ),
          )}
        </div>
        {/*This is where modal begins*/}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className=" absolute top-6 right-8 text-white text-5xl hover:scale-110 transition"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              className="max-w-[90%] max-h-[90%] rounded-lg animate-zoomIn"
              src={selectedImage}
              alt="Preview"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
        {/*modal end*/}
      </div>
    </section>
  );
}

// Export the component
// so it can be imported elsewhere.
export default Portfolio;
