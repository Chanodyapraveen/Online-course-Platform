import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CourseSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#011813] flex flex-col items-center py-16">
      {/* Container */}
      <div className="relative w-full max-w-[1240px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center mb-4 text-base font-outfit text-[#011813]">
          <span className="font-normal">Home</span>
          <span className="mx-2">/</span>
          <span className="font-normal text-[#009D77]">Courses</span>
        </div>
        {/* Section Title Block */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-white font-outfit font-bold text-5xl md:text-7xl leading-tight max-w-3xl">
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
        {/* Course Card */}
        <div className="relative w-full max-w-[1200px] mx-auto bg-white/5 border border-[#E7E7E8] rounded-2xl flex flex-row items-center p-8 gap-8 shadow-lg">
          {/* Image Wrapper */}
          <div className="w-[376px] h-[376px] rounded-xl overflow-hidden flex-shrink-0 relative bg-black/10">
            <img
              src="/assets/html-css-js-course.jpg"
              alt="HTML CSS JS Course"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Card Body */}
          <div className="flex-1 flex flex-col justify-between h-full py-2">
            {/* Badge Block */}
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-[#F0F0F0] text-[#011813] font-outfit font-medium px-4 py-2 rounded-lg text-base">
                Development
              </span>
              <span className="flex items-center bg-[#011813] text-white font-outfit font-medium px-4 py-2 rounded-full text-base gap-2">
                <span className="flex items-center justify-center w-5 h-5">
                  {/* Fire Icon */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#FD5133" />
                    <circle cx="10" cy="14" r="5" fill="#FEBA22" />
                  </svg>
                </span>
                Popular
              </span>
            </div>
            {/* Title & Description */}
            <div className="mb-4">
              <h3 className="text-[#011813] font-outfit font-semibold text-2xl md:text-3xl mb-2">
                HTML, CSS, and JavaScript
              </h3>
              <p className="text-[#4E5255] font-outfit text-base max-w-lg">
                Gain UI design mastery with hands-on expert mentorship, refining your skills through personalized guidance and feedback.
              </p>
            </div>
            {/* Info Block */}
            <div className="flex items-center gap-8 mb-4">
              <div className="flex items-center gap-2 text-[#4E5255] font-outfit text-base">
                {/* Clock Icon */}
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="9" stroke="#4E5255" strokeWidth="1.5" />
                  <path d="M10 5v5l3 3" stroke="#4E5255" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                4hr 35min
              </div>
              <div className="flex items-center gap-2 text-[#4E5255] font-outfit text-base">
                {/* Lectures Icon */}
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <rect x="3" y="5" width="14" height="10" rx="2" stroke="#4E5255" strokeWidth="1.5" />
                  <rect x="7" y="9" width="6" height="2" rx="1" fill="#4E5255" />
                </svg>
                30 lectures
              </div>
            </div>
            {/* Divider */}
            <div className="w-full h-px bg-[#E7E7E8] mb-4"></div>
            {/* Price & Button Block */}
            <div className="flex items-center justify-between">
              <span className="text-[#009D77] font-outfit font-semibold text-2xl md:text-3xl">
                $190.00
              </span>
              <a
                href="#"
                className="flex items-center bg-transparent border border-[#011813] rounded-full px-6 py-3 text-[#011813] font-outfit font-medium text-base gap-2 hover:bg-[#011813] hover:text-white transition"
              >
                View Details
                <span className="ml-2 flex items-center justify-center w-10 h-10 bg-[#011813] rounded-full">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}