<template>
  <div class="film-page">
    <div class="container" v-if="film">
      <h1>{{ film.title }}</h1>
      <img :src="film.img" :alt="film.title" />
      <div class="section">
        <p class="section__title">Немного о сюжете:</p>
        <p class="section__description">{{ film.description }}</p>
      </div>
      <div class="section">
        <p class="section__title">Рейтинг:</p>
        <p class="section__description">{{ film.rating }}</p>
      </div>
      <div class="section">
        <p class="section__title">Актерский состав:</p>
        <p class="section__description">{{ film.actors.join(", ") }}</p>
      </div>
      <div class="section">
        <p class="section__title">Режисер:</p>
        <p class="section__description">{{ film.directors.join(", ") }}</p>
      </div>
      <div class="line"></div>
      <div class="review">
        <h3>Смотрели этот фильм?</h3>
        <ul>
          <li v-for="question in questions" :key="question.id">
            <button type="button" class="btn btn-outline-light lk">
              {{ question.title }}
            </button>
          </li>
        </ul>
        <p>Оставьте отзыв</p>
        <ul>
          <li v-for="reaction in reactions" :key="reaction.id">
            <button type="button" class="btn btn-outline-light lk">
              {{ reaction.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import films from "../mocks/films";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      film: null,
    };
  },
  computed: {
    ...mapGetters({
      getReactions: "reactions/getReactions",
      getQuestions: "questions/getQuestions",
    }),
    reactions() {
      return this.getReactions;
    },
    questions() {
      return this.getQuestions;
    },
  },
  created() {
    const film = films.find((film) => film.id == this.$route.params.id);
    if (film) {
      this.film = film;
    }
  },
};
</script>

<style>
.film-page {
  padding: 30px 60px;
  margin: 0 auto;
  background: #000;
}
.section {
  max-width: 1000px;
}
h1 {
  color: #ffffff;
  margin-bottom: 30px;
  padding-bottom: 15px;
  position: relative;
}
h1::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
}
img {
  object-fit: cover;
  border-radius: 10px;
  width: 1160px;
  height: 600px;
  margin-bottom: 30px;
}
.section__title {
  color: #eb5804;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 10px;
}
.section__description {
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
}
.review {
  color: #ffffff;
}
.review p {
  font-size: 20px;
}
.line {
  background: linear-gradient(90deg, #eb5804 0%, rgba(0, 0, 0, 0) 90%);
  height: 2px;
  width: 60%;
}
.lk {
  color: #eb5804;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 27%;
}
ul li {
  margin-left: 20px;
  list-style-type: none;
}
</style>
