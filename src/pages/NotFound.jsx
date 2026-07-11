import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="
min-h-[70vh]
flex
flex-col
items-center
justify-center
px-5
text-center
"
    >
      <h1
        className="
text-6xl
md:text-8xl
font-bold
"
      >
        404
      </h1>

      <p
        className="
mt-4
text-gray-600
"
      >
        Page not found
      </p>

      <Link
        to="/"
        className="
mt-6
bg-blue-600
text-white
px-6
py-3
rounded-xl
"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
