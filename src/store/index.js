import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit.js";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      sampleBlogCards: [
        {
          blogTitile: "Blog Card #1",
          blogCoverPhoto: "stock-1",
          blogDate: "2022-2-18",
        },
        {
          blogTitile: "Blog Card #2",
          blogCoverPhoto: "stock-2",
          blogDate: "2022-1-30",
        },
        {
          blogTitile: "Blog Card #3",
          blogCoverPhoto: "stock-3",
          blogDate: "2022-1-18",
        },
        {
          blogTitile: "Blog Card #4",
          blogCoverPhoto: "stock-4",
          blogDate: "2022-1-12",
        },
    ],
    editPost:null,
    user: null,
    profileEmail: null,
    profileName: null,
    profileUserName: null,
    profileId: null,
    blogHTML:null,
    blogTitle:'',
    blogPhotoName:null,
    blogPhotoFileURL:null,
    blogPhotoPreview:null,
    blogPosts:[],
    postLoaded:null

  },
  mutations: {
    newBlogPost(state,payload){
      state.blogHTML = payload;
      // console.log(state.blogHTML);
    },
    updateBlogTitle(state,payload){
      state.blogTitle = payload;
    },
    fileNameChange(state, payload){
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload){
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state){
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    SetBlogState(state, payload){
      state.blogTitle = payload.blogTitile;
      state.blogHTML = payload.blogHTML;
      state.blogPhotoFileURL = payload.blogPhotoFileURL;
      state.blogPhotoName = payload.blogPhotoName;
    },
    filterBlogPost(state, payload){
      state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileName= doc.data().name;
      state.profileUserName = doc.data().userName;
    },
    changeName(state, payload) {
      state.profileName = payload;
    },
    changeUserName(state, payload) {
        state.profileUserName = payload;
    },

  },
  actions: {
    async getCurrentUser({commit}){
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo",dbResults); 
    },
    async updateUserSetting({state}) {
      const dataBase = await db.collection('users').doc(state.profileId);
      await dataBase.update({  
          name: state.profileName,
          userName: state.profileUserName
      });
  },
  async getPosts(state){
    const dataBase = db.collection('blogPost').orderBy('date','desc');
    const dbResults = await dataBase.get();
    dbResults.forEach(doc =>{
        if(!state.blogPosts.some(post=>post.blogID===doc.id)){
            const data ={
                blogId:doc.data().blogId,
                blogHTML:doc.data().blogHTML,
                blogCoverPhoto:doc.data().blogCoverPhoto,
                blogTitle:doc.data().blogTitle,
                blogDate:doc.data().date,
                blogCoverPhotoName:doc.data().blogCoverPhotoName,
            }

            state.blogPosts.push(data);
        }
    });
    state.postLoaded = true;
},
  async updatePost({commit ,dispatch},payload){
    commit("filterBlogPost", payload);
    await dispatch("getPost");
  },
  async deletePost({commit},payload){
    const getPost = await db.collection("blogPosts").doc(payload);
    await getPost.delete();
    commit("filterBlogPost", payload);
  },
  
  },
  getters:{
    blogPostsFeed(state){
        return state.blogPosts.slice(0,2);
    },
    blogPostsCards(state){
        return state.blogPosts.slice(2,6);
    }
},
  modules: {
  }
})
