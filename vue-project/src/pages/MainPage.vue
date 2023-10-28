<template>
  <div class="main-page">
    <h1>Онлайн кинотеатр</h1>
    <button
      type="button"
      class="btn"
      @click="this.$router.push({ name: 'films' })"
    >
      Перейти к просмотру
    </button>
  </div>
</template>
<script></script>
<style>
.main-page {
  display: flex;
  flex-direction: column;
  background: #000;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border-radius: 20px;
}
.main-page h1 {
  color: darkorange;
  font-size: 70px;
  margin-bottom: 20px;
}
.btn {
  text-align: center;
  margin: 0 auto;
  background: none;
  border: 2px solid darkorange;
  padding: 10px;
  color: darkorange;
  border-radius: 20px;
}
</style>
