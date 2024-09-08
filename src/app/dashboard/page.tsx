import React from 'react';

// Simulate fetching timeline data from an API
async function fetchTimeline() {
  // Simulated fetch request (you can replace this with a real API request)
  const timeline = [
    'Instructor John completed 5 lessons today',
    'New student Mike enrolled',
    '3 lessons scheduled for tomorrow',
    'Car maintenance scheduled for next week',
  ];

  // Simulate server-side fetching delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return timeline;
}

export default async function Dashboard() {
  // Fetch the timeline data
  const timeline = await fetchTimeline();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Light Sidebar */}
        <div className="w-64 h-screen bg-gray-200 text-gray-900">
          <div className="p-4">
            <h2 className="text-2xl font-bold">Dashboard</h2>
          </div>
          <nav className="p-4 space-y-4">
            <a href="/" className="block p-2 bg-gray-300 rounded">Home</a>
            <a href="/dashboard" className="block p-2 bg-gray-300 rounded">Dashboard</a>
            <a href="#" className="block p-2 bg-gray-300 rounded">Instructors</a>
            <a href="#" className="block p-2 bg-gray-300 rounded">Students</a>
            <a href="#" className="block p-2 bg-gray-300 rounded">Schedule</a>
            <a href="#" className="block p-2 bg-gray-300 rounded">Settings</a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>

          {/* Timeline Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Timeline</h2>
            <ul className="space-y-4">
              {timeline.map((event, index) => (
                <li key={index} className="p-4 bg-white shadow rounded">
                  {event}
                </li>
              ))}
            </ul>
          </div>

          {/* Grid for main features */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-lg">Instructors</h3>
              <p className="mt-2">Manage your instructors here</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-lg">Students</h3>
              <p className="mt-2">View and manage students</p>
            </div>
            <div className="p-4 bg-white shadow rounded">
              <h3 className="font-bold text-lg">Schedule</h3>
              <p className="mt-2">Manage driving lessons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
