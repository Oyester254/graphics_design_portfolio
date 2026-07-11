function About() {
  return (
    <section className="py-16 md:py-24 min-h-screen">
      <div
        className="
        max-w-6xl 
        mx-auto 
        px-5 
        sm:px-8 
        lg:px-12
      "
      >
        <h2
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          text-gray-900
        "
        >
          About Me
        </h2>

        <div
          className="
          mt-8
          grid
          md:grid-cols-2
          gap-8
          items-center
        "
        >
          <p
            className="
            text-gray-600
            text-base
            sm:text-lg
            leading-8
          "
          >
            I am a multidisciplinary designer specializing in graphic design,
            architectural drafting, interior design, and 3D visualization.
            <br />
            <br />
            My workflow combines creativity and technical precision using
            CorelDRAW, Adobe Illustrator, AutoCAD, Revit, SketchUp, Rhino, 3ds
            Max, and Twinmotion.
          </p>

          <div
            className="
            bg-gray-100
            rounded-2xl
            p-8
          "
          >
            <h3 className="text-xl font-semibold">Design Focus</h3>

            <ul
              className="
              mt-5
              space-y-3
              text-gray-600
            "
            >
              <li>✓ Graphic Design</li>
              <li>✓ Architectural Visualization</li>
              <li>✓ Interior Design</li>
              <li>✓ 3D Rendering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
