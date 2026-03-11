import { Link } from "react-router-dom";

import gallery1 from "../../assets/images/event1.png";
import gallery2 from "../../assets/images/classroom1.png";
import gallery3 from "../../assets/images/sport1.png";
import gallery4 from "../../assets/images/campus1.png";

function GalleryPreview() {
  const images = [gallery1, gallery2, gallery3, gallery4];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
          School Gallery
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {images.map((img, index) => (
            <Link key={index} to="/gallery">
              <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                  className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-semibold">View</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
              View Full Gallery
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;