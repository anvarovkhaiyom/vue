<template>
  <div class="film-page">
    <film-list :films="films" />
  </div>
</template>

<script>
import FilmList from "../components/FilmList";
import films from "../mocks/films";

export default {
  components: { FilmList },
  data() {
    return {
      films,
    };
  },
};
</script>

<style>
.films-page {
  margin-top: 20px;
  background-color: #0c0c0c;
  flex-direction: column;
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
