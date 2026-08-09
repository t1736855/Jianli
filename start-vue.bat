@echo off
echo 🎯 准备启动 Vue 版本的个人简历网站...
echo.

REM 检查是否需要安装依赖
if not exist "node_modules" goto install
if not exist "package.json" goto install
findstr /C:"next" package.json >nul && goto install
goto start

:install
echo 📦 检测到需要安装 Vue 依赖...

REM 删除旧依赖
if exist "node_modules" (
    echo 🗑️  删除旧的 node_modules...
    rmdir /s /q node_modules
)

if exist "package-lock.json" (
    echo 🗑️  删除旧的 package-lock.json...
    del /f package-lock.json
)

REM 使用 Vue 版本的 package.json
echo 📝 使用 Vue 配置...
copy /y package.vue.json package.json

REM 安装依赖
echo ⬇️  安装 Vue 依赖包...
call npm install

echo.
echo ✅ 依赖安装完成！
echo.

:start
REM 启动开发服务器
echo 🚀 启动 Vite 开发服务器...
echo 📍 访问地址: http://localhost:3000
echo.

call npm run dev
