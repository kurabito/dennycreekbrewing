<script setup>
</script>

<template>
  <div id="main">
    <div id="frame">
      <div id="header">
        <router-link to="/" class="nodecoration"><img src="./assets/icon2.png" border="0"></router-link>
        <router-link to="/" class="nodecoration black">Denny Creek Brewing</router-link>
      </div>
      <div class="spacer">&nbsp;</div>
      <div id="nav">
        <div style="padding: 5px;">
          <router-link to="/">Home</router-link> |
          <!-- <a href="/calendar.aspx">Calendar</a> | -->
          <router-link to="/logs">Brew Logs</router-link> |
          <router-link to="/labels">Labels</router-link> |
          <router-link to="/competitions">Competitions</router-link> |
          <a href="http://dennycreek.blogspot.com" target="_blank">Blog</a> |
          <a href="http://jbrog.blogspot.com" target="_blank">JBrog</a> |
          <router-link to="/resources">Resources</router-link>
          <!-- <a href="/contact.aspx">Contact</a> -->
        </div>
      </div>
      <div id="content">
        <router-view />
      </div>
      <div id="footer">&copy; 2007-{{ new Date().getFullYear() }} Denny Creek Brewing. All rights reserved.</div>
    </div>
  </div>
</template>

<style>

body {
  background-color: #777777;
  background-color: #CE8600;
  font-family: Verdana, Arial, Sans-Serif;
  font-size: smaller;
  margin: 10px 0px;
  /* center page content for IE */
  text-align: center;
}

/* 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 */

a {
  color: #007F0E;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.nodecoration {
  font-weight: normal;
}

.nodecoration:hover {
  text-decoration: none;
}

h1 a:hover {
  text-decoration: none;
}

td {
  padding: 10px;
  font-size: smaller;
}

img {
  border: 1px solid black;
}

#main {
  width: 800px;
  font-family: Verdana, Arial, Sans-Serif;
  /* center page content for Firefox */
  margin: 0 auto 10px auto;
  background-color: #777777;
  background-color: #CE8600;
}

#frame {
  /* Force Firefox to show top margin of header
	border-top: 1px solid black;
	border-bottom: 1px solid black;
 */
}

#header {
  float: left;
  text-align: center;
  vertical-align: bottom;
  font-family: Papyrus, Verdana, Arial, Sans-Serif;
  font-weight: bold;
  font-size: 48px;
  border: 2px solid black;
  margin: 6px;
  margin-bottom: 0;
  background-color: white;
  width: 100%;
}

#header img {
  border: none;
  height: 100%;
  vertical-align: middle;
  margin: 10px 20px 10px;
}

#headertable {
  text-align: center;
  vertical-align: bottom;
  font-size: 48px;
}

#nav {
  float: left;
  border: 2px solid black;
  font-size: xx-small;
  margin: 6px;
  margin-top: 0;
  margin-bottom: 0;
  border-bottom: none;
  background-color: white;
  color: Black;
  width: 100%;
}

#nav a {}

#content {
  float: left;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  border: 2px solid black;
  border-bottom: none;
  margin: 6px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: white;
  width: 100%;
}

#content a {
  font-weight: bold;
}

#left {
  float: left;
  padding-left: 50px;
  width: 400px;
}

#right {
  float: right;
  padding-right: 50px;
}

#single {
    margin-left: 50px;
    margin-right: 50px;
}

#footer {
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: xx-small;
  border: 2px solid black;
  margin: 6px;
  margin-top: 0;
  border-top: none;
  background-color: white;
  width: 100%;
}

.spacer {
  float: left;
  height: 5px;
  background-color: #777777;
  background-color: #CE8600;
  width: 100%;
}

.small {
  font-size: smaller;
}

.red {
  color: red;
}

.black {
  color: black;
}

.right {
  margin: 20px 40px 0 20px;
  float: right;
}

.left {
  margin: 20px 20px 0 0;
  float: left;
}

.textbox {
  width: 200px;
}

.centered {
  text-align: center;
}
</style>
