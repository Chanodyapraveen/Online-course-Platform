import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import StudentReviews from '../components/StudentReviews';

const InfoRow = ({ label, value }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-gray-600 text-sm">{label}</span>
    <span className="text-gray-900 font-medium text-sm">{value}</span>
  </div>
);

const Bullet = ({ children }) => (
  <li className="pl-5 relative text-sm leading-6 text-gray-700">
    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-gray-400"></span>
    {children}
  </li>
);

const MentorCard = ({ name, title, img, bg = '#F3F2EE' }) => (
  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md w-full max-w-sm">
    <div className="h-64 flex items-end justify-center" style={{ backgroundColor: bg }}>
      <img src={img} alt={name} className="h-60 object-contain" />
    </div>
    <div className="bg-[white] text-black text-center py-4">
      <div className="font-semibold text-[18px]">{name}</div>
      <div className="text-black-300 text-sm mt-1">{title}</div>
    </div>
  </div>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5v5l2.5 2.5" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.5 10a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0Z" stroke="#6b7280" strokeWidth="1.5"/>
  </svg>
);

const LecturesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="14" height="12" rx="2" stroke="#6b7280" strokeWidth="1.5"/>
    <path d="M3 8h14" stroke="#6b7280" strokeWidth="1.5"/>
  </svg>
);

const CourseCard = ({ image, title, category, price, duration, lectures }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_6px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]">
    <div className="h-48 w-full relative overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{category}</span>
        <div className="text-green-600 font-semibold">${price.toFixed ? price.toFixed(2) : price}</div>
      </div>
      <h4 className="mt-3 font-semibold text-gray-900 text-[16px] leading-tight">{title}</h4>
      <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2"><ClockIcon /><span>{duration}</span></div>
        <div className="flex items-center gap-2"><LecturesIcon /><span>{lectures} lectures</span></div>
      </div>
    </div>
  </div>
);

