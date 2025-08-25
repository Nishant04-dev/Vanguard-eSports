import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Target, 
  Users, 
  Trophy, 
  Zap, 
  Mail, 
  Instagram, 
  MessageCircle,
  ChevronDown,
  Star,
  Calendar,
  Award,
  Send
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    contact: '',
    experience: '',
    whyHire: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tournaments', 'staff', 'community', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send to support@vanguard.fun
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    setFormData({
      name: '',
      age: '',
      email: '',
      contact: '',
      experience: '',
      whyHire: ''
    });
  };

  const tournaments = [
    {
      title: "LAN EVENT ",
      date: "XX-XX-XX",
      prize: "₹XX,XXX",
      status: "Upcoming",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "MONSOON CUP",
      date: "August, 2025",
      prize: "₹21,000",
      status: "Registration Close",
      image: "https://pin.it/6FQCCLZAq"
    },
    {
      title: "Summer Showdown",
      date: "March, 2025",
      prize: "₹11,000",
      status: "Completed",
      image: "https://www.pexels.com/photo/33614154/"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Vanguard eSports
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'tournaments', 'staff', 'community', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section === 'staff' ? 'Apply for Staff' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {['home', 'about', 'tournaments', 'staff', 'community', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {section === 'staff' ? 'Apply for Staff' : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-cyan-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <Target size={80} className="mx-auto text-cyan-400 mb-6 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-fade-in">
            Vanguard eSports
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-fade-in-delay-1">
            Leading the next-gen gaming revolution.
          </p>
          <p className="text-lg md:text-xl mb-8 text-cyan-400 font-semibold animate-fade-in-delay-2">
            BGMI | Tournaments | Community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button 
              onClick={() => scrollToSection('community')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Join Our Community
            </button>
            <button 
              onClick={() => scrollToSection('staff')}
              className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105"
            >
              Apply for Staff
            </button>
          </div>
        </div>
        
        <ChevronDown 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer"
          size={32}
          onClick={() => scrollToSection('about')}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Our Story</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Founded by <span className="text-purple-400 font-semibold">Nishant Chauhan</span>, 
                  Vanguard Esports emerged from a passion for competitive gaming and community building. 
                  We focus on creating exceptional tournaments, engaging community events, and providing 
                  competitive opportunities in BGMI.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Our journey began with a vision to bridge the gap between casual gaming and professional 
                  esports, creating a platform where players of all skill levels can grow, compete, and connect.
                </p>
                
                <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 p-6 rounded-lg border border-cyan-500/20">
                  <h4 className="text-xl font-semibold mb-4 text-cyan-400">Our Mission</h4>
                  <p className="text-gray-300 leading-relaxed italic">
                    "To lead the next-gen gaming revolution by providing a platform for players to grow, 
                    compete, and connect."
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-6 rounded-lg border border-cyan-500/20 text-center">
                  <Users className="mx-auto mb-4 text-cyan-400" size={48} />
                  <h4 className="font-semibold mb-2">Community</h4>
                  <p className="text-sm text-gray-400">Building connections</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-green-900/30 p-6 rounded-lg border border-purple-500/20 text-center">
                  <Trophy className="mx-auto mb-4 text-purple-400" size={48} />
                  <h4 className="font-semibold mb-2">Tournaments</h4>
                  <p className="text-sm text-gray-400">Competitive excellence</p>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-cyan-900/30 p-6 rounded-lg border border-green-500/20 text-center">
                  <Zap className="mx-auto mb-4 text-green-400" size={48} />
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-gray-400">Next-gen gaming</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-lg border border-purple-500/20 text-center">
                  <Star className="mx-auto mb-4 text-purple-400" size={48} />
                  <h4 className="font-semibold mb-2">Excellence</h4>
                  <p className="text-sm text-gray-400">Quality events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Tournaments & Updates
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tournaments.map((tournament, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="relative">
                  <img 
                    src={tournament.image} 
                    alt={tournament.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    tournament.status === 'Upcoming' ? 'bg-cyan-500 text-white' :
                    tournament.status === 'Registration Open' ? 'bg-green-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {tournament.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{tournament.title}</h3>
                  <div className="flex items-center mb-2 text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-300">
                    <Award size={16} className="mr-2" />
                    <span className="text-sm">Prize Pool: <span className="text-green-400 font-semibold">{tournament.prize}</span></span>
                  </div>
                  <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-400">Current Leaderboard</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="pb-3 text-cyan-400">Rank</th>
                    <th className="pb-3 text-cyan-400">Team</th>
                    <th className="pb-3 text-cyan-400">Points</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-3 text-yellow-400 font-bold">1</td>
                    <td className="py-3">Team TBR</td>
                    <td className="py-3 text-green-400">58</td>
                    
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-3 text-gray-300 font-bold">2</td>
                    <td className="py-3">Team ZENITHXMISTAKE101</td>
                    <td className="py-3 text-green-400">31</td>
                    
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="py-3 text-orange-400 font-bold">3</td>
                    <td className="py-3">Team XEBEC</td>
                    <td className="py-3 text-green-400">31</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Recruitment Section */}
      <section id="staff" class="py-20 bg-gray-800/50">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Join Our Team
      </h2>
      <p class="text-center text-gray-300 mb-12">
        Ready to be part of the gaming revolution? We're looking for passionate individuals to help us grow the eSports community.
      </p>

      <!-- Web3Forms Integration -->
      <form action="https://api.web3forms.com/submit" method="POST" class="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-cyan-500/20">
        
        <!-- Required Web3Forms Access Key -->
        <input type="hidden" name="access_key" value="5e8bcf4e-df0b-46e3-a8a8-db30983882b1">

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-cyan-400 mb-2">Name *</label>
            <input
              type="text"
              name="name"
              required
              class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
            />
          </div>
          <div>
            <label class="block text-cyan-400 mb-2">Age *</label>
            <input
              type="number"
              name="age"
              required
              class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-cyan-400 mb-2">Email *</label>
            <input
              type="email"
              name="email"
              required
              class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
            />
          </div>
          <div>
            <label class="block text-cyan-400 mb-2">Contact Number *</label>
            <input
              type="tel"
              name="contact"
              required
              class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
            />
          </div>
        </div>

        <div class="mb-6">
          <label class="block text-cyan-400 mb-2">Past Experience</label>
          <textarea
            name="experience"
            rows="4"
            class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
            placeholder="Tell us about your gaming and organizational experience..."
          ></textarea>
        </div>

        <div class="mb-8">
          <label class="block text-cyan-400 mb-2">Why should we hire you? *</label>
          <textarea
            name="whyHire"
            required
            rows="4"
            class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white"
            placeholder="What unique value do you bring to Vanguard eSports?"
          ></textarea>
        </div>

        <!-- Redirect URL after submission (optional) -->
        <input type="hidden" name="redirect" value="https://yourwebsite.com/thank-you">

        <button
          type="submit"
          class="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          Submit Application
        </button>
      </form>
    </div>
  </div>
</section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Community
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Join the Revolution</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our community is the heart of Vanguard eSports. Connect with like-minded gamers, 
                participate in events, and stay updated with the latest tournaments and news.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                From casual players to competitive professionals, everyone has a place in our community. 
                Join us and be part of the gaming revolution!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://instagram.com/vanguarddesp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="mr-2" size={20} />
                  Follow on Instagram
                </a>
                <button className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105">
                  <MessageCircle className="mr-2" size={20} />
                  Join Discord
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Gaming Community"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.pexels.com/photos/7915012/pexels-photo-7915012.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Esports Tournament"
                className="rounded-lg hover:scale-105 transition-transform duration-300 mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Gaming Setup"
                className="rounded-lg hover:scale-105 transition-transform duration-300 -mt-8"
              />
              <img 
                src="https://images.pexels.com/photos/7915270/pexels-photo-7915270.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team Competition"
                className="rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-12">
              Ready to join the gaming revolution? Have questions about our tournaments? 
              We'd love to hear from you!
            </p>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg border border-cyan-500/20">
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <div className="flex items-center">
                  <Mail className="text-cyan-400 mr-3" size={24} />
                  <div>
                    <p className="text-gray-300 text-sm">Email us at</p>
                    <a 
                      href="mailto:support@vanguardesport.fun"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      support@vanguardesport.fun
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Instagram className="text-purple-400 mr-3" size={24} />
                  <div>
                    <p className="text-gray-300 text-sm">Follow us</p>
                    <a 
                      href="https://instagram.com/vanguarddesp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                    >
                      @vanguarddesp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-cyan-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Vanguard eSports
              </h3>
              <p className="text-gray-400 text-sm mt-2">Leading the next-gen gaming revolution</p>
            </div>
            
            <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
              {['Home', 'About', 'Tournaments', 'Staff Recruitment', 'Community', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' recruitment', '').replace(' ', ''))}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © Vanguard Esports 2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
