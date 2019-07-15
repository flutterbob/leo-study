<template>
  <div class="survey">
    <main id="main">
      <h1 id="title">Survey Form</h1>
      <div id="content">
        <p id="description">Let us know how we can impore freeCodeCamp</p>
        <form action id="survey-form">
          <div class="tabRow">
            <div class="labels">
              <label for="name" id="name-label">Name:</label>
            </div>
            <div class="rightTabs">
              <input class="inputField" type="text" id="name" placeholder="Enter your name" />
            </div>
          </div>
          <div class="tabRow">
            <div class="labels">
              <label for="email" id="email-label">Email:</label>
            </div>
            <div class="rightTabs">
              <input class="inputField" type="email" id="email" placeholder="Enter your Email" />
            </div>
          </div>
          <div class="tabRow">
            <div class="labels">
              <label for="age" id="number-label">Age:</label>
            </div>
            <div class="rightTabs">
              <input class="inputField" type="number" id="age" min="10" max="50" placeholder="Age" />
            </div>
          </div>
          <div class="tabRow">
            <div class="labels">
              <label
                for="dropdown"
                id="dropdown-label"
              >Which option best describes your current role?</label>
            </div>
            <div class="rightTabs">
              <select name="dropdown" id="dropdown">
                <option value="0">Student</option>
                <option value="1">Full Time Job</option>
                <option value="2">Full Time Learner</option>
                <option value="3">Prefer not to say</option>
                <option value="4">Other</option>
              </select>
            </div>
          </div>
          <div class="tabRow">
            <div class="labels">
              <label
                for="radioGroup"
                id="radioGroup-label"
              >How likely is that you would recommend freeCodepen to your friends?</label>
            </div>
            <div class="rightTabs">
              <ul id="radioGroup" style="list-style:none">
                <li class="radio">
                  <input type="radio" name="radio-buttons" value="1" /> Definitely
                </li>
                <li class="radio">
                  <input type="radio" name="radio-buttons" value="2" /> Maybe
                </li>
                <li class="radio">
                  <input type="radio" name="radio-buttons" value="3" /> Not sure
                </li>
              </ul>
            </div>
          </div>
          <div class="tabRow">
            <div class="labels">
              <label for>What do you like most in FCC?</label>
            </div>
            <div class="rightTabs">
              <select name id>
                <option value>Challenges</option>
                <option value>Projects</option>
                <option value>Community</option>
                <option value>Open Source</option>
              </select>
            </div>
          </div>
          <div class="tabRow">
            <div class="labels">
              <label for>
                Things that should be improved in the future
                <br />(Check all that apply):
              </label>
            </div>
            <div class="rightTabs">
              <ul style="list-style:none">
                <li class="radio">
                  <input type="checkbox" name id /> Font-end Projects
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Back-end Projects
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Data Visualization
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Challenges
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Open Sources Community
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Gitter help rooms
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Videos
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> City Meetups
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Wiki
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Forum
                </li>
                <li class="radio">
                  <input type="checkbox" name id /> Additional Courses
                </li>
              </ul>
            </div>
          </div>
          <div class="tabRow">
            <div class="labels">
              <label for>Any Comments or Suggestions?</label>
            </div>
            <div class="rightTabs">
              <textarea name id cols="30" rows="10"></textarea>
            </div>
          </div>
          <button>Submit</button>
        </form>
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
  width: 100%;
  height: 100%;
  background: #a9d7d1;
  font-family: "Courier New", Courier, monospace;
}
#main {
  text-align: center;
}
#content {
  background: #fff;
  margin: 10px 20% 10px 20%;
  padding: 10px;
  border-radius: 2px;
  text-align: center;
}

.tabRow {
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

.labels {
  display: inline-block;
  width: 40%;
  text-align: right;
  vertical-align: top;
}

.rightTabs {
  display: inline-block;
  width: 48%;
  text-align: left;
  vertical-align: top;
  padding-left: 15px;
}

.tabRow .inputField {
  width: 80%;
}

ul {
  margin: 0px;
  padding: 0px;
}

.radio {
  margin-bottom: 5px;
}

@media screen and (max-width: 520px) {
  .labels {
    display: block;
    text-align: left;
    width: 100%;
  }

  .rightTabs {
    display: block;
    text-align: left;
    width: 100%;
    padding-left: 0px;
  }
}
</style>
