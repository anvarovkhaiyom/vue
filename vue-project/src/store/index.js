import { createStore } from "vuex";
import reactions from "./reactions";
import questions from "./questions";

export default createStore({
  modules: { reactions, questions },
});
