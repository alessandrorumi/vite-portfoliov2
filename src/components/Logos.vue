<script>
export default {
  name: 'Logos',
  data() {
    return {
      animate: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.animate = true;
    }, 100);
  }
}
</script>


<template>
    <div class="img d-flex justify-content-between">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" :class="{ 'scale-in-top': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" :class="{ 'scale-in-top': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" :class="{ 'scale-in-top': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" :class="{ 'scale-in-top': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" :class="{ 'scale-in-top-2': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" :class="{ 'scale-in-top-2': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" :class="{ 'scale-in-top-2': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" :class="{ 'scale-in-top-3': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" :class="{ 'scale-in-top-3': animate }" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" :class="{ 'scale-in-top-3': animate }" />
    </div>
</template>

<style lang="scss" scoped>
img {
    height: 100px;
}

@keyframes flip-in-hor-bottom {
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
}

.scale-in-top {
	animation: flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6.5s both;
}
.scale-in-top-2 {
	animation: flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 7s both;
}
.scale-in-top-3 {
	animation: flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 7.5s both;
}
</style>
