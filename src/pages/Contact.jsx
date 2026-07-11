import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/portfolio");
  };
  return (
    <section className="py-16 md:py-24 min-h-screen">
      <div
        className="
max-w-5xl
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
font-bold
"
        >
          Contact
        </h2>

        <p
          className="
mt-5
text-gray-600
text-lg
"
        >
          Have a project idea? Let's create something visually engaging.
        </p>

        <div
          className="
mt-8
grid
sm:grid-cols-2
gap-5
"
        >
          <div className="bg-gray-100 rounded-xl p-6">
            Email <br />
            <a
              className="h-3 w-full font-bold text-blue-800 "
              href="mailto:misheckmwas97@gmail.com"
            >
              misheckmwas97@gmail.com
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl p-6">
            Phone
            <br />
            <span className="font-bold text-green-600">+254703197935</span>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            Samples
            <br />
            <span
              onClick={() => handleClick()}
              className="cursor-pointer font-bold text-black"
            >
              Portfolio Page
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
