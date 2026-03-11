import notices from "../../data/notices";

function NoticeBoard() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">
          Latest Notices
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="border p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2">{notice.title}</h3>
              <p className="text-gray-500 text-sm">{notice.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NoticeBoard;