<template>
  <div id="product">
    <main id="main">
      <header id="header">
        <div class="brand" id="brand">
          <img src="@/assets/Brand.png" alt="brand" />
        </div>
        <nav id="nav-bar">
          <ul>
            <li class="nav-link">
              <a href="#features-section">Features</a>
            </li>
            <li class="nav-link">
              <a href="#howitwork-section">How It Works</a>
            </li>
            <li class="nav-link">
              <a href="#price-section">Pricing</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="content">
        <section id="form-section">
          <h2>Handcrafted, home-made masterpieces</h2>
          <form action="https://www.freecodecamp.com/email-submit" id="form">
            <input type="email" name="email" id="email" placeholder="Enter your email address" />
            <input type="submit" value="GET STARTED" id="submit" />
          </form>
        </section>
        <section id="features-section">
          <div class="feature-item">
            <div class="item-icon">
              <img src="@/assets/pudding.png" alt="icon1" />
            </div>
            <div class="item-content">
              <h1>Premium Material</h1>
              <p>Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="item-icon">
              <img src="@/assets/chip.png" alt="icon1" />
            </div>
            <div class="item-content">
              <h1>Fast Shipping</h1>
              <p>We make sure you receive your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="item-icon">
              <img src="@/assets/macaron.png" alt="icon1" />
            </div>
            <div class="item-content">
              <h1>Quality Assurance</h1>
              <p>For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
            </div>
          </div>
        </section>
        <section id="howitwork-section">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
        </section>
        <section id="price-section">
          <div class="price-item">
            <div class="price-item-header">
              <h3>TENOR TROMBONE</h3>
            </div>
            <div class="price-item-content">
              <h2>$600</h2>
              <ul>
                <li>Leo</li>
                <li>Flutter</li>
                <li>Yi</li>
                <li>Zheng</li>
              </ul>
              <button>SELECT</button>
            </div>
          </div>
          <div class="price-item">
            <div class="price-item-header">
              <h3>VALITE TROMBONE</h3>
            </div>
            <div class="price-item-content">
              <h2>$900</h2>
              <ul>
                <li>Leo</li>
                <li>Flutter</li>
                <li>Yi</li>
                <li>Zheng</li>
              </ul>
              <button>SELECT</button>
            </div>
          </div>
          <div class="price-item">
            <div class="price-item-header">
              <h3>BASS TROMBONE</h3>
            </div>
            <div class="price-item-content">
              <h2>$1200</h2>
              <ul>
                <li>Leo</li>
                <li>Flutter</li>
                <li>Yi</li>
                <li>Zheng</li>
              </ul>
              <button>SELECT</button>
            </div>
          </div>
        </section>
      </div>
      <footer id="footer">
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <span>Copyright 2019, Chinese University of Hongkong</span>
      </footer>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  background-color: #eeeeee;
}

header {
  background-color: #eeeeee;
  width: 100%;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  height: 100%;
  width: 200px;
  text-align: center;
  line-height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand img {
  max-width: 100%;
  display: block;
  height: auto;
}

nav {
  margin-right: 40px;
  align-content: center;
  height: 100%;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40vw;
}

nav ul .nav-link a {
  text-decoration: none;
  color: #1c1c1c;
}

nav ul .nav-link:hover {
  cursor: pointer;
}

#email {
  padding: 5px;
}

#content {
  text-align: center;
}

#form {
  text-align: center;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

#email {
  font-size: 1.1em;
  width: 400px;
  height: 1.8em;
  border-color: #1c1c1c;
  border-width: 1px;
}

#submit {
  font-size: 1.5em;
  background-color: #f1c40f;
  font-weight: bold;
  border-style: none;
}

.feature-item {
  display: flex;
  padding: 5px 50px 5px 50px;
}

.feature-item .item-icon {
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  flex-shrink: 0;
}

.feature-item .item-icon img {
  max-width: 100%;
  display: block;
  height: auto;
}

.feature-item .item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding-left: 5px;
  text-align: left;
}

.feature-item .item-content * {
  margin: 0;
}

.feature-item .item-content p {
  text-align: justify;
}

#howitwork-section {
  padding: 50px 50px 20px 50px;
  display: flex;
  justify-content: center;
}

#howitwork-section iframe {
  width: 560px;
  height: 315px;
}

iframe {
  border: none;
}

#price-section {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 20px;
}

.price-item {
  background-color: #eeeeee;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 300px;
  flex-basis: 300px;
  margin: 0px 5px 0px 5px;
  border: 1px solid #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price-item .price-item-header {
  background: #ddd;
  width: 100%;
  text-transform: uppercase;
}

.price-item ul {
  padding: 0;
  margin: 0;
  font-size: 1.1em;
  list-style-type: none;
}

.price-item button {
  background: #f1c40f;
  height: 35px;
  width: 100px;
  margin-top: 15px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: none;
  font-weight: bold;
  font-size: 1.3em;
}

footer {
  background: #ddd;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

footer ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

footer ul li {
  float: left;
  margin-left: 30px;
}

footer ul li a {
  text-decoration: none;
  color: #1f1f1f;
  font-size: 1.1em;
}

footer span {
  padding-top: 5px;
  font-size: 1.1em;
  color: #5b5b5b;
}

@media screen and (max-width: 720px) {
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  header nav ul {
    flex-direction: column;
    height: 15vh;
  }

  .nav-link {
    float: none;
  }

  .feature-item .item-icon {
    display: none;
  }

  #price-section {
    flex-direction: column;
    align-items: center;
  }

  #price-section .price-item {
    width: 320px;
    margin-top: 20px;
  }
}

@media screen and (max-width: 560px) {
  #howitwork-section iframe {
    height: 200px;
  }
}
</style>
