<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->

  <div id="main">
    <div id="frame">
      <!-- <dcb:header id="ctlHeader" runat="server"></dcb:header>
            <div class="spacer">&nbsp;</div>
            <dcb:nav id="ctlNavTop" runat="server"></dcb:nav> -->
      <div id="header">
        <!-- <table id="headertable" align="center" cellpadding="0" cellspacing="0">
          <tr>
            <td><a href="default.aspx" class="nodecoration"><img src="./assets/icon2.png" border="0"></a></td>
            <td><a href="default.aspx" class="nodecoration black">Denny Creek Brewing</a></td>
          </tr>
        </table> -->
        <a href="default.aspx" class="nodecoration"><img src="./assets/icon2.png" border="0"></a>
        <a href="default.aspx" class="nodecoration black">Denny Creek Brewing</a>
      </div>
      <div class="spacer">&nbsp;</div>
      <div id="nav">
        <div style="padding: 5px;">
          <a href="/default.aspx">Home</a> |
          <a href="/calendar.aspx">Calendar</a> |
          <a href="/logs.aspx">Brew Logs</a> |
          <a href="/labels.aspx">Labels</a> |
          <a href="/competitions.aspx">Competitions</a> |
          <a href="http://dennycreek.blogspot.com" target="_blank">Blog</a> |
          <a href="http://jbrog.blogspot.com" target="_blank">JBrog</a> |
          <a href="/resources.aspx">Resources</a> |
          <a href="/contact.aspx">Contact</a>
        </div>
      </div>
      <div id="content">
        <Home />
      </div>
      <!-- <dcb:footer id="ctlFooter" runat="server"></dcb:footer> -->
      <!-- To do: set end year dynamically -->
      <div id="footer">&copy; 2007-2002 Denny Creek Brewing. All rights reserved.</div>
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
  float: left;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
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
