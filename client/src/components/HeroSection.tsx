const HeroSection = () => {
  return (
    <div>
      <section className="dark:bg-black dark:text-white relative flex flex-col items-center justify-center text-center h-[80vh] px-6">
        <div>
          <div className="absolute "></div>
          <h1 className="text-7xl max-w-4xl">
            <span className="font-extrabold relative z-10">
              Organize
              <span className="absolute inset-x-0 bottom-0 -z-10 h-10 bg-primary-pink rounded-xl"></span>
            </span>{" "}
            everything <br />
            in your{" "}
            <span className="text-secondary-blue font-extrabold">life</span>
          </h1>
          <button className="mt-6 bg-black text-white px-16 py-3 rounded-full shadow-lg hover:bg-gray-700  transition">
            Get Started
          </button>
        </div>
      </section>
      <div className="bg-white px-32 py-20">
        <span className="bg-secondary-blue px-6 py-1 rounded-full ">
          Our Service
        </span>
        <h1 className="text-3xl font-bold mt-8">
          Streamlining Your Daily Tasks <br /> with Smart Productivity Tracking
        </h1>
        <div className="flex w-full bg-neutral justify-center items-center">
          <div>
            <h3>In Progress</h3>
          </div>
          <div>
            <h1>Task & Project Management</h1>
            <p>
              Manage all your tasks and projects in one place. It's easy to
              create, organize, and complete tasks with an intutive interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
