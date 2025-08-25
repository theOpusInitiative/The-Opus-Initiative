import  { Book, Video, Music, Award } from 'lucide-react';

function Programs() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Programs</h1>
        
        <div className="space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <Video className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">Free Music Theory Lessons</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Our comprehensive online video series teaches music theory using ABRSM-style curriculum. 
              All lessons are created and taught by experienced student musicians, ensuring relatable 
              and effective learning experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold">Video Lessons</h3>
                <p className="text-sm text-gray-600">Step-by-step tutorials</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold">Practice Guides</h3>
                <p className="text-sm text-gray-600">Structured learning paths</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-semibold">Worksheets</h3>
                <p className="text-sm text-gray-600">Downloadable exercises</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <Book className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">Resource Library</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Access our curated collection of study guides, videos, and downloadable materials 
              for ABRSM exams and general music education. All resources are carefully selected 
              and organized for maximum learning efficiency.
            </p>
            <a href="https://youtube.com/@theopusinitiative" 
               className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
              Visit YouTube Channel
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">Concerts & Performances</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Our student musicians perform at schools, hospitals, retirement homes, churches, 
              and community events. These performances not only showcase talent but also bring 
              joy to communities while providing valuable experience to our performers.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
              <p className="text-yellow-800">
                <strong>Upcoming:</strong> Community performance at local senior center - stay tuned for details!
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">Competitions</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Annual and semi-annual music competitions organized by age and instrument groups, 
              featuring prizes and professional judges. These competitions provide students with 
              goals to work towards and celebrate their musical achievements.
            </p>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded">
              <p className="text-blue-800">
                <strong>Coming Soon:</strong> Our first competition planned for end of 2024!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
 