<template>
  <div class="technical">
    <nav id="nav-doc">
      <header>
        <h1>JS Document</h1>
      </header>
      <ul>
        <li>
          <a href="#Introduce" class="nav-link">Introduce</a>
        </li>
        <li>
          <a href="#What_you_should_already_know" class="nav-link">What you should already know</a>
        </li>
        <li>
          <a href="#JavaScript_and_Java" class="nav-link">JavaScript and Java.</a>
        </li>
        <li>
          <a href="#Hello_world" class="nav-link">Hello world</a>
        </li>
        <li>
          <a href="#Variables" class="nav-link">Variables</a>
        </li>
        <li>
          <a href="#Declaring_variables" class="nav-link">Declaring variables</a>
        </li>
      </ul>
    </nav>
    <main id="main-doc">
      <div class="main-section" id="Introduce">
        <header>
          <h1>Introduce</h1>
        </header>
        <div class="main-section-content">
          <p>JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.</p>
          <p>JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:</p>
          <ul>
            <li>Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.</li>
            <li>Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.</li>
          </ul>
        </div>
      </div>
      <div class="main-section" id="What_you_should_already_know">
        <header>
          <h1>What you should already know</h1>
        </header>
        <div class="main-section-content">
          <p>This guid assumes you have the following basic background:</p>
          <ul>
            <li>A general understanding of the Internet and the World Wide Web (WWW).</li>
            <li>Good working knowledge of HyperText Markup Language (HTML).</li>
            <li>Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.</li>
          </ul>
        </div>
      </div>
      <div class="main-section" id="JavaScript_and_Java">
        <header>
          <h1>JavaScript and Java</h1>
        </header>
        <div class="main-section-content">
          <p>JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.</p>
          <p>In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements. Functions can be properties of objects, executing as loosely typed methods.</p>
          <p>JavaScript is a very free-form language compared to Java. You do not have to declare all variables, classes, and methods. You do not have to be concerned with whether methods are public, private, or protected, and you do not have to implement interfaces. Variables, parameters, and function return types are not explicitly typed.</p>
        </div>
      </div>
      <div class="main-section" id="Hello_world">
        <header>
          <h1>Hello world</h1>
        </header>
        <div class="main-section-content">
          <p>To get started with writing JavaScript, open the Scratchpad and write your first "Hello world" JavaScript code:</p>
          <code>
            function greetMe(yourName) { alert("Hello " + yourName); }
            greetMe("World");
          </code>
        </div>
      </div>
      <div class="main-section" id="Variables">
        <header>
          <h1>Variables</h1>
        </header>
        <div class="main-section-content">
          <p>You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.</p>
          <p>A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).</p>
          <p>You can use ISO 8859-1 or Unicode letters such as å and ü in identifiers. You can also use the Unicode escape sequences as characters in identifiers. Some examples of legal names are Number_hits, temp99, and _name.</p>
        </div>
      </div>
      <div class="main-section" id="Declaring_variables">
        <header>
          <h1>Declaring variables</h1>
        </header>
        <div class="main-section-content">
          <p>You can declare a variable in three ways:</p>
          <p>With the keyword var. For example,</p>
          <code>var x = 42.</code>
          <p>This syntax can be used to declare both local and global variables.</p>
          <p>By simply assigning it a value. For example,</p>
          <code>x = 42.</code>
          <p>This always declares a global variable. It generates a strict JavaScript warning. You shouldn't use this variant.</p>
          <p>With the keyword let. For example,</p>
          <code>let y = 13.</code>
          <p>This syntax can be used to declare a block scope local variable. See Variable scope blow.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Times New Roman", Times, serif;
  height: 100%;
  background: #ffffff;
}

#app {
  height: 100%;
}

.technical {
  display: flex;
  height: 100%;
}

#nav-doc {
  width: 380px;
  border-right: 2px solid #bbbbbb;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

#nav-doc header h1 {
  text-align: center;
  font-size: 2em;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border-bottom: 1px solid #dddddd;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: 80px;
  line-height: 80px;
}

#nav-doc ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#nav-doc ul li {
  border-top: 1px solid #eeeeee;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 60px;
  width: 100%;
  line-height: 60px;
}

li:hover {
  cursor: pointer;
  background: #eeeeee;
}

#nav-doc ul li a {
  display: block;
  text-decoration: none;
  color: #1f1f1f;
  font-size: 1em;
  width: 100%;
  height: 100%;
  padding-left: 20px;
}

#main-doc {
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  text-align: justify;
  overflow: scroll;
  height: 100%;
  padding-bottom: 100px;
}

.main-section {
  padding: 0px 20px 0px 20px;
}

.main-section p {
  padding-left: 16px;
  font-size: 1.1em;
  color: #505050;
}

.main-section ul {
  color: #505050;
  font-size: 1.1em;
}
.main-section ul li {
  margin-top: 20px;
}

.main-section code {
  display: block;
  font-family: monospace;
  font-size: 1.2em;
  background-color: #f7f7f7;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 5px;
  white-space: pre;
  text-align: left;
  word-break: normal;

  margin: 0px 50px 0px 50px;
  padding-top: 20px;
  padding-bottom: 20px;
}

@media screen and (max-width: 820px) {
  .technical {
    flex-direction: column;
  }

  #nav-doc {
    width: 100%;
    height: 200px;
  }

  #nav-doc ul {
    overflow: scroll;
  }
}
</style>
