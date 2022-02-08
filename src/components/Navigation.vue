<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link
          class="header"
          :to="{ name: 'Home' }"
        >
          <img
            src="../assets/logo.png"
            width="30px"
            height="30px"
            alt="logo"
            style="float: left"
          />
          FireBlogs
        </router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link
            class="link"
            :to="{ name: 'Home' }"
          >首页</router-link>
          <router-link
            class="link"
            :to="{ name: 'Blogs' }"
          >博客</router-link>
          <router-link
            class="link"
            :to="{ name: 'CreatePost' }"
          >发布文章</router-link>
          <router-link
            v-if="!user"
            class="link"
            :to="{ name: 'Login' }"
          >登录/注册</router-link>
        </ul>
        <div
          v-if="user"
          v-show="!mobile"
          @click="toggleProfileMenu"
          class="profile"
          ref="profile"
        >
          <span style="font-size:10px">{{this.$store.state.profileName}}</span>

          <div
            v-show="profileMenu"
            class="profile-menu"
          >
            <div class="triangle"></div>
            <div class="info">
              <p
                style="font-size:10px"
                class="name"
              > {{this.$store.state.profileName}} </p>
              <div class="right">
                <p>{{this.$store.state.profileName}}</p>
                <p>{{this.$store.state.profileUserName}}</p>
                <p>{{this.$store.state.profileEmail}}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link
                  class="option"
                  :to="{name:'Profile'}"
                >
                  <userIcon class="icon" />
                  <p>编辑资料</p>
                </router-link>
              </div>
              <div class="option">
                <router-link
                  class="option"
                  :to="{name:'Admin'}"
                >
                  <adminIcon class="icon" />
                  <p>管理员设置</p>
                </router-link>
              </div>
              <div
                @click="signOut"
                class="option"
              >
                <signOutIcon class="icon" />
                <p>退出账号</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- 移动端菜单图标 -->
    <menuIcon
      @click="toggleMobileNav"
      class="menu-icon"
      v-show="mobile"
    />
    <transition name="mobile-nav">
      <ul
        class="mobile-nav"
        v-show="mobileNav"
      >
        <router-link
          class="link"
          :to="{ name: 'Home' }"
        >首页</router-link>
        <router-link
          class="link"
          :to="{ name: 'Blogs' }"
        >博客</router-link>
        <router-link
          class="link"
          :to="{ name: 'CreatePost' }"
        >发布文章</router-link>
        <router-link
          v-if="!user"
          class="link"
          :to="{ name: 'Login' }"
        >登录/注册</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "navigation",
  components: {
    menuIcon,
    userIcon,
    adminIcon,
    signOutIcon,
  },
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    //判断窗口大小是否切换移动导航
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    //切换移动导航
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },
    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scope>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
    0 2px 4px -1px rgba($color: #000000, $alpha: 0.006);
  z-index: 99;
}

.link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;

  &:hover {
    color: #1eb8b8;
  }
}

// 导航栏
nav {
  display: flex;
  padding: 25px 0;

  .branding {
    display: flex;
    align-items: center;

    .header {
      font-weight: 600;
      font-size: 24px;
      color: #000000;
      text-decoration: none;
    }
  }

  .nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    ul {
      margin-right: 32px;

      .link {
        margin-right: 32px;
      }

      .link:last-child {
        margin-right: 0px;
      }
    }

    .profile {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background-color: #303030;
      span {
        pointer-events: none;
      }
      .profile-menu {
        position: absolute;
        top: 55px;
        z-index: 888;
        right: -20px;
        width: 250px;
        background-color: #303030;
        box-shadow: 0 4px 6px rgba($color: #000000, $alpha: 0.1),
          0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
        .triangle {
          position: absolute;
          top: -9px;
          right: 28px;
          font-size: 0;
          line-height: 0;
          border-width: 12px;
          border-color: #303030;
          border-top-width: 0;
          border-style: dashed;
          border-bottom-style: solid;
          border-left-color: transparent;
          border-right-color: transparent;
        }
        .info {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #fff;
          .name {
            position: initial;
            width: 40px;
            height: 40px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            color: #303030;
          }
          .right {
            flex: 1;
            margin-left: 24px;
            p:nth-child(1) {
              font-size: 14px;
            }
          }
        }

        .options {
          padding: 15px;
          .option {
            text-decoration: none;
            color: white;
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            .icon {
              width: 18px;
              height: 18px;
              fill: white;
            }
            p {
              font-size: 14px;
              margin-left: 12px;
            }
          }
          .option:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
}

// 菜单按钮
.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}

// 移动导航栏
.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  background-color: #303030;
  top: 0;
  left: 0;

  .link {
    padding: 15px 0;
    color: #fff;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}

.mobile-nav-enter {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0px);
}

.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>