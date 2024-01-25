<h1 align="center">从0到1实现 低代码平台</h1>

project
├── README.md 	
└── src 项目的源代码
    ├── components           基础公共组件
    ├── constants            公共常量
    ├── hooks     			 自定义hooks
	├── layouts     		 页面布局
	├── router     			 页面路由管理
	├── services     		 接口服务
	├── store     			 数据管理
	├── utils     			 工具方法
    ├── pages          		 页面
        ├── Home     			 首页
        ├── Login       	     登录页
        ├── Register  		     注册页
        ├── Manage 				 问卷管理页
        ├── Question   		     问卷编辑页
        ├── NotFound             404页面

## ⌨️ 开发计划

Development Plan

- [x] 配置eslint
  - [x] 安装@typescript-eslint/parser插件  pnpm i @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-plugin-react --save-dev
  - [x] 增加 eslint scripts命令   "lint": " eslint 'src/**/*.+(js|ts|jsx|tsx)' "
  - [x] 安装 eslint vscode插件
- [x] prettier
  - [x] 安装插件  pnpm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev
  - [x] 增加format scripts命令  执行 npm run format进行格式化
- [ ] commander命令
- [ ] 脚手架命令注册和执行
- [ ] 脚手架命令动态加载功能架构设计
- [ ] node多进程
- [ ] 命令的准备和执行
- [ ] 脚手架项目创建功能
- [ ] 脚手架发布架构设计
- [ ] 脚手架发布功能开发
- [ ] 云构建架构设计
- [ ] 脚手架云发布

## ⌨️ 内容总结

content summary

1、环境要求:

```bash
$ node 16+
$ pnpm
$ typescript
$ eslint
$ prettier
$ husky
$ craco    pnpm i -D @craco/craco  一个用于扩展 Create React App 配置的库
```

