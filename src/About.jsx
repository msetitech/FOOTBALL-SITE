import React from "react";

const AboutPage = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1599249354904-d4c0f131b238")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Inter Miami CF
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Building a soccer legacy in the heart of Miami
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 bg-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-700">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Inter Miami was founded to bring world-class soccer to the United
            States. With a focus on talent development, fan engagement, and
            community impact, we aim to be at the forefront of football in North
            America.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">Our History</h2>
            <p className="mt-6 text-lg text-gray-700">
              Founded in 2018 by David Beckham, Inter Miami has quickly become a
              symbol of hope and success. With the addition of world-class
              players and facilities, we are shaping the future of soccer in the
              U.S.
            </p>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Inter_Miami_CF_Logo.svg/800px-Inter_Miami_CF_Logo.svg.png"
              alt="Inter Miami Logo"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-indigo-100 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Inter Miami is more than just a soccer team – it's a family. From
            our coaches to our players, we work together to achieve excellence
            and inspire the world.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="team-member p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://example.com/player1.jpg"
              alt="Player 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Lionel Messi
            </h3>
            <p className="mt-2 text-gray-600">Forward</p>
          </div>
          <div className="team-member p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://example.com/player2.jpg"
              alt="Player 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Gonzalo Higuaín
            </h3>
            <p className="mt-2 text-gray-600">Striker</p>
          </div>
          <div className="team-member p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://example.com/player3.jpg"
              alt="Player 3"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Gregore
            </h3>
            <p className="mt-2 text-gray-600">Midfielder</p>
          </div>
          <div className="team-member p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://example.com/player4.jpg"
              alt="Player 4"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              DeAndre Yedlin
            </h3>
            <p className="mt-2 text-gray-600">Defender</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-800 text-white text-center">
        <h2 className="text-4xl font-bold">Join the Inter Miami Family</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Get closer to the action. Join us at the stadium, support us from
          home, and become part of the #InterMiami movement!
        </p>
        <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300">
          Become a Member
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        <p>&copy; 2025 Inter Miami CF. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
