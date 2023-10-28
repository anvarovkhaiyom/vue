<template>
  <header>
    <div class="containers">
      <router-link :to="{ name: 'main' }" class="logo"> Кинотеатр </router-link>
      <div class="links">
        <router-link :to="{ name: 'films' }"> Фильмы </router-link>
      </div>
      <div class="right_button">
        <button
          type="button"
          class="btn btn-outline-light btn-lg"
          @click="changeUserState"
        >
          {{ auth ? "Выйти" : "Войти" }}
        </button>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      auth: false,
    };
  },
  created() {
    this.auth = localStorage.getItem("auth") !== null;
  },
  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem("auth");
        this.$router.push({ name: "main" });
      } else {
        localStorage.setItem("auth", true);
        this.auth = true;
      }
    },
  },
};
</script>

<style>
header {
  background-color: #0c0c0c;
  padding: 30px 0;
  text-align: center;
}
a {
  text-decoration: none;
  font-weight: 700;
  color: #ffffff;
  font-size: 25px;
}
.containers {
  display: flex;
  justify-content: space-around;
}
.logo {
  color: #eb5804;
  font-size: 30px;
}
.links {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
button {
  transition: 0.2s ease-in-out;
  font-weight: bold;
}
button:hover {
  background: #fff;
  color: #eb5804;
}
</style>
