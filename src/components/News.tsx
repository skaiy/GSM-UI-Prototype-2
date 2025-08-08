import React from 'react';
import { Calendar, Tag, ArrowRight, FileText } from 'lucide-react';

const News = () => {
  const news = [
    {
      category: '政策法规',
      title: '《智能网联汽车数据安全管理若干规定（试行）》正式发布',
      excerpt: '为规范智能网联汽车数据处理活动，保护个人信息和重要数据安全，维护国家安全和公共利益，促进智能网联汽车产业健康发展...',
      date: '2025-01-15',
      isNew: true,
      color: 'from-red-500 to-pink-400'
    },
    {
      category: '技术标准',
      title: '车联网网络安全和数据安全标准体系建设指南',
      excerpt: '明确车联网网络安全和数据安全标准化工作的总体要求、建设思路、建设内容和组织实施方式，指导车联网网络安全和数据安全标准化工作...',
      date: '2025-01-12',
      isNew: true,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      category: '行业动态',
      title: '全国智能网联汽车数据安全监测试点工作启动',
      excerpt: '为贯彻落实数据安全法、个人信息保护法等法律法规，加强智能网联汽车数据安全监管，国家相关部门决定开展智能网联汽车数据安全监测试点工作...',
      date: '2025-01-10',
      isNew: false,
      color: 'from-green-500 to-emerald-400'
    },
    {
      category: '合规指导',
      title: '智能网联汽车企业数据安全合规指南发布',
      excerpt: '为帮助智能网联汽车企业更好地理解和执行数据安全相关法规要求，提高企业数据安全合规能力，特发布本合规指南...',
      date: '2025-01-08',
      isNew: false,
      color: 'from-purple-500 to-indigo-400'
    },
    {
      category: '国际合作',
      title: 'ISO/SAE 21434 车辆网络安全国际标准解读',
      excerpt: '深入解读ISO/SAE 21434标准的核心要求，分析其对我国智能网联汽车网络安全管理的指导意义和实施建议...',
      date: '2025-01-03',
      isNew: false,
      color: 'from-teal-500 to-cyan-400'
    },
    {
      category: '市场分析',
      title: '2025年智能网联汽车数据安全市场前景展望',
      excerpt: '随着智能网联汽车产业快速发展，数据安全市场迎来新机遇。预计2025年相关市场规模将达到新高度，技术创新和政策驱动成为主要增长动力...',
      date: '2025-01-01',
      isNew: false,
      color: 'from-indigo-500 to-purple-400'
    },
    {
      category: '安全事件',
      title: '智能网联汽车数据泄露事件分析与防护建议',
      excerpt: '近期发生的多起智能网联汽车数据安全事件引发关注。专家分析了事件原因，并提出了针对性的防护措施和应急响应策略...',
      date: '2024-12-28',
      isNew: false,
      color: 'from-red-500 to-orange-400'
    }
  ];

  return (
    <section id="news" className="py-20 bg-slate-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/30 to-slate-900/30"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 text-orange-400 mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">政策动态</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            最新政策与
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              行业资讯
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            及时跟进国家政策法规、技术标准和行业动态，为企业合规发展提供权威指导和专业解读
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured article */}
          <div className="lg:col-span-8">
            <div className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Car silhouette */}
                  <path d="M50 180 L80 160 L120 160 L140 140 L200 140 L220 150 L280 150 L320 160 L350 180 L350 200 L320 210 L280 210 L220 210 L200 210 L140 210 L120 210 L80 210 L50 200 Z" fill="currentColor" />
                  {/* Network nodes */}
                  <circle cx="100" cy="100" r="3" fill="currentColor" />
                  <circle cx="150" cy="80" r="3" fill="currentColor" />
                  <circle cx="200" cy="90" r="3" fill="currentColor" />
                  <circle cx="250" cy="70" r="3" fill="currentColor" />
                  <circle cx="300" cy="110" r="3" fill="currentColor" />
                  {/* Connection lines */}
                  <line x1="100" y1="100" x2="150" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="150" y1="80" x2="200" y2="90" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="200" y1="90" x2="250" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  <line x1="250" y1="70" x2="300" y2="110" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                  {/* Data flow indicators */}
                  <rect x="180" y="120" width="40" height="8" rx="4" fill="currentColor" opacity="0.2" />
                  <rect x="160" y="135" width="60" height="6" rx="3" fill="currentColor" opacity="0.15" />
                </svg>
              </div>
              
              <div className="relative p-6 lg:p-8 h-full flex flex-col">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${news[0].color} text-white shadow-lg`}>
                    {news[0].category}
                  </div>
                  {news[0].isNew && (
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30 animate-pulse">
                      最新发布
                    </div>
                  )}
                  <div className="flex items-center space-x-1 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{news[0].date}</span>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {news[0].title}
                </h3>
                
                <div className="text-slate-400 mb-6 leading-relaxed flex-grow space-y-3">
                  <p>
                    为规范智能网联汽车数据处理活动，保护个人信息和重要数据安全，维护国家安全和公共利益，促进智能网联汽车产业健康发展，国家相关部门正式发布了这一重要规定。
                  </p>
                  <div className="grid grid-cols-2 gap-4 my-4">
                    <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                      <div className="text-blue-400 text-sm font-medium mb-1">数据分类</div>
                      <div className="text-xs text-slate-300">个人信息、重要数据、一般数据</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                      <div className="text-green-400 text-sm font-medium mb-1">安全等级</div>
                      <div className="text-xs text-slate-300">敏感、重要、一般三级分类</div>
                    </div>
                  </div>
                  <p className="text-sm">
                    该规定明确了智能网联汽车数据处理者的安全保护义务，建立了数据分类分级保护制度，为行业合规发展提供了重要指导。
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="group/btn flex items-center space-x-2 text-blue-400 hover:text-white font-semibold transition-colors duration-300">
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <span>来源: 工信部</span>
                    <span>•</span>
                    <span>政策解读</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News list */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {news.slice(1, 4).map((item, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/30 rounded-xl p-4 lg:p-5 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:bg-slate-800/50"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <div className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                      {item.category}
                    </div>
                    {item.isNew && (
                      <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium border border-green-500/30">
                        新
                      </div>
                    )}
                  </div>
                  
                  <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-snug line-clamp-2 text-sm lg:text-base">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-500 text-xs lg:text-sm mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-slate-500 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                    
                    <button className="group/btn text-blue-400 hover:text-white text-xs lg:text-sm font-medium transition-colors duration-300">
                      查看详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional news grid for remaining items */}
        <div className="mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(4).map((item, index) => (
              <div
                key={index + 4}
                className="group bg-slate-800/30 rounded-xl p-5 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${item.color} text-white`}>
                    {item.category}
                  </div>
                  {item.isNew && (
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium border border-green-500/30">
                      新
                    </div>
                  )}
                </div>
                
                <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300 leading-snug line-clamp-2">
                  {item.title}
                </h4>
                
                <p className="text-slate-500 text-sm mb-3 line-clamp-3">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-slate-500 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                  </div>
                  
                  <button className="group/btn text-blue-400 hover:text-white text-sm font-medium transition-colors duration-300">
                    查看详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* More news button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white px-8 py-4 rounded-lg transition-all duration-300">
            <span>查看更多政策资讯</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;