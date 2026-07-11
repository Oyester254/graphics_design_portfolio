function Footer() {
  return (
    <footer
      className="
bg-gray-900
text-gray-300
py-8
mt-20
"
    >
      <div
        className="
max-w-7xl
mx-auto
px-5
sm:px-8
lg:px-12
text-center
"
      >
        <h3
          className="
text-xl
font-semibold
text-white
"
        >
          MishDesign
        </h3>

        <p
          className="
mt-3
text-sm
"
        >
          Graphic Design • Architecture • 3D Visualization • Interior Design •
          Sketching
        </p>

        <p
          className="
mt-5
text-sm
text-gray-500
"
        >
          © {new Date().getFullYear()} Misheck Mwangi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
