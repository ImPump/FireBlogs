<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        已经有账号了吗？
        <router-link
          class="router-link"
          :to="{ name: 'Login' }"
        >立即登录</router-link>
      </p>
      <h2>注册FireBlogs账号</h2>
      <div class="inputs">
        <!-- <div class="input">
          <user class="icon" /> -->
        <!-- <input type="text" placeholder="姓" v-model="firstName" />
        </div>
        <div class="input">
          <user class="icon" />
          <input type="text" placeholder="名" v-model="lastName" />
        </div> -->
        <div class="input">
          <user class="icon" />
          <input
            type="text"
            placeholder="昵称"
            v-model="name"
          />
        </div>
        <div class="input">
          <user class="icon" />
          <input
            type="text"
            placeholder="用户名"
            v-model="userName"
          />
        </div>
        <div class="input">
          <email class="icon" />
          <input
            type="email"
            placeholder="邮箱"
            v-model="email"
          />
        </div>
        <div class="input">
          <password class="icon" />
          <input
            type="password"
            placeholder="密码"
            v-model="password"
          />
        </div>
        <div
          v-if="error"
          class="error"
        >{{ this.errorMsg}}</div>
      </div>
      <button @click.prevent="register">免费注册</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import password from "../assets/Icons/lock-alt-solid.svg";
import user from "../assets/Icons/user-alt-light.svg";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
  name: "Register",
  components: {
    email,
    password,
    user,
  },
  data() {
    return {
      // firstName: null,
      // lastName: null,
      userName: "",
      name:"",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    async register() {
      if (
        // this.firstName !== "" ||
        // this.lastName !== ||
        this.email !== "" &&
        this.password !== "" &&
        this.name !== "" &&
        this.userName !== ""
      ) {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        console.log(result.user.uid);
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          userName: this.userName,
          name: this.name,
          email: this.email,
          password: this.password,
          // isAdmin:this.isAdmin
        });
        this.$router.push({ name: "Home" });
        setTimeout(() => {
          window.location.reload();
        }, 500);
        return;
      }
      this.error = true;
      this.errorMsg = "请将所有的信息填写完整！";
      return;
    },
  },
};
</script>

<style lang="scss" scope>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>