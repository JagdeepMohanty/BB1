import React from 'react';
import { Home } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const FloatingHomeButton: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all"
      aria-label="Go to Home"
    >
      <Home size={22} />
    </button>
  );
};

export default FloatingHomeButton;
