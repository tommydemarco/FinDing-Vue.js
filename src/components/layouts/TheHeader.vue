<template>
    <header>
            <nav>
                <h1><router-link to="/">FinDing</router-link></h1>
                <ul>
                    <li><router-link to="/coaches">Find a coach</router-link></li>
                    <li><router-link to="/requests">Requests</router-link></li>
                </ul>
            </nav>
    </header>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap');

header {
  width: 100%;
  height: fit-content;
  background-color:#f7b731;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #222;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #222;
}

h1 {
  margin: 0;
  font-family: 'Sansita Swashed', cursive;
  font-size:50px;
  padding-bottom:10px
}

h1 a {
  color: #222;
  margin: 0;
  transition: all .2s ease-in-out;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
  color: rgb(70, 70, 70);
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>