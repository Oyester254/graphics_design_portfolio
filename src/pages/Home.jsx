import { useNavigate } from "react-router-dom";
function Home() {
  //creates a function that allows pragramatic navigation
  const navigate = useNavigate();
  //Runs after the user clicks view portfolio
  const handleClick = () => {
    // Navigate to the portfolio page
    navigate("/portfolio");
  };
  const handleClick2 = () => {
    // Navigate to the portfolio page
    navigate("/contact");
  };
  return (
    <section className="min-h-screen flex items-center  min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="max-w-3xl">
          <h1
            className="
            text-4xl 
            sm:text-5xl 
            md:text-6xl 
            lg:text-7xl
            font-bold 
            leading-tight
            text-gray-900
          "
          >
            Creative Designer &
            <span className="text-blue-600"> 3D Visual Artist</span>
          </h1>

          <p
            className="
            mt-6
            text-base
            sm:text-lg
            md:text-xl
            text-gray-600
            leading-relaxed
          "
          >
            I create visual identities, posters, logos, business cards,
            architectural drawings, interior designs , and realistic 3D
            visualizations using modern design tools.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-7
              py-3
              rounded-xl
              transition
            "
              onClick={handleClick}
            >
              View Portfolio
            </button>

            <button
              className="
              border
              border-gray-300
              hover:bg-gray-100
              px-7
              py-3
              rounded-xl
              transition
              
            "
              onClick={handleClick2}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
