
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Award, GraduationCap } from 'lucide-react';

interface ReportData {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
}

const reportsData: ReportData[] = [
  {
    id: 'jee-main',
    title: 'JEE Main AI Choice Filling Report',
    description: 'Get AI-powered, personalized college and branch suggestions based on your JEE Main rank, category, and preferences—instantly delivered in PDF.',
    features: [
      'Tailored college list based on your JEE rank, category, gender, and seat type.',
      'Branch-wise insights with smart color-coded suggestions: Safe, Moderate, Dream.',
      'Downloadable report in PDF format, delivered to your email.'
    ],
    icon: FileText
  },
  {
    id: 'mht-cet-jee',
    title: 'MHT CET (via JEE Main) AI Choice Filling Report',
    description: 'Discover the best MHT CET engineering colleges you can get based on your JEE Main score. Explore your college options within Maharashtra.',
    features: [
      'Predicted list of eligible MHT CET colleges based on JEE Main score.',
      'Category-wise and quota-based college predictions.',
      'Admission document checklist and counselling guidance.'
    ],
    icon: Award
  },
  {
    id: 'mht-cet-state',
    title: 'MHT CET (State Quota) AI Choice Filling Report',
    description: 'Get a head start on your MHT CET college admissions with our AI-powered predictions. Understand your potential and plan your path to success in Maharashtra\'s top engineering institutes.',
    features: [
      'Likely colleges based on your expected MHT CET scores.',
      'Insights into previous years\' MHT CET cutoffs.',
      'Comprehensive admission document information.'
    ],
    icon: GraduationCap
  }
];

const AccordionReports = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [allowMultiple, setAllowMultiple] = useState(false);

  const toggleCard = (cardId: string) => {
    if (allowMultiple) {
      // For multiple expansion mode (future enhancement)
      setExpandedCard(expandedCard === cardId ? null : cardId);
    } else {
      setExpandedCard(expandedCard === cardId ? null : cardId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-purple-600 text-sm font-medium mb-2 tracking-wide uppercase">
            HOW?
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect AI Report
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select the report that matches your exam and get step-by-step guidance designed for 12th standard students
          </p>
        </div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reportsData.map((report) => (
            <div key={report.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
                <report.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold">{report.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{report.description}</p>
                <div className="mb-6">
                  <h4 className="text-purple-600 font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {report.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Get Your AI Report →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Accordion Layout */}
        <div className="md:hidden space-y-4">
          {reportsData.map((report) => (
            <div 
              key={report.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleCard(report.id)}
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                aria-expanded={expandedCard === report.id}
                aria-controls={`content-${report.id}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg">
                      <report.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{report.title}</h3>
                  </div>
                  <div className="flex-shrink-0 ml-2">
                    {expandedCard === report.id ? (
                      <ChevronUp className="w-6 h-6 text-purple-600 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-purple-600 transition-transform duration-300" />
                    )}
                  </div>
                </div>
              </button>

              {/* Accordion Content */}
              <div
                id={`content-${report.id}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedCard === report.id 
                    ? 'max-h-screen opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="text-gray-600 mb-6">{report.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-purple-600 font-semibold mb-3">What's included:</h4>
                      <ul className="space-y-3">
                        {report.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                      Get Your AI Report →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Multiple Expansion Toggle (Hidden for now, can be enabled) */}
        {false && (
          <div className="mt-8 text-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={allowMultiple}
                onChange={(e) => setAllowMultiple(e.target.checked)}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span className="ml-2 text-gray-700">Allow multiple cards to be expanded</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionReports;
