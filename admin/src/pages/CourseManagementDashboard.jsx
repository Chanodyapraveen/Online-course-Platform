import React, { useState, useEffect } from 'react';
import {  Plus } from 'lucide-react';
import AddCourseModal from "../components/AddCourseModal"; 
import Sidebar from "../components/SidebarComponent";
import AdminHeader from '../components/AdminHeader';


const CourseManagementDashboard = () => {
  // Remove course
  const handleRemoveCourse = (id) => {
    fetch(`http://localhost:5000/api/courses/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (res.ok) {
          setCourses((prev) => prev.filter((c) => c.id !== id));
        }
      });
  };
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [openModal, setOpenModal] = useState(false);

  // Refetch courses from backend
  const fetchCourses = () => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => setCourses(Array.isArray(data) ? data : []));
  };

  // Fetch all courses
  useEffect(() => {
    fetchCourses();
  }, []);


  // Add new course
  const handleAddCourse = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
      .then(res => res.json())
      .then(course => setCourses(prev => Array.isArray(prev) ? [...prev, course] : [course]));
    setTitle('');
    setDescription('');
  };

  // Approve course
  const handleApprove = (id) => {
    fetch(`http://localhost:5000/api/courses/${id}/approve`, { method: 'PUT' })
      .then(res => res.json())
      .then(updatedCourse => {
        setCourses(prev => Array.isArray(prev) ? prev.map(c => c.id === id ? updatedCourse : c) : [updatedCourse]);
      });
  };

  return (
    <>
      <AdminHeader />
   
    <div className="flex min-h-screen bg-gray-50">
      
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Manage Courses</h1>
          <button 
            onClick={() => setOpenModal(true)}  // ✅ open modal
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <Plus size={16} />
            <span>Add New Course</span>
          </button>
        </div>

        {/* All Courses Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">All Courses</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrolled</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(courses) && courses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{course.instructor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{course.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{course.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{course.enrolled}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
                          onClick={() => handleRemoveCourse(course.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>


        {/* Course Approval Requests Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Course Approval Requests</h2>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(courses) && courses.filter(c => !c.approved).map(course => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{course.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{course.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{course.instructor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{course.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{course.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                        <button
                          onClick={() => handleApprove(course.id)}
                          className="bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleApprove(course.id, 'reject')}
                          className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
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

      {/* Add Course Modal */}
  {openModal && <AddCourseModal onClose={() => setOpenModal(false)} onCourseAdded={fetchCourses} />}
    </div>
     </>
  );
};

export default CourseManagementDashboard;
