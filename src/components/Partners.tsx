import React from 'react';
import { Building, Car, Map, Cpu, Globe } from 'lucide-react';

const Partners = () => {
  const partnerCategories = [
    {
      category: '整车企业',
      icon: Car,
      partners: ['北汽集团', '吉利汽车', '上汽集团', '长城汽车', '东风汽车', '宇通客车', '蔚来汽车', '理想汽车'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      category: '地图服务商',
      icon: Map,
      partners: ['高德地图', '百度地图', '腾讯地图', '四维图新', '易图通', '凯立德'],
      color: 'from-green-500 to-emerald-400'
    },
    {
      category: '科技公司',
      icon: Cpu,
      partners: ['阿里巴巴', '华为技术', '飞步科技', '地平线', '文远知行', '小马智行'],
      color: 'from-purple-500 to-pink-400'
    },
    {
      category: '服务机构',
      icon: Globe,
      partners: ['中汽研', '中汽中心', '交通运输部', '工信部认证', '清华大学', '北京理工'],
      color: 'from-orange-500 to-red-400'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/40"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400 mb-6">
            <Building className="w-4 h-4" />
            <span className="text-sm font-medium">合作伙伴</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            服务行业
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              领军企业
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            与智能网联汽车产业链上下游领军企业深度合作，
            <br className="hidden sm:block" />
            共同构建安全可信的数据处理生态体系
          </p>
        </div>

        {/* Partner categories */}
        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="bg-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {category.partners.map((partner, index) => (
                    <div
                      key={index}
                      className="group bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 hover:transform hover:scale-105 text-center"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">{partner.charAt(0)}</span>
                      </div>
                      <p className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium text-sm">
                        {partner}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-slate-400">合作企业</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50万+</div>
              <div className="text-slate-400">接入车辆</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">80%+</div>
              <div className="text-slate-400">行业覆盖率</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">30%+</div>
              <div className="text-slate-400">市场占有率</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;