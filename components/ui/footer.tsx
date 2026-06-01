import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-transparent py-8 transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-slate-600 dark:text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Vineeth. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
