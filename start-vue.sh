#!/bin/bash

echo "🎯 准备启动 Vue 版本的个人简历网站..."
echo ""

# 检查是否存在 node_modules
if [ ! -d "node_modules" ] || [ ! -f "package.json" ] || grep -q "next" package.json; then
    echo "📦 检测到需要安装 Vue 依赖..."
    
    # 删除旧依赖
    if [ -d "node_modules" ]; then
        echo "🗑️  删除旧的 node_modules..."
        rm -rf node_modules
    fi
    
    if [ -f "package-lock.json" ]; then
        echo "🗑️  删除旧的 package-lock.json..."
        rm -f package-lock.json
    fi
    
    # 使用 Vue 版本的 package.json
    echo "📝 使用 Vue 配置..."
    cp package.vue.json package.json
    
    # 安装依赖
    echo "⬇️  安装 Vue 依赖包..."
    npm install
    
    echo ""
    echo "✅ 依赖安装完成！"
    echo ""
fi

# 启动开发服务器
echo "🚀 启动 Vite 开发服务器..."
echo "📍 访问地址: http://localhost:3000"
echo ""

npm run dev
