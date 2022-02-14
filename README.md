# ![00127085](https://user-images.githubusercontent.com/71574640/152925335-7debf6bf-c2d4-4249-9f7c-e35f2ef696d4.png)FireBlogs - firebase

##  Project introduction

使用Vue+数据库Firebase（需要使用代理）构造的一个响应式博客，页面适配PC和手机移动端。
Vuex 作为状态管理模式，集中式存储管理应用的所有组件状态，用于组件间共享和监测数据变化。
Vue Router 实现导航守卫，如果没有用户登录，则无法进入相应的权限页面（如发布和管理文章）。
Firebase 为谷歌的提供的服务，作为博客后端提供身份验证，存储和操作数据，实现注册登录，重置密码等功能。

##  Project preview

### 首页（未登录时）

![image](https://user-images.githubusercontent.com/71574640/152923971-e3d8d9f8-add3-49b3-9137-43e5b694a9ab.png)

### 博客展示

![image](https://user-images.githubusercontent.com/71574640/152924020-7e11ffe7-4b33-4c69-bed2-f8b1a7d71096.png)

![image](https://user-images.githubusercontent.com/71574640/152924048-d0af6863-fa4d-4624-8748-1ad1438865d7.png)

### 登录页面

![image](https://user-images.githubusercontent.com/71574640/152924106-5e8c972d-969e-467b-b790-391121cde9f3.png)

### 注册页面 

![image](https://user-images.githubusercontent.com/71574640/152924142-89c7992f-0b1f-4e1c-a512-3bab8ff73e06.png)

### 忘记密码

![image](https://user-images.githubusercontent.com/71574640/152924625-3164e154-1584-4a6c-914d-3a07b31edfef.png)


### 主页（登录后）

![image](https://user-images.githubusercontent.com/71574640/152924197-27f8977e-4893-4f54-9ef9-f39fc1677a72.png)

### 查看信息

![image](https://user-images.githubusercontent.com/71574640/152924531-b4c6e97e-6295-4b23-a05f-9ed270ab0b95.png)

### 修改资料

![image](https://user-images.githubusercontent.com/71574640/152924588-e5b099b7-551f-4a41-b054-7386ffed2a85.png)

### 博客

![image](https://user-images.githubusercontent.com/71574640/152924231-a55fd004-0a31-4b59-8c45-a170732134bf.png)

### 页脚

![image](https://user-images.githubusercontent.com/71574640/152924069-4538e5a0-f754-48da-86f9-8d9709ab20d4.png)

### 移动端页面

![image](https://user-images.githubusercontent.com/71574640/152924376-c8fd9101-64dd-422b-9247-29de5f306e9a.png)

![image](https://user-images.githubusercontent.com/71574640/152924342-cb34293e-6607-4c34-a150-645650ea13cd.png)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
