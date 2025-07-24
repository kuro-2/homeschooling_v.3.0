import React, { useState } from 'react';
import { BookOpen, FileText, Award, TrendingUp, BarChart3, Users, Calendar, RefreshCcw, Edit3, Plus, ChevronDown, Zap, CheckCircle, Clock, Activity, X } from 'lucide-react';

// Define a consistent color palette for charts
const chartColors = {
  primaryBlue: "#385cfc", // A vibrant blue, similar to your brand color
  lightBlue: "#6366f1", // Indigo-500
  mediumBlue: "#3b82f6", // Blue-500
  darkBlue: "#1d4ed8", // Blue-700
  primaryGreen: "#22c55e", // Green-500
  lightGreen: "#86efac", // Green-300
  mediumGreen: "#16a34a", // Green-600
  primaryTeal: "#14b8a6", // Teal-500
  lightPurple: "#a855f7", // Purple-500
  primaryOrange: "#f97316", // Orange-500
  primaryRed: "#ef4444", // Red-500
  gray: "#6b7280", // Gray-500
};

// Helper function to calculate SVG path for area chart (moved outside component)
const getAreaChartPath = (data, width, height, maxValue) => {
  if (data.length === 0) return "";
  const xUnit = width / (data.length - 1);
  const yUnit = height / maxValue;

  let path = `M0 ${height - (data[0].value * yUnit)}`;
  for (let i = 1; i < data.length; i++) {
    path += ` L${i * xUnit} ${height - (data[i].value * yUnit)}`;
  }
  path += ` L${width} ${height} L0 ${height} Z`; // Close the path for area
  return path;
};

// Function to generate pie chart slices for Subject Distribution (moved outside component)
const getPieChartSlicesForSubjectDistribution = (data) => {
  let total = data.reduce((sum, item) => sum + item.percentage, 0);
  let startAngle = 0;
  const radius = 40; // Adjusted radius to match the donut chart's outer radius
  const centerX = 50;
  const centerY = 50;

  return data.map((item, index) => {
    const sliceAngle = (item.percentage / total) * 360;
    const endAngle = startAngle + sliceAngle;

    const startX = centerX + radius * Math.cos(Math.PI * startAngle / 180);
    const startY = centerY + radius * Math.sin(Math.PI * startAngle / 180);
    const endX = centerX + radius * Math.cos(Math.PI * endAngle / 180);
    const endY = centerY + radius * Math.sin(Math.PI * endAngle / 180);

    const largeArcFlag = sliceAngle > 180 ? 1 : 0;

    const pathData = [
      `M${centerX},${centerY}`,
      `L${startX},${startY}`,
      `A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`,
      `Z`
    ].join(' ');

    startAngle = endAngle;

    return (
      <path
        key={index}
        d={pathData}
        fill={item.hexColor}
        className="transition-all duration-300 ease-out hover:scale-105"
      >
        <title>{item.subject}: {item.percentage}%</title>
      </path>
    );
  });
};

// Function to generate donut chart slices for Learning Plan Progress (moved outside component)
const getDonutChartSlices = (data, outerRadius, innerRadius) => {
  const totalProgress = data.reduce((sum, item) => sum + item.progress, 0);
  let startAngle = 0;
  const centerX = 50;
  const centerY = 50;

  return data.map((item, index) => {
    const sliceAngle = (item.progress / totalProgress) * 360;
    const endAngle = startAngle + sliceAngle;

    const startRad = Math.PI * startAngle / 180;
    const endRad = Math.PI * endAngle / 180;

    const startXOuter = centerX + outerRadius * Math.cos(startRad);
    const startYOuter = centerY + outerRadius * Math.sin(startRad);
    const endXOuter = centerX + outerRadius * Math.cos(endRad);
    const endYOuter = centerY + outerRadius * Math.sin(endRad);

    const startXInner = centerX + innerRadius * Math.cos(startRad);
    const startYInner = centerY + innerRadius * Math.sin(startRad);
    const endXInner = centerX + innerRadius * Math.cos(endRad);
    const endYInner = centerY + innerRadius * Math.sin(endRad);

    const largeArcFlag = sliceAngle > 180 ? 1 : 0;

    const pathData = [
      `M${startXOuter},${startYOuter}`,
      `A${outerRadius},${outerRadius} 0 ${largeArcFlag} 1 ${endXOuter},${endYOuter}`,
      `L${endXInner},${endYInner}`,
      `A${innerRadius},${innerRadius} 0 ${largeArcFlag} 0 ${startXInner},${startYInner}`,
      `Z`
    ].join(' ');

    startAngle = endAngle;

    return (
      <path
        key={index}
        d={pathData}
        fill={item.color}
        className="transition-all duration-300 ease-out hover:scale-105"
      >
        <title>{item.plan}: {item.progress}%</title>
      </path>
    );
  });
};

