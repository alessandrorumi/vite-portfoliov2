<template>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content p-5">
        <div class="title d-flex align-items-center" :class="{ 'slide-out-left': exitAnimation }" @click="navigateToMain">
            <h1 class="slide-in-left">PORTFOLIO</h1>
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
        navigateToMain() {
            this.exitAnimation = true;
            this.$router.push('/main');
        },
    }
}
</script>

<style lang="scss" scoped>
.content {
    height: 100vh;
    .title {
        height: 100%;
        h1 {
            font-weight: bold;
            font-size: 8rem;
        }
    }
}

 @keyframes slide-in-left {
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.slide-in-left {
	animation: slide-in-left 0.9s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
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