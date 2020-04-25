<template>
  <div  data-app>
    <form-table></form-table>
  </div>
</template>

<script>
import FormTable from "./modules/form/formTable";

export default {
  name: 'app',
  components: {
    FormTable,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
