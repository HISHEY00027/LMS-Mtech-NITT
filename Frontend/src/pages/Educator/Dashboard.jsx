import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Dashboard() {
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.user);
  const { creatorCourseData } = useSelector((state) => state.course);

  const courseProgressData =
    creatorCourseData?.map((course) => ({
      name: course.title?.slice(0, 10) + "...",
      lectures: course.lectures?.length || 0,
    })) || [];

  const enrollData =
    creatorCourseData?.map((course) => ({
      name: course.title?.slice(0, 10) + "...",
      enrolled: course.enrolledStudents?.length || 0,
    })) || [];

  const totalEarnings =
    creatorCourseData?.reduce((sum, course) => {
      const studentCount = course.enrolledStudents?.length || 0;
      return sum + (course.price || 0) * studentCount;
    }, 0) || 0;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <FaArrowLeftLong
        className="w-6 h-6 absolute top-10 left-10 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="w-full px-6 py-10 bg-gray-50 space-y-10">
        {/* Welcome Section */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">

          {/* Avatar */}
          <div className="w-28 h-28 flex-shrink-0">
            {userData?.photoUrl ? (
              <img
                src={userData.photoUrl}
                alt="Educator"
                className="w-full h-full rounded-full object-cover border-4 border-black shadow-md"
              />
            ) : (
              <div className="w-full h-full rounded-full border-4 border-black shadow-md bg-white flex items-center justify-center">
                <span className="text-5xl font-bold text-black">
                  {userData?.name?.charAt(0).toUpperCase() || "E"}
                </span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, {userData?.name || "Educator"} 👋
            </h1>

            <h2 className="text-xl font-semibold text-gray-800">
              Total Earnings:
              <span className="font-normal text-gray-900">
                {" "}
                ₹{totalEarnings.toLocaleString()}
              </span>
            </h2>

            <p className="text-gray-600">
              {userData?.description ||
                "Your Course's Stats..."}
            </p>

            <button
              onClick={() => navigate("/courses")}
              className="mt-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Courses
            </button>
          </div>
        </div>

        {/* Graphs */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lectures Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">
              Course Progress (Lectures)
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={courseProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="lectures"
                  fill="black"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Enrollment Chart */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">
              Student Enrollment
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={enrollData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="enrolled"
                  fill="black"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;