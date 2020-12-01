<template>
  <div class="home">
    <Header :numCorrect="numCorrect" :numTotal="numTotal"> </Header>
    <b-container class="bs-example-row">
      <b-col sm="6" offset="3">
        <QuestionBox
          v-if="question.length"
          :currentQuestion="question[index]"
          :next="next"
          :increment="increment"
        />
      </b-col>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

import Header from "@/components/Header";
import QuestionBox from "@/components/QuestionBox";
import sendRequest from "../api/resouce";

export default {
  name: "Home",
  components: {
    QuestionBox,
    Header
  },
  data() {
    return {
      question: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) this.numCorrect++;
      this.numTotal++;
    }
  },
  mounted: function() {
    sendRequest(
      "https://opentdb.com/api.php?amount=10&category=27&type=multiple"
    ).then(data => {
      return (this.question = data.results);
    });
  }
};
</script>
