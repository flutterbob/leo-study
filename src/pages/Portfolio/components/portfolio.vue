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
          <h1>Hi! I'm Leo</h1>
        </section>
        <section id="projects">
          <div class="project-title">
            <!-- TODO -->
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
html,
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#app,
.portfolio,
main {
  height: 100%;
  width: 100%;
}

header {
  width: 100%;
  height: 15vh;
  background: red;
}
</style>
