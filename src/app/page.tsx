import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-offwhite flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 h-screen p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Driving School</h1>
        <nav className="space-y-4">
          <a href="/dashboard" className="block py-2 px-4 bg-blue-600 text-white rounded">
            Dashboard
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            Instructors
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            Students
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">
            Schedule
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section with Angled Image */}
        <section className="relative min-h-screen bg-offwhite flex items-center">
          <div className="container mx-auto px-10">
            <div className="max-w-xl">
              <h2 className="text-5xl font-bold mb-6">Welcome to Driving School Management</h2>
              <p className="text-lg mb-8">Manage your students, instructors, and scheduling with ease.</p>
              <a href="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded shadow-lg">
                Get Started
              </a>
            </div>
          </div>

          {/* Angled Image */}
          <div className="absolute right-0 top-0 h-full w-1/2"> {/* Set the width to 50% */}
            <img 
              src="/homepage.png" 
              alt="Car" 
              className="w-full h-full object-cover transform -skew-x-6"
            />
          </div>
        </section>

        {/* Three Tiers with Dividers */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-10">
            {/* First Tier */}
            <div className="border-t-2 border-gray-300 py-10">
              <h3 className="text-3xl font-bold mb-4">Manage Instructors</h3>
              <p>Track and manage all your driving instructors in one place.</p>
            </div>
            {/* Divider */}
            <div className="h-1 bg-gray-300"></div>
            
            {/* Second Tier */}
            <div className="border-t-2 border-gray-300 py-10">
              <h3 className="text-3xl font-bold mb-4">Track Students</h3>
              <p>Keep a record of all your students, their lessons, and progress.</p>
            </div>
            {/* Divider */}
            <div className="h-1 bg-gray-300"></div>

            {/* Third Tier */}
            <div className="border-t-2 border-gray-300 py-10">
              <h3 className="text-3xl font-bold mb-4">Schedule Lessons</h3>
              <p>Plan and organize driving lessons with ease and efficiency.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