const CourseDetailPage = () => {
  return (
    <div className="bg-white min-h-screen text-[#0c1a14]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500">Home / Course / Course Details</div>

        {/* Title */}
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0b1b15] tracking-tight">UX Research & Usability Testing</h1>

        {/* Hero */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 items-start">
          <div className="rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm">
            <img src="/PopularCourses/p4.png" className="w-full h-auto object-cover" alt="Course banner" />
          </div>

          {/* Sidebar Card */}
          <aside className="bg-white rounded-2xl border border-gray-100 shadow-lg p-5 sticky top-6">
            <div className="text-2xl font-semibold text-[#0b1b15]">$180.00</div>
            <div className="mt-4 h-px bg-gray-100" />
            <div className="mt-2">
              <InfoRow label="Level" value="Intermediate" />
              <InfoRow label="Lessons" value="25+ Videos" />
              <InfoRow label="Duration" value="3h 25m" />
              <InfoRow label="Enrolled" value="356+" />
              <InfoRow label="Last Update" value="October 8, 2024" />
            </div>
            <button className="mt-5 w-full bg-[#011813] text-white py-3 rounded-full font-medium hover:bg-black transition-colors">Start Learning</button>
          </aside>
        </div>

        {/* About */}
        <section className="mt-12">
          <h2 className="text-[18px] md:text-[20px] font-semibold text-[#0c6b4f]">About the Course</h2>
          <p className="mt-3 text-[14px] md:text-[15px] text-gray-700 leading-7 max-w-4xl">
            Dive into UI/UX fundamentals with a practical path from research to validated designs.
            Build strong foundations in HTML, CSS, and JavaScript, then apply usability testing
            methods to refine interfaces. This course blends concepts with hands‑on projects so you
            can deliver accessible, performant, and user‑focused experiences.
          </p>
          <div className="mt-6 h-px bg-gray-100" />
        </section>

        {/* What you'll learn */}
        <section className="mt-10">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0c6b4f]">What You’ll Learn</h3>
          <ul className="mt-4 space-y-3 list-none">
            <Bullet><span className="font-semibold text-gray-900">HTML Fundamentals:</span> Structure and semantics with HTML tags, attributes, and elements.</Bullet>
            <Bullet><span className="font-semibold text-gray-900">CSS Essentials:</span> Typography, colors, flexbox, and grid for modern layouts.</Bullet>
            <Bullet><span className="font-semibold text-gray-900">JavaScript Basics:</span> Variables, functions, loops, events, and DOM manipulation.</Bullet>
            <Bullet><span className="font-semibold text-gray-900">Responsive Design:</span> Techniques to adapt to various screens and devices.</Bullet>
            <Bullet><span className="font-semibold text-gray-900">Project‑Based Learning:</span> Build real‑world projects to showcase your skills.</Bullet>
          </ul>
          <div className="mt-6 h-px bg-gray-100" />
        </section>

        {/* Requirements */}
        <section className="mt-10">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0c6b4f]">Requirements</h3>
          <ul className="mt-4 space-y-3 list-none">
            <Bullet><span className="font-semibold text-gray-900">Computer & Internet Access:</span> Stable connection on a laptop or desktop.</Bullet>
            <Bullet><span className="font-semibold text-gray-900">Code Editor:</span> VS Code (recommended) or your preferred editor.</Bullet>
            <Bullet><span className="font-semibold text-gray-900">Basic Computer Skills:</span> Installing software, file navigation, and web usage.</Bullet>
            <Bullet><span className="font-semibold text-gray-900">No Prior Coding Required:</span> Suitable for beginners.</Bullet>
          </ul>
          <div className="mt-6 h-px bg-gray-100" />
        </section>

        {/* Curriculum (condensed) */}
        <section className="mt-10">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#0c6b4f]">Course Curriculum</h3>
          <div className="mt-4 space-y-8">
            {[
              'Introduction to HTML, CSS, and JavaScript',
              'HTML Basics',
              'CSS Fundamentals',
              'JavaScript Essentials',
              'Building Interactive Web Pages',
              'Final Project: Building a Complete Web Page'
            ].map((title, idx) => (
              <div key={idx}>
                <h4 className="text-[16px] font-semibold text-[#103b2f]">{title}</h4>
                <ul className="mt-3 space-y-2 list-none">
                  <Bullet>Overview of Web Development.</Bullet>
                  <Bullet>Setting Up Your Development Environment.</Bullet>
                  <Bullet>HTML, CSS, and JavaScript Introduction.</Bullet>
                  <Bullet>Integrating HTML, CSS, and JavaScript for Interactivity.</Bullet>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 h-px bg-gray-100" />
        </section>

        {/* Mentors */}
        <section className="mt-10">
          <h3 className="font-semibold text-[#0b1b15]">Course Mentors</h3>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <MentorCard name="Matthew John" title="Software Engineer" img="/bestTalent/Mathew.png" bg="#F5EED7" />
            <MentorCard name="Joseph Andrew" title="UI/UX Designer" img="/bestTalent/Adam.png" bg="#F9D9E7" />
          </div>
        </section>

        {/* More Courses */}
        <section className="mt-16">
          <h3 className="text-center text-2xl font-semibold text-[#0b1b15]">More Courses</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <CourseCard image="/PopularCourses/p1.png" title="HTML, CSS, and JavaScript" category="Development" price={190} duration="4hr 35min" lectures={30} />
            <CourseCard image="/PopularCourses/p2.png" title="Stakeholders Management" category="Project Management" price={160} duration="2hr 35min" lectures={20} />
            <CourseCard image="/PopularCourses/p3.png" title="Google Ads & PPC Campaigns" category="Marketing" price={140} duration="3hr 35min" lectures={25} />
          </div>

          <div className="mt-10 flex justify-center">
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-300 bg-white shadow-sm hover:shadow-md transition">
              <span className="text-sm font-medium text-gray-800">Explore All Courses</span>
              <span className="w-8 h-8 rounded-full bg-gray-900 text-white grid place-items-center">→</span>
            </button>
          </div>
        </section>

        {/* Reviews */}
        <section className="mt-14">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Happy Students Say About Our Courses</h3>
          </div>
          <StudentReviews />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetailPage;


