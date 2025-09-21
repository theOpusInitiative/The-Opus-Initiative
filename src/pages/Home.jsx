import  { Link } from 'react-router-dom';
import { ArrowRight, Music, Users, Award, Globe } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Inspiring Note by Note</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The Opus Initiative is a student-led 501(c)(3) nonprofit making music education free, fun, and accessible for every student, no matter their background.
          </p>
          <div className="space-x-4">
            <Link to="/about" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Learn More
            </Link>
            <Link to="/tutoring" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            To make music education free, fun, and accessible for every student, no matter their background. 
            We believe that talent is everywhere, but opportunity is not. We're here to change that through 
            youth-led programs that are built on passion, mentorship, and community.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <Music className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Free Music Lessons</h3>
              <p className="text-gray-600 mb-4">
                Online video series teaching music theory with ABRSM-style curriculum, led by student musicians.
              </p>
              <Link to="/programs" className="text-purple-600 font-semibold flex items-center">
                Learn More <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tutoring Network</h3>
              <p className="text-gray-600 mb-4">
                Connects experienced high school musicians with students for free or low-cost lessons.
              </p>
              <Link to="/tutoring" className="text-purple-600 font-semibold flex items-center">
                Start Today <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Events & Workshops</h3>
              <p className="text-gray-600 mb-4">
                Group events covering performance skills, theory, improvisation, and audition prep.
              </p>
              <Link to="/events" className="text-purple-600 font-semibold flex items-center">
                Coming Soon <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <Globe className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fundraising</h3>
              <p className="text-gray-600 mb-4">
                Supporting global music education through donations and community fundraising events.
              </p>
              <Link to="/contact" className="text-purple-600 font-semibold flex items-center">
                Coming Soon <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 The Opus Initiative. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://instagram.com/theopusinitiative" className="text-gray-300 hover:text-white">Instagram</a>
            <a href="https://tiktok.com/@theopusinitiative" className="text-gray-300 hover:text-white">TikTok</a>
            <a href="https://youtube.com/@theopusinitiative" className="text-gray-300 hover:text-white">YouTube</a>
            <a href="mailto:theopusinitiative@gmail.com" className="text-gray-300 hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
 
