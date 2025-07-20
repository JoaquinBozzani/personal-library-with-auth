import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Settings() {
  const { rememberMe, setRememberMe } = useAuth();
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) return stored === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--color-shadow)', padding: 32 }}>
      <h2>Settings</h2>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.1rem', marginTop: 18 }}>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={e => setRememberMe(e.target.checked)}
        />
        Remember me (stay logged in after closing the browser)
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '1.1rem', marginTop: 18 }}>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={e => setDarkMode(e.target.checked)}
        />
        Dark mode
      </label>
    </div>
  );
}

export default Settings; 