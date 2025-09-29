import React, { useState } from "react";

export default function AddCourseModal({ onClose, onCourseAdded }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:5000/api/courses", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setTitle("");
        setCategory("");
        setDescription("");
        setPrice("");
        setImage(null);
        if (onCourseAdded) onCourseAdded();
        onClose();
      }
    } catch (err) {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Course</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter course title"
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              >
                <option value="">Select category</option>
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Enter course description"
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
              rows="3"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="$ 0.00"
              className="w-full border rounded-lg px-3 py-2 mt-1 text-sm"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <label className="block text-sm font-medium mb-2">Course Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={e => setImage(e.target.files[0])}
                className="w-full"
              />
              <p className="text-gray-500 text-sm mt-2">
                Upload PNG, JPG, GIF up to 10MB
              </p>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <p className="text-gray-500 text-sm">
                Upload a file or drag and drop <br />
                <span className="text-red-600">PDF, ZIP, MP4 up to 1GB</span>
              </p>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
