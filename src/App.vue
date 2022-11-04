|
<template>
  <nav>
    <router-link class="pollarize" to="/">Pollarize</router-link>
    <router-link v-if="isLogedIn" to="/create-new">Opprett ny</router-link>
    <router-link v-if="isLogedIn" to="/login">Logg ut</router-link>
  </nav>
  <router-view :polls="polls" />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLogedIn: true,
      polls: [
        {
          id: 0,
          pollText: 'Trivsel på arbeidsplassen',
          status: 'Active',
          question: 'Trives du på jobben?',
        },
        {
          id: 1,
          pollText: 'Trivsel på arbeidsplassen2',
          status: 'Inactive',
          question: 'Kan vi gjøre noe for å forbedre din arbeidsdag?',
        },
      ],
    };
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #2c3e50;
  color: #ffffff;
}

.pollarize {
  font-weight: bold;
  margin-right: 100px;
  text-decoration: none;
}

nav {
  padding: 30px;
  border-bottom: 2px solid #ffffff;
}

nav a {
  font-weight: bold;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #1e1e1e;
}
</style>
