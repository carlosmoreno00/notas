<template>
  <div id="app">
    <nota/>
  </div>
</template>

<script>
import nota from './components/nota'
export default {
  name: "App",
  components:{
    nota
  },
};
</script>

<style>
  body {
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div,
  h1,
  h2 {
    color: white;
  }
  hr {
    width: 90%;
    margin: 1rem;
  }
  .input {
    width: 100%;
    height: 3rem;
    font-size: 30px;
  }
  .input2 {
    margin-top: 1rem;
    width: 100%;
    height: 3rem;
    font-size: 30px;
  }
  .principal {
    width: 95vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .dvLinea {
    display: flex;
    font-size: 30px;
    margin-top: 1rem;
    width: 75%;
    background-color: rgb(117, 103, 110);
    padding: 1rem;
    justify-content: space-around;
  }
  .dvLinea div{
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
  #cbox2 {
    transform: scale(3);
    padding-left: 10%;
  }
  .inputs {
    display: flex;
    flex-direction: column;
  }
</style>