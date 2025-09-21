import  { Calendar, MapPin, Clock } from 'lucide-react';

function Events() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Events & Workshops</h1>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-2xl font-bold">Middle School Music Program Workshop</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span>Coming Soon</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                <span>Online (Zoom)</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span>Free Event</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Essential tips and advice for students entering middle school music programs. 
              Our workshop covers regions audition tips, instrument care, practice planning, 
              scales and warm-ups, and answers to common questions about school music programs.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6">
              <h4 className="font-semibold text-blue-800 mb-2">Workshop Topics:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Regions audition preparation and tips</li>
                <li>• Instrument care and maintenance</li>
                <li>• Where to rent or buy instruments</li>
                <li>• How to choose the right instrument</li>
                <li>• Creating effective practice plans</li>
                <li>• Essential scales and warm-up exercises</li>
                <li>• Q&A about middle school music programs</li>
              </ul>
            </div>
            
            <a href="https://docs.google.com/forms/d/1m3lUfcCGHYqr92ohgMDFFvgrVHWXu9x9thpWP6EQ_r0/edit" 
               className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
              Register Now
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Future Workshop Ideas</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Performance Skills</h3>
              <p className="text-gray-600">
                Learn stage presence, overcoming performance anxiety, and connecting with your audience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Music Theory Deep Dive</h3>
              <p className="text-gray-600">
                Advanced theory concepts, analysis techniques, and composition fundamentals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Improvisation</h3>
              <p className="text-gray-600">
                Explore creativity in music through improvisation exercises and techniques.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Audition Preparation</h3>
              <p className="text-gray-600">
                Prepare for school auditions, competitions, and music program applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Music Technology</h3>
              <p className="text-gray-600">
                Introduction to recording, music software, and digital music creation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Ensemble Skills</h3>
              <p className="text-gray-600">
                Learn to play effectively in groups, chamber music, and collaborative performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
