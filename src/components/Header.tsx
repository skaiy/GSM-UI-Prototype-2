import React, { useState } from 'react';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-400 drop-shadow-lg filter hover:text-cyan-400 transition-colors duration-300" 
                       style={{
                         filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
                       }} />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">地理信息安全监测平台</h1>
              <p className="text-xs text-slate-400">Geospatial Security Monitoring Platform</p>
            </div>
          </div>

          

          {/* Login Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-slate-300 hover:text-white border border-slate-600 rounded-lg transition-all duration-200 hover:border-slate-500">
              政府端登录
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 transform hover:scale-105">
              企业端登录
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <a href="#overview" className="text-slate-300 hover:text-white transition-colors duration-200">
                平台概览
              </a>
              <a href="#monitoring" className="text-slate-300 hover:text-white transition-colors duration-200">
                实时监控预警
              </a>
              <a href="#compliance" className="text-slate-300 hover:text-white transition-colors duration-200">
                合规管理服务
              </a>
              <a href="#news" className="text-slate-300 hover:text-white transition-colors duration-200">
                政策动态
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">
                关于平台
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-slate-800">
                <button className="px-4 py-2 text-slate-300 hover:text-white border border-slate-600 rounded-lg transition-all duration-200">
                  政府端登录
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all duration-200">
                  企业端登录
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;