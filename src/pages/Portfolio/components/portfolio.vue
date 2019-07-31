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
            <!-- 1 -->
            <div class="project-title">
              <a href="/tribute.html" target="_black">
                <img src="@/assets/tribute.png" alt="tribute img" />
                <div class="capture">
                  <p>Tribute Page</p>
                </div>
              </a>
            </div>
            <!-- 2 -->
            <div class="project-title">
              <a href="/survey.html" target="_black">
                <img src="@/assets/survey.png" alt="survey img" />
                <div class="capture">
                  <p>Survey Page</p>
                </div>
              </a>
            </div>
            <!-- 3 -->
            <div class="project-title">
              <a href="/product.html" target="_black">
                <img src="@/assets/product.png" alt="product img" />
                <div class="capture">
                  <p>Product Page</p>
                </div>
              </a>
            </div>
            <!-- 4 -->
            <div class="project-title">
              <a href="/technical.html" target="_black">
                <img src="@/assets/technical.png" alt="technical img" />
                <div class="capture">
                  <p>Technical Page</p>
                </div>
              </a>
            </div>
            <!-- 5 -->
            <div class="project-title">
              <a href="/scssSt.html" target="_black">
                <img src="@/assets/tribute.gif" alt="Tribute img" />
                <div class="capture">
                  <p>Scss Page</p>
                </div>
              </a>
            </div>
          </div>
          <div class="project-more">
            <a href="#">
              <p>Show all ></p>
            </a>
          </div>
        </section>
        <section id="contact">
          <h1>Let's work together...</h1>
          <em>How do you take your coffee?</em>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-square"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-github-alt"></i> GitHub
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-envelope"></i> Send a email
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-weixin"></i> WeChat
              </a>
            </li>
          </ul>
        </section>
      </div>
      <footer>
        <p>**This is just a fake portfolio. All the projects and contact details given are not real.</p>
        <p>&copy Created for LeoStudy</p>
      </footer>
    </main>
  </div>
</template>

<script>
import "../../../assets/fontawesome-free-5.10.0-web/css/all.min.css";
export default {
  data() {
    return {
      ins: "a"
    };
  },
  created() {
    console.log(process.env.VUE_APP_SECRET);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
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
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
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
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#projects h1 {
  color: #eee;
  font-size: 2em;
  padding-bottom: 80px;
  text-decoration: underline;
}
.project-grid {
  display: grid;
  grid-gap: 40px;
  /* grid-template-columns: 370px 370px 370px; */
  /* grid-template-columns: repeat(auto-fit, minmax(370px, 1fr)); */
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  grid-template-rows: repeat(2, 440px);
  padding-left: 20px;
  padding-right: 20px;
}

.project-title a {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 5fr 1fr;
  text-decoration: none;
}

.project-title img {
  width: 100%;
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

.project-more {
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-more p {
  width: 150px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  text-decoration: none;
  color: #eee;
  font-size: 1.5em;
  border-radius: 2px;
}

.project-more p:hover {
  background-color: #bc3034;
  animation-duration: 50000ms;
  animation-delay: 50000ms;
}

#contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #303841;
  height: 70vh;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#contact h1 {
  text-align: center;
  color: #eee;
  font-size: 3em;
}

#contact em {
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 15px;
  color: #999;
}

#contact ul {
  display: flex;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: auto;
  padding-right: auto;
  list-style-type: none;
  justify-content: space-around;
  width: 60vw;
  align-self: center;
  flex-wrap: wrap;
}

#contact ul li a {
  display: inline-block;
  color: #eee;
  font-size: 1.8em;
  padding: 10px;
  overflow: hidden;
}

footer {
  height: 18vh;
  border-top: 0.4em solid #bc3034;
  background: #303841;
  display: flex;
  justify-content: space-around;
  padding: 2em;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

footer p {
  color: #eee;
  font-size: 1.5em;
  margin: auto;
  padding: auto;
}
</style>
