const SkillSetCard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-6xl font-semibold mb-2">Skills</h1>
        <p className="font-semibold md:text-xl font-serif text-pink-600 mb-4">
          Languages:
          <span className="text-gray-600">
            {" "}
            C++ | Javascript | Typescript | Python | Java
          </span>
        </p>
        <p className="font-semibold md:text-xl font-serif text-pink-600 mb-4">
          Frontend:
          <span className="text-gray-600">
            {" "}
            HTML | CSS | React | NextJs | Tailwind | DaisyUI | NextUI
          </span>
        </p>

        <p className="font-semibold md:text-xl font-serif text-pink-600 mb-4">
          Backend:
          <span className="text-gray-600">
            {" "}
            NodeJS | ExpressJs | MongoDb | Mysql | Firebase
          </span>
        </p>

        <p className="font-semibold md:text-xl font-serif text-pink-600 mb-4">
          DevOps:
          <span className="text-gray-600"> Git | Linux</span>
        </p>
      </div>

      <p className="font-semibold md:text-xl font-serif text-pink-600 mb-4">
        Others:
        <span className="text-gray-600"> Latex | Markdown | Vercel</span>
      </p>
    </div>
  );
};

export default SkillSetCard;
