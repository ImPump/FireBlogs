<template>
  <div class="home">
    <BlogPost v-if="!$store.state.user" :post="welcomeScreen" />
    <BlogPost
      :post="post"
      v-for="(post, index) in sampleBlogPost"
      :key="index"
    />
    <BlogPost
      :post="post"
      v-for="(post, index) in blogPostsFeed"
      :key="index"
    />
    <div class="blog-card-wrap">
      <div class="cantainer">
        <h3>查看最近发布的文章</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
          <BlogCard
            :post="post"
            v-for="(post, index) in blogPostsCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!$store.state.user" class="updates">
      <div class="container">
        <h2>
          不想错过更多精彩好文吗?
          <h3>赶紧注册一个账号吧！</h3>
        </h2>
        <router-link class="router-button" :to="{ name: 'Login' }">
          <Arrow class="arrow arrow-light" />注册FireBlogs账号
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import BlogCard from "../components/BlogCard.vue";
import BlogPost from "../components/BlogPost.vue";
export default {
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "每周都会在这里更新关于编程的博客，包括HTML、CSS、JavaScript甚至更多。今天注册，永远不错过最新的文章。",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title2!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
    user(){
      return this.store.state.user;
    }
    
  },
};
</script>

<style lang='scss' scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    flex-direction: column;
    align-items: center;
    display: flex;
    @media (min-width: 800px) {
      padding: 125px 100px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 20px;
      // justify-content: center;
      // align-items: center;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 20px;
      max-width: 450px;
      width: 100%;
      text-align: center;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 30px;
      }
    }
  }
}
</style>