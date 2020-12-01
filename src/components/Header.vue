<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled><b>Facy Quize App</b></b-nav-item>
      <b-nav-item disabled>
        <b>Counter: {{ numCorrect }}/{{ numTotal }}</b>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["numCorrect", "numTotal"]
};
</script>

<style scoped></style>
