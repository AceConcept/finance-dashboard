import React from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Table from './components/Table';

export default function Home() {
  return (
    <div className="flex h-screen bg-[#FCFCFD]">
      <Sidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#FCFCFD]">
        <Dashboard />
        <div className="p-8">
          <Table />
        </div>
      </main>
    </div>
  );
}
