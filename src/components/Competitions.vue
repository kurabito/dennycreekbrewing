<script>
export default {
    inject: ["bucket"],
}
</script>

<template>
    <div id="single">
        <h2 align="center">Competitions</h2>
        <p>We entered an IPA and a wheat beer in the 2007 Evergreen State Fair homebrew competition. The wheat received
            a white ribbon and the IPA received a red, just one point short of a blue ribbon!</p>
        <p>Here are some of the documents related to the competition. Click on an image to see a larger version.</p>
        <table align="center">
            <tr>
                <td class="centered"><a :href="bucket + 'competitions/IPAOverall.bmp'" target="_blank"
                        class="small"><img :src="bucket + 'competitions/IPAOverall.bmp'" width="60"
                            height="85" /><br />IPA<br />Overall</a></td>
                <td class="centered"><a :href="bucket + 'competitions/IPA1.jpg'" target="_blank" class="small"><img
                            :src="bucket + 'competitions/IPA1.jpg'" width="60" height="85" /><br />IPA<br />Score #1</a>
                </td>
                <td class="centered"><a :href="bucket + 'competitions/IPA2.jpg'" target="_blank" class="small"><img
                            :src="bucket + 'competitions/IPA2.jpg'" width="60" height="85" /><br />IPA<br />Score #2</a>
                </td>
                <td class="centered"><a :href="bucket + 'competitions/WheatOverall.bmp'" target="_blank"
                        class="small"><img :src="bucket + 'competitions/WheatOverall.bmp'" width="60"
                            height="85" /><br />Wheat<br />Overall</a></td>
                <td class="centered"><a :href="bucket + 'competitions/Wheat1.jpg'" target="_blank" class="small"><img
                            :src="bucket + 'competitions/Wheat1.jpg'" width="60" height="85" /><br />Wheat<br />Score
                        #1</a></td>
                <td class="centered"><a :href="bucket + 'competitions/Wheat2.jpg'" target="_blank" class="small"><img
                            :src="bucket + 'competitions/Wheat2.jpg'" width="60" height="85" /><br />Wheat<br />Score
                        #2</a></td>
                <td class="centered"><a :href="bucket + 'competitions/award.jpg'" target="_blank" class="small"><img
                            :src="bucket + 'competitions/award.jpg'" width="60" height="85" /><br />Award<br />Check</a>
                </td>
            </tr>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
</template>

<style scoped>
</style>
