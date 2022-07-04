<script setup>
</script>

<template>
    <div id="left">
        <h2>Welcome!</h2>
        <p>This is the online home of Denny Creek Brewing. We try to publish all the interesting information
            and news about our brewing adventures here.</p>
        <!-- <p><a href="calendar.aspx">Brewing Calendar</a> - Check out upcoming events at the brewery and other
                        brewing-related events around town.</p> -->
        <p>
            <router-link to="/logs">Brew Logs</router-link> - Brewing notes for batches we've brewed.
        </p>
        <p>
            <router-link to="/labels">Labels</router-link> - Check out some of our bottle labels from past and present
            brews.
        </p>
        <p>
            <router-link to="/competitions">Competitions</router-link> - We've entered one competition so far. You can
            see
            the judge's comments and final scores in this section of the site.
        </p>
        <p><a href="http://dennycreek.blogspot.com" target="_blank">Blog</a> - The Official Denny Creek
            Brewing blog, with random musings from the team (well, OK, only Jeff so far, but I hope the
            other guys will jump in soon).</p>
        <p><a href="http://jbrog.blogspot.com" target="_blank">JBrog</a> - Jeff's Brewlog, the precursor to
            the DCB blog.</p>
        <p>
            <router-link to="/resources">Resources</router-link> - Lots of great info and advice on brewing.
        </p>
        <!-- <p><a href="contact.aspx">Contact Us</a> - Send us your questions and comments. If you're nice and
            you include contact info, and we're not swamped, we'll get back to you.</p> -->
    </div>
    <div id="right">
        <img src="http://farm1.static.flickr.com/10/12591687_262287e772_m.jpg" /><br />
        <br />
        <br />
        <br />
    </div>
    <br />
    <br />
    <br />
</template>

<style scoped>
</style>
