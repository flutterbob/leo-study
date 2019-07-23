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
        <h2>Handcrafted, home-made masterpieces</h2>
        <form action id="form">
          <input type="email" name="email" id="email" placeholder="Enter your email address" />
          <input type="submit" value="Submit" id="submit" />
        </form>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, mollitia nostrum. Quae doloribus accusantium repellendus molestiae consequatur tempora aut, placeat ullam sed officia, facere rerum ad modi illo totam saepe.
        </p>
        <video src="https://www.youtube.com/watch?v=HaeYXG92J4E" id="video">Video</video>
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
}

header {
  width: 100%;
  height: 75px;
  background: #ffffff;
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

@media screen and (max-width: 520px) {
  header {
    background: blue;
  }
}
</style>
