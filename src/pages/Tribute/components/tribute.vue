<template>
  <div class="tribute container">
    <main id="main">
      <h1 id="title">Dr. Norman Borlaug</h1>
      <p id="sub-title">The man who saved a billion lives</p>
      <div id="img-div">
        <img src="https://c2.staticflickr.com/4/3689/10613180113_fdf7bcd316_b.jpg" alt id="image" />
        <div
          id="img-caption"
        >Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - parts of his life-long war on hunger.</div>
      </div>
      <section>
        <div id="tribute-info">
          <h3>Here's a time line of Dr. Borlaug's life:</h3>
          <ul id="tribute-items">
            <li>
              <strong>1914</strong> - Born in Cresco, lowa
            </li>
            <li>
              <strong>1933</strong> - Leaves his family to attend the University of Minnesota, thanks to a Depression era program knowns as the "Nation Youth Administration"
            </li>
            <li>
              <strong>1935</strong> - Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. "I saw food changed them", he said. "All of this left scars on me."
            </li>
            <li>
              <strong>1937</strong> - Finishes university and takes a job in the US Forestry Service
            </li>
            <li>
              <strong>1938</strong> - Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants.
            </li>
          </ul>
        </div>
      </section>

      <div id="footer">
        <h3>
          If you have time, you should read more about his incredible human being on hit
          <a
            href="https://en.wikipedia.org/wiki/Norman_Borlaug"
            id="tribute-link"
            target="_blank"
          >Wikipedia entry</a>
        </h3>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background: #eee;
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
}

#main {
  text-align: center;
  background: #eee;
}

#id-subtitle {
  color: #333;
}

p {
}

#img-div {
  background: #fff;
  padding: 10px;
  margin: 10px;
}

#image {
  max-width: 100%;
}

#img-caption {
  color: #333;
}

#tribute-items {
  text-align: left;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
