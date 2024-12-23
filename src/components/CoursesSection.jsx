import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaCalendarAlt, FaCode, FaDatabase, FaLaptopCode, FaPython, FaChartLine, FaBrain, FaBook } from 'react-icons/fa';

const CoursesSection = () => {
  const [bgColor, setBgColor] = useState('bg-white'); // Default color

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Change background color based on scroll position
      if (scrollPosition > 100) {
        setBgColor('bg-gray-100'); // Scroll down to change to light gray
      } else {
        setBgColor('bg-white'); // Default background color
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`${bgColor} py-12 bg-gradient-to-b from-white to-gray-100`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800 transition-all duration-300 hover:text-cyan-600">
          Our Courses
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {/* C/C++ Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">C/C++ Programming</h3>
                <p className="text-sm">
                  Learn the fundamentals of C/C++ programming and improve your coding skills.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-green-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaCode className="text-green-500 text-2xl" />
            </div>
          </div>

          {/* DSA with C++ Course */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
              <div className="bg-fuchsia-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">DSA with C++</h3>
                <p className="text-sm">
                  Dive deeper into Data Structures and Algorithms using C++ to master problem-solving.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-fuchsia-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
              <FaDatabase className="text-fuchsia-500 text-2xl" />
            </div>
          </div>

          {/* Web Development Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-sm">
                  Build responsive and dynamic websites using modern web technologies like HTML, CSS, and JavaScript.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-blue-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaLaptopCode className="text-blue-500 text-2xl" />
            </div>
          </div>

          {/* Python Course */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
              <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Python Programming</h3>
                <p className="text-sm">
                  Master Python for various applications including automation, web development, and data analysis.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-yellow-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
              <FaPython className="text-yellow-500 text-2xl" />
            </div>
          </div>

          {/* Data Analysis Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                <p className="text-sm">
                  Learn how to analyze and visualize data with Python using tools like Pandas, NumPy, and Matplotlib.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-purple-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaChartLine className="text-purple-500 text-2xl" />
            </div>
          </div>

          {/* Machine Learning Course */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4">
              <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                <p className="text-sm">
                  Dive into machine learning concepts and algorithms to build intelligent models and systems.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-red-500 shadow-lg -mr-6 md:mr-0 transition-all transform hover:scale-110">
              <FaBrain className="text-red-500 text-2xl" />
            </div>
          </div>

          {/* CS Fundamentals Course */}
          <div className="flex flex-col md:flex-row items-center mb-12 transition-transform duration-500 hover:translate-x-2">
            <div className="w-full md:w-1/2 flex justify-center md:justify-end px-4">
              <div className="bg-cyan-500 text-white p-6 rounded-lg shadow-lg w-80 transition-all transform hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-2">CS Fundamentals</h3>
                <p className="text-sm">
                  Understand the core principles of computer science, including algorithms, networking, and systems.
                </p>
              </div>
            </div>
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-4 border-gray-500 shadow-lg -ml-6 md:ml-0 transition-all transform hover:scale-110">
              <FaBook className="text-gray-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
