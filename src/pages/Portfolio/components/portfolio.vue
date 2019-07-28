<template>
  <div class="portfolio">
    <main>
      <header>
        <nav id="navbar">
          <ul>
            <li>
              <a href="#welcome-section">About</a>
            </li>
            <li>
              <a href="#project">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div class="content">
        <section id="welcome-section">
          <h1>Hey! I'm Leo</h1>
          <h2>
            <em>a web developer</em>
          </h2>
        </section>
        <section id="projects">
          <div class="project-title">
            <a href="#">link</a>
          </div>
        </section>
        <section id="contact"></section>
      </div>
      <footer></footer>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* height: 100%; */
  /* width: 100%; */
}

body {
  background-color: green;
}

#app,
.portfolio,
main {
  height: 100%;
  width: 100%;
}

header {
  width: 100%;
  height: 12vh;
  background: #bc3034;
  display: flex;
  position: sticky;
}

header nav ul {
  display: flex;
  list-style-type: none;
  height: 100%;
}

header nav ul li a {
  text-decoration: none;
  color: #eee;
}

#welcome-section {
  background: #202023;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#welcome-section h1 {
  font-size: 3em;
  color: #eee;
}

#welcome-section h2 {
  padding-top: 10px;
  font-weight: 100;
  color: red;
}
</style>
