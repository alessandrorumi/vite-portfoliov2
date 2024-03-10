<template>
    <div class="container p-5">
        <div ref="typedtext"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.typewriter();
    },
    methods: {
        typewriter() {
            const aText = [
                "Ciao!",
                "Mi chiamo <b>Alessandro</b> e sono un <b>Jr Full-Stack Web Developer</b>",
            ];
            const iSpeed = 75;
            let iIndex = 0;
            let iArrLength = aText[0].length;
            const iScrollAt = 20;

            let iTextPos = 0;
            let sContents = '';
            let iRow;

            const typedtext = this.$refs.typedtext;

            function typeWriterInterval() {
                sContents = ' ';
                iRow = Math.max(0, iIndex - iScrollAt);

                while (iRow < iIndex) {
                    sContents += aText[iRow++] + '<br />';
                }

                typedtext.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

                if (iTextPos++ == iArrLength) {
                    iTextPos = 0;
                    iIndex++;
                    if (iIndex != aText.length) {
                        iArrLength = aText[iIndex].length;
                        setTimeout(typeWriterInterval, 500);
                    }
                } else {
                    setTimeout(typeWriterInterval, iSpeed);
                }
            }

            typeWriterInterval();
        }
    }
}
</script>

<style>
.container {
    font-size: 35px;
    width: 100%;
}

button {
    font-size: 25px;
}
</style>
