import React from 'react';
import { CheckCircle2, Circle, Clock, GitBranch, Layers, ShieldCheck, Server } from 'lucide-react';

export default function HeroDashboard() {
  const sprintTasks = [
    { label: "Frontend", status: "completed", tech: "React + Tailwind" },
    { label: "Backend", status: "completed", tech: "FastAPI + Python" },
    { label: "Database", status: "completed", tech: "PostgreSQL Schema" },
    { label: "API Integration", status: "completed", tech: "REST & Webhooks" },
    { label: "QA & Integration Testing", status: "in_progress", tech: "Jest + PyTest" },
    { label: "Production Deployment", status: "pending", tech: "Cloud Host" }
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 shadow-md p-6 relative font-sans">
      
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          <span className="ml-2 text-xs font-mono text-slate-400 font-medium">wtg-console v2.4</span>
        </div>
        <div className="flex items-center space-x-2 text-xs font-semibold text-slate-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
          <span>Sprint #4 Active</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div>
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Live Project Progress
          </span>
          <h3 className="text-lg font-bold text-slate-900 mt-0.5">
            E-Commerce Platform
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 text-xs font-bold text-amber-800 bg-amber-100/80 border border-amber-300 rounded-full inline-flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1 text-amber-700" />
            In Active Sprint
          </span>
        </div>
      </div>

      {/* Progress Bar Header */}
      <div className="mb-5">
        <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
          <span>Sprint Completion Rate</span>
          <span className="text-amber-600 font-mono font-bold">67%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-amber-500 rounded-full w-2/3 transition-all duration-500"></div>
        </div>
      </div>

      {/* Task Matrix List */}
      <div className="space-y-2.5 mb-6">
        {sprintTasks.map((task, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-3 rounded-md border text-sm transition-colors ${
              task.status === 'completed'
                ? 'bg-slate-50/70 border-slate-200 text-slate-900'
                : task.status === 'in_progress'
                ? 'bg-amber-50/60 border-amber-300 text-amber-950 font-bold'
                : 'bg-white border-slate-200 text-slate-400'
            }`}
          >
            <div className="flex items-center space-x-3">
              {task.status === 'completed' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : task.status === 'in_progress' ? (
                <div className="w-4 h-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin shrink-0"></div>
              ) : (
                <Circle className="w-4 h-4 text-slate-300 shrink-0" />
              )}
              <span className="font-semibold text-xs sm:text-sm">{task.label}</span>
            </div>
            <span className="text-[11px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
              {task.tech}
            </span>
          </div>
        ))}
      </div>

      {/* Quick Metrics Footer */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100 text-center">
        <div className="p-2 bg-slate-50 rounded border border-slate-100">
          <div className="text-[10px] text-slate-500 uppercase font-medium">Commits</div>
          <div className="text-sm font-bold text-slate-800 font-mono mt-0.5">142</div>
        </div>
        <div className="p-2 bg-slate-50 rounded border border-slate-100">
          <div className="text-[10px] text-slate-500 uppercase font-medium">Build Time</div>
          <div className="text-sm font-bold text-slate-800 font-mono mt-0.5">42s</div>
        </div>
        <div className="p-2 bg-slate-50 rounded border border-slate-100">
          <div className="text-[10px] text-slate-500 uppercase font-medium">Quality Rate</div>
          <div className="text-sm font-bold text-amber-600 font-mono mt-0.5">99.4%</div>
        </div>
      </div>

    </div>
  );
}