// Helper function to get line path for line graphs (moved outside component)
const getLinePath = (data, xKey, yKey, width, height, yMax) => {
  if (data.length === 0) return "";
  const xUnit = width / (data.length - 1);
  const yUnit = height / yMax;

  let path = `M0 ${height - (data[0][yKey] * yUnit)}`;
  for (let i = 1; i < data.length; i++) {
    path += ` L${i * xUnit} ${height - (data[i][yKey] * yUnit)}`;
  }
  return path;
};

// New function to generate bar chart bars (moved outside component)
const getBarChartBars = (data, width, height, maxValue) => {
  if (data.length === 0) return null;

  const barWidth = (width / data.length) * 0.7; // 70% of available space per bar
  const gap = (width / data.length) * 0.3 / (data.length - 1); // Remaining 30% for gaps
  const yUnit = height / maxValue;

  return data.map((item, index) => {
    const barHeight = item.value * yUnit;
    const x = index * (width / data.length) + (width / data.length - barWidth) / 2;
    const y = height - barHeight;

    return (
      <rect
        key={index}
        x={x}
        y={y}
        width={barWidth}
        height={barHeight}
        fill={item.hexColor}
        className="transition-all duration-300 ease-out hover:scale-y-105 transform origin-bottom"
      >
        <title>{item.label}: {item.value}%</title>
      </rect>
    );
  });
};


