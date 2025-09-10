import React from "react";

const mentors = [
  {
    name: "Matthew Ryan",
    role: "Product Designer",
    bg: "bg-pink-200",
    img: "/images/matthew.png",
  },
  {
    name: "Daniel Joseph",
    role: "Software Engineer",
    bg: "bg-pink-200",
    img: "/images/daniel.png",
  },
  {
    name: "Adam Bennett",
    role: "Digital Marketer",
    bg: "bg-yellow-100",
    img: "/images/adam.png",
  },
  {
    name: "James Michael",
    role: "Digital Marketer",
    bg: "bg-orange-100",
    img: "/images/james.png",
  },
];

const socialIcons = [
  { name: "Twitter", icon: "/icons/twitter.svg" },
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "LinkedIn", icon: "/icons/linkedin.svg" },
  { name: "Instagram", icon: "/icons/instagram.svg" },
];

export default function TeamSection() {
  return (
    <section className="relative w-full bg-[#011813] py-24 flex flex-col items-center">
      <div className="max-w-6xl w-full px-4">
        {/* Title Block */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-white font-outfit font-semibold text-4xl leading-tight">
            Learn from the Best Talent<br />in the Industry
          </h2>
          <a
            href="#"
            className="flex items-center bg-white rounded-full px-8 py-3 font-outfit font-medium text-[#011813] text-base shadow transition hover:bg-gray-100"
          >
            View All Mentors
            <span className="ml-4 flex items-center justify-center w-11 h-11 bg-[#011813] rounded-full">
              <svg width="22" height="22" fill="none">
                <path d="M6 11h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
        {/* Mentor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, idx) => (
            <div
              key={mentor.name}
              className={`relative flex flex-col items-center ${mentor.bg} rounded-full h-[500px]`}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden mt-12 mb-6">
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-center mb-4">
                <h5 className="font-outfit font-medium text-xl text-[#011813]">{mentor.name}</h5>
                <p className="font-outfit text-base text-[#4E5255]">{mentor.role}</p>
              </div>
              <div className="flex justify-center gap-4 absolute bottom-8 left-0 right-0">
                {socialIcons.map((icon) => (
                  <a
                    key={icon.name}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white bg-white hover:bg-gray-100"
                  >
                    <img src={icon.icon} alt={icon.name} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}