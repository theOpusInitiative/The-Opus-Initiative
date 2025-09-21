import  { Users, User, Clock } from 'lucide-react';

function Tutoring() {
  const tutors = [
    { name: "Piano Specialist 1", instruments: ["Piano"], experience: "5+ years" },
    { name: "Piano Specialist 2", instruments: ["Piano"], experience: "4+ years" },
    { name: "Piano & Violin", instruments: ["Piano", "Violin"], experience: "6+ years" },
    { name: "Piano & Violin", instruments: ["Piano", "Violin"], experience: "5+ years" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Music Tutoring Network</h1>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our tutoring network connects experienced high school musicians with students 
            for free or low-cost lessons in instruments, vocals, and music theory.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">For Students</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Get personalized music instruction from experienced student mentors who understand 
              your learning journey and can provide relatable guidance.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span>Virtual and in-person options</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span>Beginner to intermediate levels</span>
              </div>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfktzpDcSRTutKDQCb_e-j3rrxh_U3j_7SFv5xecfS6VC30ww/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 w-full"
              aria-label="Apply to be a Student (opens in new tab)"
            >
              Apply to be a Student
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">For Mentors</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Share your musical knowledge and gain valuable teaching experience while earning 
              volunteer hours and making a positive impact in your community.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span>Gain volunteer hours</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span>Build teaching experience</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-green-600 mr-2" />
                <span>Flexible commitment</span>
              </div>
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSepDajbEFhnoGHahhbkN4Bgus_1yUjo2ALa2abx7MBIO-ihgg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 w-full"
              aria-label="Apply to be a Mentor (opens in new tab)"
            >
              Apply to be a Mentor
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Current Tutors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutors.map((tutor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tutor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {tutor.instruments.join(", ")}
                </p>
                <p className="text-sm text-purple-600">{tutor.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutoring;
 