function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('Alex Johnson');

  // State for performance trends data, initialized with original values
  const [performanceTrendsPoints, setPerformanceTrendsPoints] = useState([
    { month: "Apr", value: 75 },
    { month: "May", value: 82 },
    { month: "Jun", value: 72 },
    { month: "Jul", value: 80 }
  ]);

  // Data for Key Metrics Cards (static for this example)
  const metrics = [
    { title: "Total Syllabi", value: "12", icon: BookOpen, change: "0 completed", valueColor: "text-blue-800", iconColor: "text-blue-500", changeColor: "text-blue-600" },
    { title: "Learning Assets", value: "248", icon: FileText, change: "Across all subjects", valueColor: "text-green-800", iconColor: "text-green-500", changeColor: "text-green-600" },
    { title: "Current GPA", value: "3.8", icon: Award, change: "Target: 4.0", valueColor: "text-purple-800", iconColor: "text-purple-500", changeColor: "text-purple-600" },
    { title: "Engagement", value: "87%", icon: TrendingUp, change: "Participation rate", valueColor: "text-teal-800", iconColor: "text-teal-500", changeColor: "text-teal-600" }
  ];

  // Data for Subject Distribution Pie Chart - Using defined chartColors
  const subjectDistributionData = [
    { subject: "Mathematics", percentage: 25, color: "bg-blue-500", hexColor: chartColors.mediumBlue },
    { subject: "Science", percentage: 20, color: "bg-green-500", hexColor: chartColors.primaryGreen },
    { subject: "Language Arts", percentage: 20, color: "bg-purple-500", hexColor: chartColors.lightPurple },
    { subject: "History", percentage: 15, color: "bg-yellow-500", hexColor: chartColors.primaryOrange },
    { subject: "Arts", percentage: 12, color: "bg-indigo-500", hexColor: chartColors.lightBlue },
    { subject: "Other", percentage: 8, color: "bg-gray-500", hexColor: chartColors.gray }
  ];

  // Data for Learning Plan Progress (Line Graph) - Using defined chartColors
  const learningPlanProgressData = [
    { plan: "Algebra Fundamentals", progress: 85, color: chartColors.primaryBlue },
    { plan: "Biology Basics", progress: 72, color: chartColors.primaryGreen },
    { plan: "Creative Writing", progress: 60, color: chartColors.primaryOrange },
    { plan: "World History", progress: 45, color: chartColors.lightBlue },
    { plan: "Art Appreciation", progress: 90, color: chartColors.lightPurple }
  ];
  const maxProgress = 100; // Max percentage for progress

  // Data for Learning Asset Types (Line Graph - representing count of each type) - Using defined chartColors
  const learningAssetCounts = [
    { month: "Jan", videos: 50, documents: 80, quizzes: 30 },
    { month: "Feb", videos: 60, documents: 75, quizzes: 35 },
    { month: "Mar", videos: 70, documents: 90, quizzes: 40 },
    { month: "Apr", videos: 65, documents: 85, quizzes: 42 },
    { month: "May", videos: 75, documents: 95, quizzes: 48 }
  ];
  const maxAssetCount = Math.max(...learningAssetCounts.flatMap(d => [d.videos, d.documents, d.quizzes]));


  // Data for Weekly Planning Progress (Line Graph) - Using defined chartColors
  const weeklyProgressData = [
    { day: "Mon", planned: 5, completed: 4 },
    { day: "Tue", planned: 6, completed: 5 },
    { day: "Wed", planned: 5, completed: 5 },
    { day: "Thu", planned: 7, completed: 6 },
    { day: "Fri", planned: 6, completed: 5 }
  ];
  const maxWeeklyActivity = Math.max(...weeklyProgressData.flatMap(d => [d.planned, d.completed]));


  const engagementMetricsOverview = [
    { label: "Online Time", value: "50%", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
    { label: "Participation Rate", value: "60%", bgColor: "bg-pink-100", textColor: "text-pink-800" },
    { label: "Assignment Completion", value: "93%", bgColor: "bg-indigo-100", textColor: "text-indigo-800" },
  ];

  // Dummy student data for the dropdown
  const students = [
    { name: "Alex Johnson", grade: "Grade 11", homeschool: "Homeschool" },
    { name: "Sarah Lee", grade: "Grade 9", homeschool: "Homeschool" },
    { name: "David Kim", grade: "Grade 10", homeschool: "Homeschool" },
  ];

  // Function to handle student selection
  const handleStudentSelect = (studentName) => {
    setSelectedStudent(studentName);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  // Function to handle refresh button click
  const handleRefresh = () => {
    // Simulate data refresh by slightly changing the performance trends data
    setPerformanceTrendsPoints(prevPoints =>
      prevPoints.map(point => ({
        ...point,
        value: Math.max(0, Math.min(100, point.value + (Math.random() * 10 - 5))) // Add/subtract random value
      }))
    );
    console.log("Dashboard refreshed!"); // For demonstration
    // In a real application, you would re-fetch data here based on selectedStudent
    // Example: fetchData(selectedStudent);
  };


  return (
    <section className={`pt-8 sm:pt-8 md:pt-8 lg:pt-8 relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900 transition-colors duration-300 min-h-screen`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-12 sm:pt-16">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-base font-medium text-gray-600">{metric.title}</h3>
                  <p className={`text-3xl font-bold ${metric.valueColor}`}>{metric.value}</p>
                </div>
                {React.createElement(metric.icon, { className: `w-8 h-8 ${metric.iconColor}` })}
              </div>
              <p className={`text-sm ${metric.changeColor}`}>{metric.change}</p>
            </div>
          ))}
        </div>

        {/* Subject Distribution and Learning Plan Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-semibold text-purple-900 mb-3 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-purple-600" />
              Subject Distribution
            </h3>
            <p className="text-base text-purple-700 mb-5">Learning plans organized by subject area</p>
            {/* Responsive container for the chart and legend */}
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-0">
                {/* Chart container */}
                <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                    {getPieChartSlicesForSubjectDistribution(subjectDistributionData)}
                    </svg>
                </div>
                {/* Legend container - now with better wrapping and spacing */}
                <div className="w-full flex flex-col justify-center space-y-2">
                    {subjectDistributionData.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className={`w-3 h-3 rounded-full flex-shrink-0`} style={{ backgroundColor: item.hexColor }}></span>
                        <span className="text-sm text-gray-700 ml-2">{item.subject}: {item.percentage}%</span>
                    </div>
                    ))}
                </div>
            </div>
          </div>

          {/* Learning Plan Progress - Donut Chart */}
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            <h3 className="text-xl font-semibold text-red-900 mb-3 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-red-600" />
              Learning Plan Progress
            </h3>
            <p className="text-base text-red-700 mb-5">Progress across various learning plans</p>
             {/* Responsive container for the chart and legend */}
             <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-0">
                {/* Chart container */}
                <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                    {getDonutChartSlices(learningPlanProgressData, 40, 25)} {/* Outer radius 40, Inner radius 25 */}
                    </svg>
                </div>
                {/* Legend container - with improved responsive behavior */}
                <div className="w-full flex flex-col justify-center space-y-2">
                    {learningPlanProgressData.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className={`w-3 h-3 rounded-full flex-shrink-0`} style={{ backgroundColor: item.color }}></span>
                        <span className="text-sm text-gray-700 ml-2 truncate">{item.plan}: {item.progress}%</span>
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Learning Asset Types and Weekly Planning Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Learning Asset Types - Line Graph */}
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h3 className="text-xl font-semibold text-teal-900 mb-3 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-teal-600" />
              Learning Asset Types
            </h3>
            <p className="text-base text-teal-700 mb-5">Count of different asset types over months</p>
            <div className="h-64 w-full flex items-center justify-center">
              <svg viewBox="0 0 100 115" className="w-full h-full">
                {/* Grid Lines */}
                <line x1="10" y1="90" x2="98" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="10" y1="10" x2="10" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                {[20, 40, 60, 80].map((val, i) => (
                  <line key={i} x1="10" y1={90 - val * 0.8} x2="98" y2={90 - val * 0.8} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                ))}

                {/* Y-axis Labels */}
                <text x="8" y="90" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">0</text>
                <text x="8" y="10" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">{maxAssetCount}</text>
                <text x="8" y="50" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">{Math.floor(maxAssetCount / 2)}</text>

                {/* X-axis Labels */}
                {learningAssetCounts.map((d, i) => (
                  <text key={i} x={10 + i * (88 / (learningAssetCounts.length - 1))} y="107" textAnchor="middle" dominantBaseline="hanging" fontSize="5" fill="#9ca3af">
                    {d.month}
                  </text>
                ))}

                {/* Videos Line */}
                <path
                  d={getLinePath(learningAssetCounts, 'month', 'videos', 88, 80, maxAssetCount)}
                  transform="translate(10, 10)"
                  fill="none"
                  stroke={chartColors.primaryOrange}
                  strokeWidth="1.5"
                  className="transition-all duration-300 ease-out hover:stroke-2"
                />
                {/* Documents Line */}
                <path
                  d={getLinePath(learningAssetCounts, 'month', 'documents', 88, 80, maxAssetCount)}
                  transform="translate(10, 10)"
                  fill="none"
                  stroke={chartColors.mediumBlue}
                  strokeWidth="1.5"
                  className="transition-all duration-300 ease-out hover:stroke-2"
                />
                {/* Quizzes Line */}
                <path
                  d={getLinePath(learningAssetCounts, 'month', 'quizzes', 88, 80, maxAssetCount)}
                  transform="translate(10, 10)"
                  fill="none"
                  stroke={chartColors.primaryGreen}
                  strokeWidth="1.5"
                  className="transition-all duration-300 ease-out hover:stroke-2"
                />

                {/* Legend */}
                <g transform="translate(15, 5)">
                  <rect x="0" y="0" width="4" height="4" fill={chartColors.primaryOrange} />
                  <text x="6" y="3" fontSize="3.5" fill="#6b7280">Videos</text>
                  <rect x="20" y="0" width="4" height="4" fill={chartColors.mediumBlue} />
                  <text x="26" y="3" fontSize="3.5" fill="#6b7280">Documents</text>
                  <rect x="45" y="0" width="4" height="4" fill={chartColors.primaryGreen} />
                  <text x="51" y="3" fontSize="3.5" fill="#6b7280">Quizzes</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Weekly Planning Progress - Line Graph */}
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
            <h3 className="text-xl font-semibold text-orange-900 mb-3 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-orange-600" />
              Weekly Planning Progress
            </h3>
            <p className="text-base text-orange-700 mb-5">Planned vs completed activities over the week</p>
            <div className="h-64 w-full flex items-center justify-center">
              <svg viewBox="0 0 100 115" className="w-full h-full">
                {/* Grid Lines */}
                <line x1="10" y1="90" x2="98" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="10" y1="10" x2="10" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                {[2, 4, 6, 8].map((val, i) => (
                  <line key={i} x1="10" y1={90 - val * (80 / maxWeeklyActivity)} x2="98" y2={90 - val * (80 / maxWeeklyActivity)} stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                ))}

                {/* Y-axis Labels */}
                <text x="8" y="90" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">0</text>
                <text x="8" y="10" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">{maxWeeklyActivity}</text>
                <text x="8" y="50" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">{Math.floor(maxWeeklyActivity / 2)}</text>


                {/* X-axis Labels */}
                {weeklyProgressData.map((d, i) => (
                  <text key={i} x={10 + i * (88 / (weeklyProgressData.length - 1))} y="107" textAnchor="middle" dominantBaseline="hanging" fontSize="5" fill="#9ca3af">
                    {d.day}
                  </text>
                ))}

                {/* Planned Line */}
                <path
                  d={getLinePath(weeklyProgressData, 'day', 'planned', 88, 80, maxWeeklyActivity)}
                  transform="translate(10, 10)"
                  fill="none"
                  stroke={chartColors.primaryOrange}
                  strokeWidth="1.5"
                  className="transition-all duration-300 ease-out hover:stroke-2"
                />
                {/* Completed Line */}
                <path
                  d={getLinePath(weeklyProgressData, 'day', 'completed', 88, 80, maxWeeklyActivity)}
                  transform="translate(10, 10)"
                  fill="none"
                  stroke={chartColors.primaryGreen}
                  strokeWidth="1.5"
                  className="transition-all duration-300 ease-out hover:stroke-2"
                />

                {/* Legend */}
                <g transform="translate(15, 5)">
                  <rect x="0" y="0" width="4" height="4" fill={chartColors.primaryOrange} />
                  <text x="6" y="3" fontSize="3.5" fill="#6b7280">Planned</text>
                  <rect x="25" y="0" width="4" height="4" fill={chartColors.primaryGreen} />
                  <text x="31" y="3" fontSize="3.5" fill="#6b7280">Completed</text>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Student Performance and Performance Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {/* Student Performance Chart */}
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h3 className="text-xl font-semibold text-pink-900 mb-3 flex items-center">
              <Users className="w-6 h-6 mr-2 text-pink-600" />
              Student Performance
            </h3>
            <p className="text-base text-pink-700 mb-5">Current vs predicted GPA by student</p>
            <div className="h-64 w-full flex items-center justify-center">
              <svg viewBox="0 0 100 115" className="w-full h-full">
                {/* Horizontal grid lines */}
                <line x1="10" y1="90" x2="98" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="10" y1="50" x2="98" y2="50" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="10" y1="10" x2="98" y2="10" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />

                {/* Vertical grid lines */}
                <line x1="10" y1="10" x2="10" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="90" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="90" y1="10" x2="90" y2="90" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />

                {/* Y-axis labels */}
                <text x="5" y="90" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">0</text>
                <text x="5" y="50" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">2</text>
                <text x="5" y="10" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">4.2</text>

                {/* Bar for Alex J. - Using consistent color */}
                <rect x="32.5" y="10" width="35" height="80" fill={chartColors.primaryBlue} />
                <text x="50" y="107" textAnchor="middle" dominantBaseline="hanging" fontSize="5" fill="#6b7280">Alex J.</text>
              </svg>
            </div>
          </div>

          {/* Performance Trends Chart - Using consistent color */}
          <div className="bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
            <h3 className="text-xl font-semibold text-indigo-900 mb-3 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-indigo-600" />
              Performance Trends
            </h3>
            <p className="text-base text-indigo-700 mb-5">Average GPA and engagement over time</p>
            <div className="h-64 w-full flex items-center justify-center">
              <svg viewBox="0 0 100 115" className="w-full h-full">
                {/* Grid lines */}
                <line x1="10" y1="90" x2="98" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="10" y1="10" x2="10" y2="90" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="10" y1="65" x2="98" y2="65" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="10" y1="40" x2="98" y2="40" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="10" y1="15" x2="98" y2="15" stroke="#e5e7eb" strokeWidth="0.5" strokeDasharray="2,2" />

                {/* Y-axis labels */}
                <text x="5" y="90" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">0</text>
                <text x="5" y="15" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">100</text>
                <text x="5" y="40" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">75</text>
                <text x="5" y="65" textAnchor="end" dominantBaseline="middle" fontSize="5" fill="#9ca3af">50</text>

                {/* X-axis labels */}
                {performanceTrendsPoints.map((point, index) => (
                  <text
                    key={index}
                    x={10 + (index * (88 / (performanceTrendsPoints.length - 1)))}
                    y="107"
                    textAnchor="middle"
                    dominantBaseline="hanging"
                    fontSize="5" fill="#6b7280"
                  >
                    {point.month}
                  </text>
                ))}

                {/* Area path */}
                <path
                  d={getAreaChartPath(performanceTrendsPoints, 88, 80, 100)}
                  transform="translate(10, 10)"
                  fill={`${chartColors.primaryBlue}33`} // Blue with opacity
                  stroke={chartColors.primaryBlue} // Primary blue
                  strokeWidth="1"
                />
                {/* Line path (optional, for clearer line) */}
                <path
                  d={getAreaChartPath(performanceTrendsPoints, 88, 80, 100).replace(/Z$/, '')}
                  transform="translate(10, 10)"
                  fill="none"
                  stroke={chartColors.primaryBlue}
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Engagement Metrics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {engagementMetricsOverview.map((item, index) => (
            <div key={index} className={`p-5 rounded-lg text-center ${item.bgColor} ${item.textColor} transform hover:scale-105 transition-all duration-300`} style={{ animationDelay: `${index * 100 + 1100}ms` }}>
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
