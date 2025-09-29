import React, { useEffect, useState } from "react";
import TeamSection from "../components/teamsection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function CourseSection() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(Array.isArray(data) ? data : []));
  }, []);

  return (
    <>
      <Header />
      <section className="relative w-full min-h-screen bg-white flex flex-col items-center pt-8 md:pt-12 lg:pt-16">
        <div className="relative w-full max-w-[95vw] xl:max-w-[1240px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center mb-4 text-base font-outfit text-[#011813]">
            <span className="font-normal">Home</span>
            <span className="mx-2">/</span>
            <span className="font-normal text-[#009D77]">Courses</span>
          </div>
          {/* Section Title Block */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4 md:gap-0">
            <h1 className="text-black font-outfit font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-full md:max-w-3xl">
              We Offer an Outstanding<br />Learning Experience
            </h1>
            {/* Dot Image */}
            <svg width="108" height="46" className="hidden md:block" viewBox="0 0 108 46" fill="none">
              {[0, 19, 38, 57, 76, 96].map((x) =>
                [0, 21, 45].map((y) => (
                  <circle key={`${x}-${y}`} cx={x + 6} cy={y + 6} r="4" fill="#8D8E8F" />
                ))
              )}
            </svg>
          </div>
          {/* Course Cards Grid Section */}
          <div className="w-full flex flex-col items-center mt-8 md:mt-12 lg:mt-16">
            <h2 className="font-outfit font-semibold text-4xl md:text-5xl text-[#011813] text-center mb-8">
              Explore Our All Courses
            </h2>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-6 md:mb-10">
              <button className="flex items-center bg-[#009D77] text-white font-outfit font-medium px-6 py-3 rounded-full border border-[#009D77]">
                All Categories
              </button>
              <button className="flex items-center bg-white text-[#4E5255] font-outfit font-medium px-6 py-3 rounded-full border border-[#E7E7E8]">
                Development
              </button>
              <button className="flex items-center bg-white text-[#4E5255] font-outfit font-medium px-6 py-3 rounded-full border border-[#E7E7E8]">
                UI/UX Design
              </button>
              <button className="flex items-center bg-white text-[#4E5255] font-outfit font-medium px-6 py-3 rounded-full border border-[#E7E7E8]">
                Project Management
              </button>
              <button className="flex items-center bg-white text-[#4E5255] font-outfit font-medium px-6 py-3 rounded-full border border-[#E7E7E8]">
                Accounting
              </button>
              <button className="flex items-center bg-white text-[#4E5255] font-outfit font-medium px-6 py-3 rounded-full border border-[#E7E7E8]">
                Marketing
              </button>
            </div>
            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-full xl:max-w-[1200px] mx-auto mb-8 md:mb-12">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col">
                  <img
                    src={course.imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-4 py-2 rounded-lg text-base font-outfit font-medium bg-[#F0F0F0] text-[#011813]">
                      {course.category || "Uncategorized"}
                    </span>
                    <span className="font-outfit font-semibold text-xl text-[#009D77]">
                      ${course.price || "Free"}
                    </span>
                  </div>
                  <h3 className="font-outfit font-medium text-lg text-[#011813] mb-2">{course.title}</h3>
                  <p className="text-[#4E5255] font-outfit text-base mb-2">{course.description}</p>
                  {/* Optionally add more info here */}
                  <a
                    href="#"
                    className="flex items-center bg-transparent border border-[#011813] rounded-full px-6 py-3 text-[#011813] font-outfit font-medium text-base gap-2 hover:bg-[#011813] hover:text-white transition mt-2"
                  >
                    View Details
                    <span className="ml-2 flex items-center justify-center w-10 h-10 bg-[#011813] rounded-full">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </span>
                  </a>
                </div>
              ))}
            </div>
            {/* View More Courses Button */}
            <div className="flex justify-center mt-8 mb-16">
              <button className="flex items-center border border-[#011813] rounded-full px-8 py-4 text-[#011813] font-outfit font-medium text-lg hover:bg-[#011813] hover:text-white transition-all duration-300">
                View More Courses
              </button>
            </div>
          </div>
        </div>
        <TeamSection />
        <Footer />
      </section>
    </>
  );
}