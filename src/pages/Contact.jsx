import  { Mail, Instagram, Youtube, Twitter } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-700 mb-8">
              Have questions about our programs? Want to get involved? We'd love to hear from you! 
              Reach out through any of our social media channels or send us an email.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-purple-600 mr-3" />
                <a href="mailto:theopusinitiative@gmail.com" 
                   className="text-purple-600 hover:underline">
                  theopusinitiative@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Instagram className="h-6 w-6 text-purple-600 mr-3" />
                <a href="https://instagram.com/theopusinitiative" 
                   className="text-purple-600 hover:underline">
                  @theopusinitiative
                </a>
              </div>
              
              <div className="flex items-center">
                <Youtube className="h-6 w-6 text-purple-600 mr-3" />
                <a href="https://youtube.com/@theopusinitiative" 
                   className="text-purple-600 hover:underline">
                  @theopusinitiative
                </a>
              </div>
              
              <div className="flex items-center">
                <Twitter className="h-6 w-6 text-purple-600 mr-3" />
                <a href="https://twitter.com/Opus_Initiative" 
                   className="text-purple-600 hover:underline">
                  @Opus_Initiative
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600">
                  <option>General Inquiry</option>
                  <option>Student Application</option>
                  <option>Mentor Application</option>
                  <option>Partnership Opportunity</option>
                  <option>Event Information</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-600"></textarea>
              </div>
              
              <button type="submit" 
                      className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
 