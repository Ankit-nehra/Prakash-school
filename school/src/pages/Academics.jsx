import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Academics() {
  const sections = [
    {
      title: "Primary School",
      description: "Foundation years with focus on literacy, numeracy, creativity, and social skills.",
      icon: "📚",
    },
    {
      title: "Middle School",
      description: "Developing critical thinking, in-depth knowledge across subjects, and co-curricular skills.",
      icon: "🧮",
    },
    {
      title: "Senior School",
      description: "Advanced programs preparing students for higher education and competitive exams.",
      icon: "🎓",
    },
    {
      title: "Extra-Curricular Activities",
      description: "Sports, arts, clubs, and creative programs for holistic development.",
      icon: "🏀",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="pt-20 max-w-7xl mx-auto px-6 py-12 space-y-12">

        <h1 className="text-4xl font-bold text-blue-900 text-center mb-8">
          Academics
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{section.icon}</span>
                <h2 className="text-2xl font-semibold text-blue-900">{section.title}</h2>
              </div>
              <p className="text-gray-700">{section.description}</p>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Academics;