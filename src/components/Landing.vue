<template>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content p-5">
        <div class="title d-flex align-items-center" :class="{ 'slide-out-left': exitAnimation }"
            @click="navigateToMain">
            <h1 class="slide-in-left text-pop-up-right">PORTFOLIO</h1>
            <h2 class="tracking-in-expand-fwd-bottom ">Rumi Alessandro</h2>
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
            setTimeout(() => {
                this.$router.push('/main');
            }, 1000);
        },
    }
}
</script>

<style lang="scss" scoped>
.content {
    height: 100vh;
    cursor: pointer;
    position: relative;

    .title {
        height: 100%;

        h1 {
            font-weight: bold;
            font-size: 8rem;
        }

        h2 {
            position: absolute;
            bottom: 15%;
            right: 15%;
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

@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
.tracking-in-expand-fwd-bottom {
	animation: tracking-in-expand-fwd-bottom 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) .5 both;
}

@keyframes text-pop-up-right {
  0% {
    transform: translateX(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateX(50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #09f, 0 2px 0 #09f, 0 3px 0 #09f, 0 4px 0 #09f, 0 5px 0 #09f, 0 6px 0 #09f, 0 7px 0 #09f, 0 8px 0 #09f, 0 9px 0 #09f, 0 50px 30px rgba(229, 144, 60, 0.3);
  }
}
.text-pop-up-right {
	animation: text-pop-up-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

// Media Query
@media screen and (max-width: 768px) {
    .content {
        .title {

            h1 {
                font-weight: bold;
                font-size: 3rem;
            }
        }
    }
}
</style>