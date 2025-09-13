import React, { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';

interface Proxy {
  id: string;
  username: string;
  password: string;
  ip: string;
  port: string;
  region: string;
}

function App() {
  const [email, setEmail] = useState('avani@ibrinfotech.com');
  const [proxies, setProxies] = useState<Proxy[]>([
    {
      id: '1',
      username: 'Ajmal69gujjar',
      password: 'znEv93RkNq',
      ip: '95.135.92.160',
      port: '59101',
      region: 'NZ'
    },
    {
      id: '2',
      username: 'Ajmal69gujjar',
      password: 'znEv93RkNq',
      ip: '95.135.92.115',
      port: '59101',
      region: 'NZ'
    },
    {
      id: '3',
      username: 'Ajmal69gujjar',
      password: 'znEv93RkNq',
      ip: '193.5.64.1',
      port: '59101',
      region: 'NZ'
    }
  ]);

  const addProxy = () => {
    const newProxy: Proxy = {
      id: Date.now().toString(),
      username: '',
      password: '',
      ip: '',
      port: '',
      region: ''
    };
    setProxies([...proxies, newProxy]);
  };

  const removeProxy = (id: string) => {
    setProxies(proxies.filter(proxy => proxy.id !== id));
  };

  const updateProxy = (id: string, field: keyof Proxy, value: string) => {
    setProxies(proxies.map(proxy =>
      proxy.id === id ? { ...proxy, [field]: value } : proxy
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
        
        {/* Email Address Section */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter email address"
          />
        </div>

        {/* Proxies Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">Proxies</h3>
            <button
              onClick={addProxy}
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Proxy
            </button>
          </div>

          {/* Proxy Entries */}
          <div className="space-y-4">
            {proxies.map((proxy) => (
              <div key={proxy.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
                {/* Username and Password Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700">
                      Username <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={proxy.username}
                      onChange={(e) => updateProxy(proxy.id, 'username', e.target.value)}
                      className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Username"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      value={proxy.password}
                      onChange={(e) => updateProxy(proxy.id, 'password', e.target.value)}
                      className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Password"
                    />
                  </div>
                </div>

                {/* IP Row */}
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-gray-700">
                    IP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={proxy.ip}
                    onChange={(e) => updateProxy(proxy.id, 'ip', e.target.value)}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                    placeholder="IP Address"
                  />
                </div>

                {/* Port and Region Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700">
                      Port <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={proxy.port}
                      onChange={(e) => updateProxy(proxy.id, 'port', e.target.value)}
                      className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Port"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-gray-700">
                      Region
                    </label>
                    <input
                      type="text"
                      value={proxy.region}
                      onChange={(e) => updateProxy(proxy.id, 'region', e.target.value)}
                      className="w-full px-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Region"
                    />
                  </div>
                </div>

                {/* Remove Button */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => removeProxy(proxy.id)}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-600 border border-red-300 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
