<template>
    <div class="container p-5">
        <Presentation/>
        <div class="btns mt-5">
            <button class="slide-in-left">Chi sono?</button>
            <button class="slide-in-left-2 mx-3">Progetti</button>
            <button class="slide-in-left-3">Contattami</button>
        </div>
    </div>
</template>

<script>
import Presentation from '../components/Presentation.vue';

export default {
    components: {
        Presentation,
    },
};
</script>

<style lang="scss" scoped> 
@use '../styles/general.scss' as *;

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
	animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 6.5s both;
}
.slide-in-left-2 {
	animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 7s both;
}
.slide-in-left-3 {
	animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 7.5s both;
}

button {
text-decoration: none;
border: 3px solid black;
transition: all 0.4s ease 0s;
}

button:hover {
color: #ffffff !important;
background: #0097b2;
border-color: #0097b2 !important;
transition: all 0.4s ease 0s;
}
</style>
