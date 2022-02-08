<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          记起密码了吗？
          <router-link
            class="router-link"
            :to="{ name: 'Login' }"
          >重新登录</router-link>
        </p>
        <h2>重置密码</h2>
        <p>输入你注册时使用的邮箱，开始重置密码</p>
        <div class="inputs">
          <div class="input">
            <input
              type="email"
              placeholder="邮箱"
              v-model="email"
            />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">开始重置</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "ForgotPassword",
  components: {
    email,
    Modal,
    Loading,
  },
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = "你将接收到一封用于重置新密码的邮件";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.modalMessage =  "该邮箱不存在，请输入正确的邮箱";
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 32px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>