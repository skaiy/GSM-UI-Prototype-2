# 腾讯云CloudBase部署指南

## 项目配置

本项目已配置好腾讯云CloudBase部署所需的文件：

- `cloudbaserc.json` - CloudBase配置文件
- `vite.config.ts` - 优化的Vite构建配置
- `package.json` - 添加了部署相关的npm scripts

## 部署步骤

### 1. 安装CloudBase CLI（如果尚未安装）
```bash
npm install -g @cloudbase/cli
```

### 2. 登录CloudBase
```bash
npm run cloudbase:login
# 或者直接使用
cloudbase login
```

### 3. 初始化项目（首次部署）
```bash
npm run deploy:init
# 或者直接使用
cloudbase init
```

### 4. 构建并部署
```bash
npm run deploy
# 或者分步执行
npm run build
npm run cloudbase:deploy
```

## 环境信息

- **CloudBase环境ID**: skaiy-0gekbqtw4dc1df5c
- **环境名称**: cloud2
- **APPID**: 1251221636

## 构建配置

项目使用Vite构建，输出目录为 `dist`，配置了以下优化：
- 代码分割（vendor和icons分离）
- 资源压缩
- 相对路径配置

## 注意事项

1. 确保已正确配置腾讯云API密钥
2. 首次部署需要先登录CloudBase
3. 部署前会自动执行构建命令
4. 静态资源将部署到CloudBase静态托管服务
