'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch, FaSlidersH } from "react-icons/fa";
import AppHeader from '@/components/ui/appheader';
import AppFooter from '@/components/ui/appfooter';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/searchdetails?q=${query.trim()}`);
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col">
      <AppHeader className="mt-auto" />

      <div className="flex flex-1 justify-center items-center">
        <div className="w-96 flex items-center bg-blue-600  p-2 shadow-md">
          <button onClick={handleSearch} className="text-white px-3">
            <FaSearch className="w-5 h-5" title="Search" />
          </button>
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder-white px-2"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={() =>{
             console.log('Filter clicked')
             }} className="text-white px-3">
            <FaSlidersH className="w-5 h-5" title="Filter" />
          </button>
        </div>
      </div>
      <AppFooter className="mt-auto" />
    </div>
  );
}
