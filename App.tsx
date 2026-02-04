
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';

const ComingSoon = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-full p-10 text-center space-y-4">
    <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-4xl">🏗️</div>
    <h2 className="text-2xl font-black text-slate-900">{title}</h2>
    <p className="text-slate-500">We're building something amazing here. Stay tuned!</p>
  </div>
);

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/explore" element={<ComingSoon title="Explore Feed" />} />
            <Route path="/notifications" element={<ComingSoon title="Your Notifications" />} />
            <Route path="/messages" element={<ComingSoon title="Private Messages" />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;
