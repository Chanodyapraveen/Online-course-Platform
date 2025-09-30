import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Users, UserCheck, DollarSign, BarChart3, Bell } from "lucide-react";

const initialCourses = [
  {
    id: "#12345",
    title: "Introduction to Programming",
    instructor: "Dr. Eleanor Harper",
    category: "Computer Science",
    price: "$49.99",
    enrolled: 150,
    status: "Active",
  },
  {
    id: "#67890",
    title: "Advanced Calculus",
    instructor: "Prof. Samuel Bennett",
    category: "Mathematics",
    price: "$79.99",
    enrolled: 85,
    status: "Active",
  },
  {
    id: "#24680",
    title: "Creative Writing Workshop",
    instructor: "Ms. Olivia Carter",
    category: "Arts & Humanities",
    price: "$39.99",
    enrolled: 200,
    status: "Pending",
  },
  {
    id: "#13579",
    title: "Digital Marketing Fundamentals",
    instructor: "Mr. Ethan Davis",
    category: "Business",
    price: "$59.99",
    enrolled: 120,
    status: "Draft",
  },
  {
    id: "#98765",
    title: "Spanish for Beginners",
    instructor: "Sra. Isabella Rodriguez",
    category: "Languages",
    price: "$29.99",
    enrolled: 250,
    status: "Active",
  },
];

