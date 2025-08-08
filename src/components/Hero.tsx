import React from 'react';
import { ArrowRight, Shield, Eye, AlertTriangle, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-900/30"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">国家级监管基础设施</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                智能网联汽车
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  时空数据安全
                </span>
                <br />
                监测平台
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
                构建"国家-属地-企业-终端"四级分布式监管架构，为智能网联汽车时空数据处理活动提供全生命周期安全监测与合规服务支撑。
              </p>
            </div>

            <div className="flex">
              <button className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all duration-200 transform hover:scale-105">
                <Users className="w-5 h-5" />
                <span>企业接入</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50万+</div>
                <div className="text-sm text-slate-400">接入车辆</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">30+</div>
                <div className="text-sm text-slate-400">服务企业</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">80%+</div>
                <div className="text-sm text-slate-400">行业覆盖率</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative">
            <div className="relative bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
              {/* Dashboard header */}
              <div className="bg-slate-900 px-6 py-4 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">实时数据</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6 space-y-6">
                {/* Status cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">在线车辆</div>
                        <div className="text-2xl font-bold text-green-400">423,567</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 text-red-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">风险告警</div>
                        <div className="text-2xl font-bold text-red-400">1,234</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map visualization */}
                <div className="bg-slate-900/30 rounded-lg p-4 border border-slate-700 h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
                  <div className="relative z-10">
                    <h4 className="text-white font-medium mb-4">地理分布态势</h4>
                    <div className="grid grid-cols-6 gap-2 opacity-60">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-4 rounded ${
                            Math.random() > 0.7
                              ? 'bg-red-500'
                              : Math.random() > 0.5
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          style={{ opacity: Math.random() * 0.8 + 0.2 }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Activity list */}
                <div className="space-y-3">
                  <h4 className="text-white font-medium">最新活动</h4>
                  {[
                    { time: '14:32', action: '北汽集团提交备案申请', status: 'pending' },
                    { time: '14:28', action: '检测到异常数据传输', status: 'warning' },
                    { time: '14:25', action: '吉利汽车通过合规审核', status: 'success' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm">
                      <div className="text-slate-500 font-mono">{item.time}</div>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.status === 'success'
                            ? 'bg-green-500'
                            : item.status === 'warning'
                            ? 'bg-yellow-500'
                            : 'bg-blue-500'
                        }`}
                      ></div>
                      <div className="text-slate-300 flex-1">{item.action}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;