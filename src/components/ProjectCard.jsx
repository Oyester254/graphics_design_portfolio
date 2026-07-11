// ProjectCard Component
// Displays a single portfolio project.
//
// The project data is received from Portfolio.jsx.

function ProjectCard({
  // One project object.
  //
  // Example:
  //
  // {
  //   id:1,
  //   title:"Restaurant Poster",
  //   software:"CorelDRAW",
  //   image:"poster1.jpg",
  //   category:"Graphic Design"
  // }
  project,
  onImageClick,
}) {
  return (
    // Card container.
    <div
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition
        duration-300
      "
    >
      {/* Image container */}
      <div
        className="aspect-[16/10] overflow-hidden cursor-pointer"
        onClick={() => onImageClick(project.image)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project information */}
      <div className="p-5">
        {/* Software used */}
        <span
          className="
            text-sm
            text-blue-600
            font-medium
          "
        >
          {project.software}
        </span>

        {/* Project title */}
        <h3
          className="
            mt-2
            text-xl
            font-semibold
          "
        >
          {project.title}
        </h3>

        {/* Project category */}
        <p
          className="
            mt-2
            text-gray-500
          "
        >
          {project.category}
        </p>
      </div>
    </div>
  );
}

// Export the component.
export default ProjectCard;
