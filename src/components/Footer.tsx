import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const links = {
    platform: [
      { name: '平台概览', href: '#overview' },
      { name: '功能特性', href: '#features' },
      { name: '技术架构', href: '#architecture' },
      { name: '服务支撑', href: '#support' }
    ],
    services: [
      { name: '实时监控', href: '#monitoring' },
      { name: '风险预警', href: '#warning' },
      { name: '合规管理', href: '#compliance' },
      { name: '溯源追踪', href: '#tracing' }
    ],
    resources: [
      { name: '政策法规', href: '#policy' },
      { name: '技术标准', href: '#standards' },
      { name: '最佳实践', href: '#practices' },
      { name: '培训认证', href: '#training' }
    ],
    support: [
      { name: '用户指南', href: '#guide' },
      { name: '技术文档', href: '#docs' },
      { name: '常见问题', href: '#faq' },
      { name: '联系我们', href: '#contact' }
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Shield 
                    className="w-8 h-8 text-blue-400 drop-shadow-lg" 
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">地理信息安全监测平台</h3>
                  <p className="text-sm text-slate-400">Geospatial Security Monitoring Platform</p>
                </div>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
                构建"国家-属地-企业-终端"四级分布式监管架构，为智能网联汽车时空数据处理活动提供全生命周期安全监测与合规服务支撑。
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@geospatial-security.gov.cn</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">400-888-0001</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">北京市朝阳区建国路88号</span>
                </div>
              </div>
            </div>

            {/* Links sections */}
            <div>
              <h4 className="text-white font-semibold mb-4">平台介绍</h4>
              <ul className="space-y-3">
                {links.platform.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">核心服务</h4>
              <ul className="space-y-3">
                {links.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">政策资源</h4>
              <ul className="space-y-3">
                {links.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">帮助支持</h4>
              <ul className="space-y-3">
                {links.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>© 2025 地理信息安全监测平台. 保留所有权利.</span>
              <a href="#" className="hover:text-white transition-colors duration-200">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                服务条款
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                免责声明
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-400">相关链接:</span>
              <a 
                href="https://www.miit.gov.cn" 
                className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>工信部</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://www.mot.gov.cn" 
                className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>交通运输部</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://www.mnr.gov.cn" 
                className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>自然资源部</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;