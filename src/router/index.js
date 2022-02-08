import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import CreatePost from "../views/CreatePost.vue";
import BlogPreview from "../views/BlogPreview.vue";
import ViewBlog from "../views/ViewBlog.vue";
import EditBlog from "../views/EditBlog.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { 
      title:"首页",
      requiresAuth:false,
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: { title:"博客",
    requiresAuth:false, },
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    meta: { title:"新建博客",
    requiresAuth:true,
    requiresAdmin:true,  },
  },
  {
    path: "/post-preview",
    name: "BlogPreview",
    component: BlogPreview,
    meta: { title:"预览博客",
    requiresAuth:true,
    requiresAdmin:true,  },
  },
  {
    path: "/view-blog/:blogid",
    name: "ViewBlog",
    component: ViewBlog,
    meta: { title:"查看博客",
    requiresAuth:true, },
  },
  {
    path: "/edit-blog/:blogid",
    name: "EditBlog",
    component: EditBlog,
    meta: { title:"编辑博客" ,
    requiresAuth:true,
    requiresAdmin:true, },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { title:"登录",
    requiresAuth:false, },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { title:"注册",
    requiresAuth:false, },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: { title:"忘记密码",
    requiresAuth:false, },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { title:"账号设置" ,
    requiresAuth:true,},
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: { title:"管理员主页",
    requiresAuth:true,
    requiresAdmin:true, 
  },
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next();
})

router.beforeEach(async(to, from, next) => {
  let user = firebase.auth().currentUser;
  let admin = null;
  if (user){
    let token = await user.getIdTokenResult();
    admin = token.claims.admin;
  }
  if (to.matched.some((res) =>res.meta.requiresAuth)){
    if (user){
      if (to.matched.some((res) =>res.meta.requiresAdmin)){
        if (admin) {
          return next();
        }
        return next({name:"Home"});
      }
      return next();
    }
    return next({name:"Home"});
  }
  return next();
})


export default router;