export default function AdminCourse() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(initialCourses);
  const [approvalRequests, setApprovalRequests] = useState([
    {
      id: "#11223",
      title: "Data Science Essentials",
      instructor: "Dr. Liam Walker",
      category: "Data Science",
      price: "$69.99",
    },
    {
      id: "#44556",
      title: "Graphic Design Masterclass",
      instructor: "Ms. Chloe Turner",
      category: "Design",
      price: "$89.99",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: '',
    instructor: '',
    category: '',
    description: '',
    price: '',
    thumbnail: null,
    content: null,
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setForm({ title: '', instructor: '', category: '', description: '', price: '', thumbnail: null, content: null });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleApproveCourse = (courseId) => {
    const courseToApprove = approvalRequests.find(course => course.id === courseId);
    if (courseToApprove) {
      // Add to main courses list with Active status
      const approvedCourse = {
        ...courseToApprove,
        status: "Active",
        enrolled: 0 // Start with 0 enrollments
      };
      setCourses([approvedCourse, ...courses]);
      
      // Remove from approval requests
      setApprovalRequests(approvalRequests.filter(course => course.id !== courseId));
    }
  };

  const handleRejectCourse = (courseId) => {
    // Simply remove from approval requests
    setApprovalRequests(approvalRequests.filter(course => course.id !== courseId));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: `#${Math.floor(Math.random() * 90000) + 10000}`,
      title: form.title,
      instructor: form.instructor,
      category: form.category,
      price: `$${parseFloat(form.price).toFixed(2)}`,
      description: form.description,
      thumbnail: form.thumbnail,
      content: form.content,
      status: "Pending Approval"
    };
    setApprovalRequests([newCourse, ...approvalRequests]);
    handleCloseModal();
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <span className="text-lg font-bold text-gray-800">EduPlatform</span>
        </div>
        <nav className="flex-1 py-4 space-y-1">
          <button 
            onClick={() => navigate('/admin-dashboard')}
            className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg w-full text-left"
          >
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </button>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
            <Users size={20} />
            <span>Students</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
            <UserCheck size={20} />
            <span>Instructors</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 bg-red-50 text-red-600 rounded-lg font-medium">
            <BookOpen size={20} />
            <span>Courses</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
            <DollarSign size={20} />
            <span>Revenue</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-end px-8">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
            <span className="sr-only">Notifications</span>
            <Bell size={24} className="text-gray-500" />
          </button>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
        </header>

        {/* Page Title and Add Button */}
        <div className="flex items-center justify-between px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Manage Courses</h1>
          <button
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md shadow transition"
            onClick={handleOpenModal}
          >
            <span className="text-xl">+</span> Add New Course
          </button>
      {/* Modal for Add Course */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input 
                    name="title" 
                    value={form.title} 
                    onChange={handleChange} 
                    required 
                    placeholder="Enter course title" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select 
                    name="category" 
                    value={form.category} 
                    onChange={handleChange} 
                    required 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="Programming">Programming</option>
                    <option value="Design">Design</option>
                    <option value="Business">Business</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Arts & Humanities">Arts & Humanities</option>
                  </select>
                </div>
              </div>

              {/* Instructor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                <input 
                  name="instructor" 
                  value={form.instructor} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter instructor name" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  name="description" 
                  value={form.description} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter course description" 
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none" 
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input 
                    name="price" 
                    value={form.price} 
                    onChange={handleChange} 
                    required 
                    placeholder="0.00" 
                    type="number"
                    min="0"
                    step="0.01"
                    className="w-full border border-gray-300 rounded-lg pl-8 pr-4 py-3 focus:ring-2 focus:ring-red-500 focus:border-transparent" 
                  />
                </div>
              </div>

              {/* Upload Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upload Thumbnail */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Thumbnail</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition-colors">
                    <div className="mb-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="file"
                      name="thumbnail"
                      onChange={handleFileChange}
                      accept=".png,.jpg,.jpeg,.gif"
                      className="hidden"
                      id="thumbnail-upload"
                    />
                    <label htmlFor="thumbnail-upload" className="cursor-pointer">
                      <span className="text-red-600 font-medium">Upload a file</span>
                      <span className="text-gray-500"> or drag and drop</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>

                {/* Upload Content */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Upload Content</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-500 transition-colors">
                    <div className="mb-4">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <input
                      type="file"
                      name="content"
                      onChange={handleFileChange}
                      accept=".pdf,.zip,.mp4"
                      className="hidden"
                      id="content-upload"
                    />
                    <label htmlFor="content-upload" className="cursor-pointer">
                      <span className="text-red-600 font-medium">Upload a file</span>
                      <span className="text-gray-500"> or drag and drop</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1">PDF, ZIP, MP4 up to 1GB</p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Add Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>

        {/* All Courses Table */}
        <div className="bg-white rounded-xl shadow border border-gray-100 mx-8 mb-8 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">All Courses</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 font-semibold border-b">
                  <th className="py-3 px-4 text-left">Course ID</th>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Instructor</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Enrolled</th>
                  <th className="py-3 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((c, idx) => (
                  <tr key={c.id} className="border-b last:border-0">
                    <td className="py-3 px-4 text-gray-500">{c.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{c.title}</td>
                    <td className="py-3 px-4 text-gray-500">{c.instructor}</td>
                    <td className="py-3 px-4 text-gray-500">{c.category}</td>
                    <td className="py-3 px-4 text-gray-500">{c.price}</td>
                    <td className="py-3 px-4 text-gray-500">{c.enrolled}</td>
                    <td className="py-3 px-4">
                      <select
                        value={c.status}
                        onChange={e => {
                          const newStatus = e.target.value;
                          setCourses(prev => prev.map((course, i) => i === idx ? { ...course, status: newStatus } : course));
                        }}
                        className={
                          "rounded-full px-3 py-1 text-xs font-semibold " +
                          (c.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : c.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700")
                        }
                      >
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Course Approval Requests Table */}
        <div className="bg-white rounded-xl shadow border border-gray-100 mx-8 mb-8 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Course Approval Requests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-gray-500 font-semibold border-b">
                  <th className="py-3 px-4 text-left">Course ID</th>
                  <th className="py-3 px-4 text-left">Title</th>
                  <th className="py-3 px-4 text-left">Instructor</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Price</th>
                  <th className="py-3 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {approvalRequests.map((r) => (
                  <tr key={r.id} className="border-b last:border-0">
                    <td className="py-3 px-4 text-gray-500">{r.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{r.title}</td>
                    <td className="py-3 px-4 text-gray-500">{r.instructor}</td>
                    <td className="py-3 px-4 text-gray-500">{r.category}</td>
                    <td className="py-3 px-4 text-gray-500">{r.price}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button 
                        onClick={() => handleApproveCourse(r.id)}
                        className="bg-green-100 text-green-700 px-4 py-1 rounded-md font-semibold hover:bg-green-200 transition"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleRejectCourse(r.id)}
                        className="bg-red-100 text-red-700 px-4 py-1 rounded-md font-semibold hover:bg-red-200 transition"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}