import React, { useState, useEffect } from 'react';
import { TrendingUp, Building2, DollarSign, Calendar, ExternalLink } from 'lucide-react';

const StartupTracker = () => {
  const [activeTab, setActiveTab] = useState('unicorns');
  const [currentNews, setCurrentNews] = useState(0);

  // Mock data - in production, this would come from APIs
  const unicorns = [
    {
      name: "Byju's",
      valuation: "$22 billion",
      founded: "2011",
      sector: "EdTech",
      founders: "Byju Raveendran",
      status: "Active"
    },
    {
      name: "Paytm",
      valuation: "$16 billion",
      founded: "2010",
      sector: "FinTech",
      founders: "Vijay Shekhar Sharma",
      status: "Public"
    },
    {
      name: "Swiggy",
      valuation: "$10.7 billion",
      founded: "2014",
      sector: "Food Delivery",
      founders: "Sriharsha Majety, Nandan Reddy",
      status: "Active"
    },
    {
      name: "Flipkart",
      valuation: "$37.6 billion",
      founded: "2007",
      sector: "E-commerce",
      founders: "Sachin Bansal, Binny Bansal",
      status: "Acquired by Walmart"
    }
  ];

  const recentFunding = [
    {
      company: "Zepto",
      amount: "$200M",
      round: "Series E",
      date: "Dec 2023",
      sector: "Quick Commerce"
    },
    {
      company: "Licious",
      amount: "$52M",
      round: "Series F",
      date: "Nov 2023",
      sector: "Food & Beverage"
    },
    {
      company: "Boat",
      amount: "$100M",
      round: "Series B",
      date: "Oct 2023",
      sector: "Consumer Electronics"
    }
  ];

  const newsItems = [
    "Indian startup ecosystem raised $8.8 billion in 2023, down 67% from previous year",
    "Bengaluru leads with 40% of all startup funding in India",
    "Government launches $1.3 billion fund to boost deep-tech startups",
    "Indian unicorns planning IPOs: Swiggy, Flipkart, and Razorpay in pipeline"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matrix-green mb-4 font-hacker">
            INDIAN STARTUP INTELLIGENCE
          </h2>
          <p className="text-matrix-green/70">Real-time insights into India's thriving startup ecosystem</p>
        </div>

        {/* Live News Ticker */}
        <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-4 mb-8 overflow-hidden">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-matrix-green rounded-full animate-pulse"></div>
              <span className="text-matrix-green font-semibold">LIVE</span>
            </div>
            <div className="text-matrix-green/80 animate-pulse">
              {newsItems[currentNews]}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-matrix-gray rounded-lg p-1">
          {[
            { id: 'unicorns', label: 'Unicorns', icon: TrendingUp },
            { id: 'funding', label: 'Recent Funding', icon: DollarSign },
            { id: 'insights', label: 'Market Insights', icon: Building2 }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
                activeTab === id
                  ? 'bg-matrix-green text-matrix-black'
                  : 'text-matrix-green/70 hover:text-matrix-green'
              }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'unicorns' && (
          <div className="grid md:grid-cols-2 gap-6">
            {unicorns.map((startup, index) => (
              <div
                key={index}
                className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6 hover:border-matrix-green/60 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-matrix-green">{startup.name}</h3>
                  <span className="text-xs px-2 py-1 bg-matrix-green/20 text-matrix-green rounded">
                    {startup.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-matrix-green/70">Valuation:</span>
                    <span className="text-matrix-green font-semibold">{startup.valuation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-matrix-green/70">Founded:</span>
                    <span className="text-matrix-green">{startup.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-matrix-green/70">Sector:</span>
                    <span className="text-matrix-green">{startup.sector}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-matrix-green/70">Founders:</span>
                    <span className="text-matrix-green text-right">{startup.founders}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'funding' && (
          <div className="space-y-4">
            {recentFunding.map((funding, index) => (
              <div
                key={index}
                className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6 flex items-center justify-between hover:border-matrix-green/60 transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-matrix-green mb-1">{funding.company}</h3>
                  <p className="text-matrix-green/70 text-sm">{funding.sector}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-matrix-green">{funding.amount}</div>
                  <div className="text-sm text-matrix-green/70">{funding.round} • {funding.date}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-matrix-green mb-4">Market Trends</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-matrix-green/70">FinTech dominance</span>
                  <span className="text-matrix-green">32%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-matrix-green/70">E-commerce growth</span>
                  <span className="text-matrix-green">24%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-matrix-green/70">EdTech adoption</span>
                  <span className="text-matrix-green">18%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-matrix-green/70">HealthTech rise</span>
                  <span className="text-matrix-green">15%</span>
                </div>
              </div>
            </div>

            <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
              <h3 className="text-lg font-bold text-matrix-green mb-4">Key Statistics</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-matrix-green">100+</div>
                  <div className="text-matrix-green/70 text-sm">Unicorn startups</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-matrix-green">50,000+</div>
                  <div className="text-matrix-green/70 text-sm">Recognized startups</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-matrix-green">₹8.8B</div>
                  <div className="text-matrix-green/70 text-sm">Total funding (2023)</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StartupTracker;