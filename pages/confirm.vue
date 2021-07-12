<template>
  <div class="confirm">
    <div>
      <h1>ログイン完了！！</h1>
      <p>{{ this.userName }}</p>
      <p>{{this.userEmail}}</p>
    </div>
  </div>
</template>
<script>
import firebase from "~/plugins/firebase";
export default {
  data(){
    return {
      userName:"",
      userEmail:"",
    }
  },
  methods: {
    displayAccountData(){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.userName = user.displayName;
          this.userEmail = user.email;
        }
      });
    },
  },
  created(){
    this.displayAccountData();
  }
}
</script>

<style scoped>
.confirm {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>