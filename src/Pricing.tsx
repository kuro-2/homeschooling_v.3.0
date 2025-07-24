import React, { useState } from 'react';
import { CheckCircle, Zap, BarChart3, Headphones, Users, BookOpen, Calendar, Star, Crown, Info } from 'lucide-react';

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/month",
      description: "Get started with basic features at no cost",
      features: [
        "Up to 1 classroom",
        "Basic lesson planning",
        "Limited AI assistance",
        "Community support",
        "Basic templates",
        "Student progress tracking"
      ],
      buttonText: "Get Started Free",
      buttonClass: "bg-green-500 hover:bg-green-600 text-white",
      isPopular: false,
      specialOffer: null,
      originalPrice: null,
      pricePerStudent: null
    },
    {
      name: "Homeschooling Basic",
      price: "$9.99",
      period: "/month",
      description: "Essential tools for homeschooling families - 1 student included, $9.99 per additional student",
      features: [
        "1 Student included ($9.99 per additional student)",
        "Up to 3 learning environments",
        "AI content generation",
        "Basic analytics",
        "Email support",
        "Assignment creation",
        "Student tracking",
        "Basic lesson planning",
        "Learning resources library",
        "Progress monitoring",
        "Parent communication tools"
      ],
      buttonText: "Start 14-Day Free Trial",
      buttonClass: "bg-gray-800 hover:bg-gray-900 text-white",
      isPopular: false,
      specialOffer: "July Special", // This will be centered
      originalPrice: "$16.65",
      pricePerStudent: "$9.99 per additional student"
    },
    {
      name: "Homeschooling Premium",
      price: "$14.99",
      period: "/month",
      description: "Complete homeschooling solution with advanced features",
      features: [
        "$14.99 per student",
        "Unlimited learning environments",
        "Advanced AI tools",
        "Advanced analytics",
        "Priority support",
        "Custom assessments",
        "Grade book integration",
        "Parent communication",
        "Automated workflows",
        "Personalize AI for custom learning paths",
        "Gamify AI for engagement",
        "Curriculum mapping tools",
        "Assessment and grading tools",
        "Advanced reporting",
        "Multi-student management"
      ],
      buttonText: "Start 14-Day Free Trial",
      buttonClass: "bg-orange-500 hover:bg-orange-600 text-white",
      isPopular: true,
      specialOffer: "Most Popular + July Special 🔥", // This will be at the top with blue background
      originalPrice: "$24.99",
      pricePerStudent: "$14.99 per student"
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      period: "",
      description: "Custom solution for large homeschooling organizations and co-ops",
      features: [
        "Unlimited students",
        "All AI tools and features",
        "Custom integrations",
        "Dedicated account manager",
        "Priority support",
        "Custom curriculum mapping",
        "Advanced reporting & analytics",
        "White-label options",
        "Custom training sessions",
        "Multi-family management",
        "Co-op support",
        "Custom billing options",
        "API access",
        "SSO integration"
      ],
      buttonText: "Contact Us",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white",
      isPopular: false,
      specialOffer: null,
      originalPrice: null,
      pricePerStudent: null
    }
  ];

  const yearlyPlans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/year",
      description: "Get started with basic features at no cost",
      features: [
        "Up to 1 classroom",
        "Basic lesson planning",
        "Limited AI assistance",
        "Community support",
        "Basic templates",
        "Student progress tracking"
      ],
      buttonText: "Get Started Free",
      buttonClass: "bg-green-500 hover:bg-green-600 text-white",
      isPopular: false,
      specialOffer: null,
      originalPrice: null,
      pricePerStudent: null
    },
    {
      name: "Homeschooling Basic",
      price: "$59.99",
      period: "/year",
      description: "Essential tools for homeschooling families - Save 17% with yearly billing",
      features: [
        "1 Student included ($9.99 per additional student)",
        "Up to 3 learning environments",
        "AI content generation",
        "Basic analytics",
        "Email support",
        "Assignment creation",
        "Student tracking",
        "Basic lesson planning",
        "Learning resources library",
        "Progress monitoring",
        "Parent communication tools"
      ],
      buttonText: "Start 14-Day Free Trial",
      buttonClass: "bg-gray-800 hover:bg-gray-900 text-white",
      isPopular: false,
      specialOffer: "July Special!", // This will be centered
      originalPrice: "$149.99",
      pricePerStudent: "$5.00/month when billed annually"
    },
    {
      name: "Homeschooling Premium",
      price: "$87.99",
      period: "/year",
      description: "Complete homeschooling solution with advanced features - Save 17% with yearly billing",
      features: [
        "$14.99 per student",
        "Unlimited learning environments",
        "Advanced AI tools",
        "Advanced analytics",
        "Priority support",
        "Custom assessments",
        "Grade book integration",
        "Parent communication",
        "Automated workflows",
        "Personalize AI for custom learning paths",
        "Gamify AI for engagement",
        "Curriculum mapping tools",
        "Assessment and grading tools",
        "Advanced reporting",
        "Multi-student management"
      ],
      buttonText: "Start 14-Day Free Trial",
      buttonClass: "bg-orange-500 hover:bg-orange-600 text-white",
      isPopular: true,
      specialOffer: "Most Popular + July Special 🔥", // This will be at the top with blue background
      originalPrice: "$219.99",
      pricePerStudent: "$7.33/month when billed annually"
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      period: "",
      description: "Custom solution for large homeschooling organizations and co-ops",
      features: [
        "Unlimited students",
        "All AI tools and features",
        "Custom integrations",
        "Dedicated account manager",
        "Priority support",
        "Custom curriculum mapping",
        "Advanced reporting & analytics",
        "White-label options",
        "Custom training sessions",
        "Multi-family management",
        "Co-op support",
        "Custom billing options",
        "API access",
        "SSO integration"
      ],
      buttonText: "Contact Us",
      buttonClass: "bg-purple-600 hover:bg-purple-700 text-white",
      isPopular: false,
      specialOffer: null,
      originalPrice: null,
      pricePerStudent: null
    }
  ];

  const currentPlans = isYearly ? yearlyPlans : monthlyPlans;

  const featureComparison = [
    { icon: Users, feature: "Classrooms", free: "1", basic: "Up to 3", premium: "Up to 20", enterprise: "Unlimited" },
    { icon: Zap, feature: "AI Content Generation", free: "Limited", basic: <CheckCircle className="w-5 h-5 text-green-500" />, premium: "Advanced", enterprise: "Full AI Suite" },
    { icon: BarChart3, feature: "Analytics", free: "-", basic: "Basic", premium: "Advanced", enterprise: "Custom" },
    { icon: Headphones, feature: "Support", free: "Community", basic: "Email", premium: "Priority", enterprise: "Dedicated" },
    // Add more features as needed based on your screenshots
  ];

  // Helper function to render table cell content
  const renderTableCellContent = (content) => {
    if (React.isValidElement(content)) {
      return content;
    }
    return content;
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen pt-16"> {/* Added pt-16 for fixed header */}
      {/* Hero Section for Pricing */}
      <section className="bg-[#385cfc] text-white py-20 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Transparent Pricing for Every Classroom Size</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8">
          Empower your teaching with AI. No hidden fees, no complications.
          <br />
          Start with a 14-day free trial - no payment required!
          <br />
          Choose the plan that fits your needs and start creating amazing learning experiences today.
        </p>
      </section>

      {/* Trial Information Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8 border border-blue-100">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Try Any Plan Risk-Free</h2>
          </div>
          <p className="text-center text-gray-700 mb-6">
            Start your <span className="font-bold text-blue-600">14-day free trial</span> today. No payment required, no risk, just full access to transform your teaching.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              No credit card charged during trial
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Cancel anytime, no questions asked
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Full access to all premium features
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Dedicated support during trial
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded-lg text-sm flex items-start">
            <Info className="w-4 h-4 mr-2 mt-0.5" /> {/* Added Info icon */}
            <span>
              <span className="font-semibold">How it works:</span> Enter your card details to start the trial, but
              you won't be charged anything for 14 days. Cancel before then = $0 cost.
            </span>
          </div>
        </div>
      </section>

      {/* Monthly/Yearly Toggle */}
      <div className="flex justify-center mb-8">
        <div className="relative p-1 bg-gray-200 rounded-full flex">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              !isYearly ? 'bg-white shadow text-blue-700' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              isYearly ? 'bg-white shadow text-blue-700' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>
      </div>
      <p className="text-center text-red-500 text-sm mb-8">July Special - Up to 60% off!</p>

      {/* Pricing Cards Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border-2 ${
                plan.isPopular ? 'border-orange-500' : 'border-gray-200'
              } p-6 flex flex-col transform hover:scale-105 transition-all duration-300 relative`} /* Added relative for absolute positioning of banners */
            >
              {/* Conditional rendering for special offer banners */}
              {plan.specialOffer && plan.name === "Homeschooling Basic" && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-red-500">
                  {plan.specialOffer}
                </div>
              )}
              {plan.specialOffer && plan.name === "Homeschooling Premium" && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 whitespace-nowrap">
                  {plan.specialOffer}
                </div>
              )}
              {plan.isPopular && plan.name !== "Homeschooling Premium" && ( /* Only show if not Premium and is popular */
                <div className="absolute -top-3 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current" /> Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                {plan.originalPrice && (
                  <p className="text-gray-400 line-through text-lg">{plan.originalPrice}</p>
                )}
                <p className="text-4xl font-bold text-blue-600">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                </p>
                {plan.pricePerStudent && (
                  <p className="text-sm text-gray-500 mt-1">{plan.pricePerStudent}</p>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 text-sm">
                    {typeof feature === 'string' ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </>
                    ) : (
                      <span className="flex items-center">{feature}</span> // Render React element directly
                    )}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold text-base ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-12 px-4 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Detailed Feature Comparison</h2>
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Features
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Free
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Basic
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Premium
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {featureComparison.map((row, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                    {React.createElement(row.icon, { className: "w-5 h-5 text-gray-500 mr-3" })}
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {renderTableCellContent(row.free)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {renderTableCellContent(row.basic)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {renderTableCellContent(row.premium)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 text-center">
                    {renderTableCellContent(row.enterprise)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
