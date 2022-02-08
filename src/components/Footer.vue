<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link
            class="header"
            :to="{ name: 'Home' }"
          >
            <img
              src="../assets/logo.png"
              width="30px"
              height="30px"
              alt="logo"
              style="float: left
              "
            /> FireBlogs
          </router-link>
          <ul>
            <li>
              <a
                href="https://github.com/ImPump"
                class="icon"
                target="_blank"
              >
                <i class="iconfont icon-github"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="icon"
              >
                <i class="iconfont icon-wechat"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="icon"
              >
                <i class="iconfont icon-bilibili"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="icon"
              >
                <i class="iconfont icon-weibo"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
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
              v-if="$store.state.isAdmin"
            >发文章</router-link>
            <router-link
              class="link"
              :to="{ name: 'Login' }"
              v-if="!user"
            >登录/注册</router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2022 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scope>
footer {
  padding: 100px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0;
    }
    > div {
      display: flex;
      flex: 1;
    }
    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      .header {
        text-align: center;
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        margin-bottom: 16px;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .fab {
              color: #fff;
              font-size: 24px;
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;

          justify-content: center;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
      p {
        margin-top: auto;
      }
    }
  }
}

@font-face {
  font-family: "iconfont"; /* Project id 3003248 */
  src: url("//at.alicdn.com/t/font_3003248_sdke91qnq0c.woff2?t=1639115128099")
      format("woff2"),
    url("//at.alicdn.com/t/font_3003248_sdke91qnq0c.woff?t=1639115128099")
      format("woff"),
    url("//at.alicdn.com/t/font_3003248_sdke91qnq0c.ttf?t=1639115128099")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bilibili:before {
  content: "\e609";
}

.icon-email:before {
  content: "\e60b";
}

.icon-github:before {
  content: "\e60a";
}

.icon-wechat:before {
  content: "\e60c";
}

.icon-weibo:before {
  content: "\e60d";
}

.iconfont {
  font-size: 1.5rem;
  text-decoration: none;
  color: #fff;
}
a {
  text-decoration: none;
}
</style>