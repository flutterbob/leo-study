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
              <a href="#projects">Work</a>
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
          <h1>These are some of my projects</h1>
          <div class="project-grid">
            <div class="project-title">
              <a href="/tribute.html" target="_black">
                <img src="@/assets/tribute.png" alt="Tribute img" />
                <div class="capture">
                  <p>Tribute Page</p>
                </div>
              </a>
            </div>
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
  top: 0px;
  justify-content: flex-end;
}

header nav ul {
  display: flex;
  list-style-type: none;
  height: 100%;
  margin-right: 20px;
}

header nav ul li {
  height: 100%;
  width: 100px;
}

header nav ul li a {
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  color: #eee;
}

.content {
  overflow: scroll;
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

#projects {
  padding-top: 50px;
  text-align: center;
  background: #45567d;
}

#projects h1 {
  color: #eee;
  font-size: 2em;
  padding-bottom: 80px;
  text-decoration: underline;
}
.project-grid {
  display: grid;
  grid-gap: 20px;
  /* grid-template-columns: 370px 370px 370px; */
  /* grid-template-columns: repeat(auto-fit, minmax(370px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-template-rows: repeat(2, 440px);
  padding-left: 20px;
  padding-right: 20px;
}
.project-title {
  background: greenyellow;
}

.project-title a {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 5fr 1fr;
  text-decoration: none;
}

.project-title img {
  max-width: 100%;
  height: 100%;
  /* max-height: 100%; */
  /* height: auto; */
  display: block;
  object-fit: cover;
}

.project-title a .capture {
  width: 100%;
  background: #303841;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-title a .capture p {
  color: #eee;
  font-size: 1.4em;
}
</style>
