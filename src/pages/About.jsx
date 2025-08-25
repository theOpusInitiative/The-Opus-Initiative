import  { User } from 'lucide-react';

function About() {
  const team = [
    { name: "Drishti M", role: "Founder and Executive Director", color: "bg-purple-500" },
    { name: "Catherine W", role: "Director of Community and Outreach", color: "bg-blue-500" },
    { name: "Rohit S", role: "Director of Innovation and Program Development", color: "bg-green-500" },
    { name: "Jacqueline B", role: "Director of Events and Performances", color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">About The Opus Initiative</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Founded by passionate young musicians who believe that every student should have access 
            to high-quality music education and performance opportunities — regardless of background, 
            location, or financial status.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p>
              We believe that talent is everywhere, but opportunity is not. The Opus Initiative was 
              created to bridge this gap through youth-led programs that are built on passion, 
              mentorship, and community.
            </p>
            <p>
              Our mission is simple yet powerful: to make music education free, fun, and accessible 
              for every student. Through our various programs, we connect experienced student 
              musicians with those who want to learn, creating a supportive community where 
              everyone can grow and thrive.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className={`${member.color} w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <User className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
 