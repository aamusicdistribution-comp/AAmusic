import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Music, DollarSign, Users, Play, Download } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Sample data for charts
  const monthlyStreams = [
    { month: 'Jan', streams: 45000, revenue: 180 },
    { month: 'Feb', streams: 52000, revenue: 208 },
    { month: 'Mar', streams: 61000, revenue: 244 },
    { month: 'Apr', streams: 58000, revenue: 232 },
    { month: 'May', streams: 67000, revenue: 268 },
    { month: 'Jun', streams: 73000, revenue: 292 },
  ];

  const platformData = [
    { name: 'Spotify', value: 45, color: '#1DB954' },
    { name: 'Apple Music', value: 25, color: '#FA233B' },
    { name: 'YouTube Music', value: 15, color: '#FF0000' },
    { name: 'Amazon Music', value: 10, color: '#FF9900' },
    { name: 'Others', value: 5, color: '#8B5CF6' },
  ];

  const topTracks = [
    { name: 'Summer Vibes', streams: 125000, revenue: 500 },
    { name: 'Night Drive', streams: 98000, revenue: 392 },
    { name: 'Ocean Dreams', streams: 87000, revenue: 348 },
    { name: 'City Lights', streams: 76000, revenue: 304 },
    { name: 'Midnight Blues', streams: 65000, revenue: 260 },
  ];

  const stats = [
    { icon: <Play size={24} />, label: 'Total Streams', value: '1.2M', change: '+12%' },
    { icon: <DollarSign size={24} />, label: 'Revenue', value: '$4,840', change: '+8%' },
    { icon: <Music size={24} />, label: 'Tracks', value: '24', change: '+3' },
    { icon: <Users size={24} />, label: 'Monthly Listeners', value: '45.2K', change: '+15%' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-gray-300">Track your music's performance across all platforms</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-shadow duration-300 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-purple-600">{stat.icon}</div>
                  <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Performance */}
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Monthly Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyStreams}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip />
                  <Line type="monotone" dataKey="streams" stroke="#8B5CF6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Platform Distribution */}
            <motion.div
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-white mb-6">Platform Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {platformData.map((platform, index) => (
                  <div key={index} className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: platform.color }}
                    />
                    <span className="text-sm text-gray-300">{platform.name} ({platform.value}%)</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Top Tracks */}
          <motion.div
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Top Performing Tracks</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold text-white">Track</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Streams</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Revenue</th>
                    <th className="text-left py-3 px-4 font-semibold text-white">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {topTracks.map((track, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50">
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <Music size={16} className="text-white" />
                          </div>
                          <span className="font-medium text-white">{track.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">{track.streams.toLocaleString()}</td>
                      <td className="py-4 px-4 text-gray-300">${track.revenue}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center text-green-400">
                          <TrendingUp size={16} className="mr-1" />
                          <span className="text-sm">+{Math.floor(Math.random() * 20) + 5}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;