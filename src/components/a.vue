<template>
    <div class="container">
        <div class="video-container">
            <video @click="playAnimation" :class="{ 'slide-out-left': exitAnimation }" class="desktop-video" autoplay playsinline
                muted @animationend="navigateToMain">
                <source src="../assets/desktop/landing.mp4" type="video/mp4">
                Il tuo browser non supporta il tag video.
            </video>
            <video @click="playAnimation" :class="{ 'slide-out-left': exitAnimation }" class="mobile-video" autoplay playsinline muted @animationend="navigateToMain">
                <source src="../assets/mobile/landing.mp4" type="video/mp4">
                Il tuo browser non supporta il tag video.
            </video>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            exitAnimation: false
        };
    },
    methods: {
        playAnimation() {
            this.exitAnimation = true;
        },
        navigateToMain() {
            this.$router.push('/main');
        },
    }
}
</script>

<style scoped>
#app {
    background-color: #e8e8e8;
}

.video-container {
    background-color: #e8e8e8;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-attachment: fixed;
}

.desktop-video {
    display: none;
}

@media screen and (min-width: 768px) {
    .desktop-video {
        display: block;
    }

    .mobile-video {
        display: none;
    }
}

@keyframes slide-out-left {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(-1000px);
        opacity: 0;
    }
}

.slide-out-left {
    animation: slide-out-left .75s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}
</style>
