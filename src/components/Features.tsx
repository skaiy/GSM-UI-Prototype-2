import React from 'react';
import { Shield, Eye, AlertTriangle, Users, Database, BarChart3, FileText, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: '实时监控预警',
      description: '对智能网联汽车时空数据处理活动进行全生命周期实时监测，智能识别违规采集、超范围传输等风险行为。',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Shield,
      title: '合规管理服务',
      description: '提供企业备案管理、合规自查工具、政策解读服务，助力企业建立完善的数据安全管理体系。',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: AlertTriangle,
      title: '风险预警防控',
      description: '四级风险预警机制，基于Drools规则引擎实现智能风险识别，支持自动化处置响应和应急管理。',
      color: 'from-red-500 to-orange-400'
    },
    {
      icon: Database,
      title: '溯源追踪系统',
      description: '构建数据血缘关系，实现全链路操作记录，结合区块链存证机制确保数据处理活动可追溯。',
      color: 'from-purple-500 to-pink-400'
    },
    {
      icon: Users,
      title: '多级协同监管',
      description: '构建国家-属地-企业-终端四级分布式监管架构，实现上下级联动和横向协同的监管体系。',
      color: 'from-indigo-500 to-purple-400'
    },
    {
      icon: BarChart3,
      title: '态势感知分析',
      description: '提供宏观态势大屏、地理信息可视化展示、风险热力图等多维度数据分析和决策支撑服务。',
      color: 'from-yellow-500 to-orange-400'
    },
    {
      icon: FileText,
      title: '备案审核管理',
      description: '支持企业信息备案、车辆信息登记、数据处理活动申报，提供完整的审批流程和信用评估体系。',
      color: 'from-teal-500 to-cyan-400'
    },
    {
      icon: Globe,
      title: '政策服务支撑',
      description: '建立政策法规库、最佳实践案例库，提供培训认证、安全咨询等专业服务，促进产业健康发展。',
      color: 'from-pink-500 to-rose-400'
    }
  ];

  return (
    <section id="overview" className="py-20 bg-slate-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/50"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">核心能力</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            全方位数据安全
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              监管服务体系
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            基于先进的分布式架构和智能算法，为智能网联汽车产业提供专业的数据安全监管和合规服务，构建安全可信的产业生态环境。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Architecture diagram */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              四级分布式监管架构
            </h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              构建从国家到终端的全覆盖监管网络，实现数据安全的全链路管控
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { level: '国家监管中心', description: '宏观监管和政策制定', color: 'from-red-500 to-pink-400' },
              { level: '属地监管中心', description: '区域监管和执法', color: 'from-orange-500 to-yellow-400' },
              { level: '企业监管节点', description: '自律监管和数据上报', color: 'from-blue-500 to-cyan-400' },
              { level: '终端节点', description: '数据安全采集', color: 'from-green-500 to-emerald-400' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center hover:border-slate-600 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{item.level}</h4>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
                
                {/* Arrow */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-slate-600 to-slate-500"></div>
                    <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-slate-500 border-y-2 border-y-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;