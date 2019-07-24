<template>
  <div id="product">
    <main id="main">
      <header id="header">
        <div class="brand" id="brand">
          <img src="@/assets/Brand.png" alt="brand" />
        </div>
        <nav id="nav-bar">
          <ul>
            <li class="nav-link">Features</li>
            <li class="nav-link">How It Works</li>
            <li class="nav-link">Pricing</li>
          </ul>
        </nav>
      </header>
      <div id="content">
        <section id="form-section">
          <h2>Handcrafted, home-made masterpieces</h2>
          <form action id="form">
            <input type="email" name="email" id="email" placeholder=" Enter your email address" />
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
          <video src="https://www.youtube.com/watch?v=HaeYXG92J4E" id="video">Video</video>
        </section>
        <section id="price-section"></section>
      </div>
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
  height: 75px;
  position: sticky;
  top: 0px;
}

.brand {
  height: 100%;
  width: 200px;
  float: left;
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

ul {
  list-style: none;
}

nav {
  margin-right: 40px;
  float: right;
  align-content: center;
  height: 100%;
}

nav ul {
  margin: auto;
  padding: auto;
  height: 100%;
}

.nav-link {
  padding-right: 10px;
  padding-left: 10px;
  float: left;
  text-align: center;
  line-height: 75px;
}

.nav-link:hover {
  cursor: pointer;
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

#features-section {
  background-color: green;
}

.feature-item {
  background: #f1c40f;
  display: flex;
  padding: 5px 50px 5px 50px;
}

.feature-item .item-icon {
  background: blue;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.feature-item .item-icon img {
  max-width: 100%;
  display: block;
  height: auto;
}

.feature-item .item-content {
  background: chocolate;
}
@media screen and (max-width: 520px) {
  header {
    background: blue;
  }
}
</style>
