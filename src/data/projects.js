const base = import.meta.env.BASE_URL;

const projects = [
  {
    id: 1,
    title: "Company Poster",
    category: "Graphic Design",
    software: "CorelDRAW",
    image: `${base}images/posters/digital.jpg`,
  },
  {
    id: 2,
    title: "Advert",
    category: "Graphic Design",
    software: "Adobe Illustrator",
    image: `${base}images/posters/poster.png`,
  },
  {
    id: 3,
    title: "Business Card",
    category: "Graphic Design",
    software: "Adobe Illustrator",
    image: `${base}images/posters/survey.jpg`,
  },

  {
    id: 4,
    title: "Modern House",
    category: "Architecture",
    software: "SketchUp",
    image: `${base}images/sketchup/14.png`,
  },
  {
    id: 5,
    title: "Residential Building",
    category: "Architecture",
    software: "SketchUp",
    image: `${base}images/sketchup/13.png`,
  },
  {
    id: 6,
    title: "Hip Roof",
    category: "Architecture",
    software: "SketchUp",
    image: `${base}images/sketchup/16.png`,
  },
  {
    id: 7,
    title: "Chair",
    category: "3D",
    software: "Rhino",
    image: `${base}images/rhino/one.png`,
  },
  {
    id: 8,
    title: "Screwdriver",
    category: "3D",
    software: "Rhino",
    image: `${base}images/rhino/three.png`,
  },

  {
    id: 9,
    title: "Model",
    category: "3D",
    software: "Rhino",
    image: `${base}images/rhino/two.png`,
  },
  {
    id: 10,
    title: "Logo",
    category: "Cards",
    software: "CorelDraw",
    image: `${base}images/cards/logo.png`,
  },
  {
    id: 11,
    title: "Front",
    category: "Cards",
    software: "CorelDraw",
    image: `${base}images/cards/front.jpg`,
  },
  {
    id: 12,
    title: "",
    category: "Cards",
    software: "CorelDraw",
    image: `${base}images/cards/back.jpg`,
  },
  {
    id: 13,
    title: "Interior 1",
    category: "Interior Design",
    software: "Revit",
    image: `${base}images/revit/six.png`,
  },
  {
    id: 14,
    title: "Interior 1",
    category: "Interior Design",
    software: "Revit",
    image: `${base}images/revit/four.png`,
  },
  {
    id: 15,
    title: "Interior 3",
    category: "Interior Design",
    software: "Revit",
    image: `${base}images/revit/two.png`,
  },
];

export default projects;
