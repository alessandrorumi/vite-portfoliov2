<template>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
        <div class="container pt-5 px-5 mx-auto">
            <div class="introduction">
                <div class="text">
                    <Presentation/>
                    <div class="btns mt-5">
                        <button class="slide-in-left">Chi sono?</button>
                        <button class="slide-in-left-2 mx-3">Progetti</button>
                        <a href="#contacts"><button class="slide-in-left-3">Contattami</button></a>
                    </div>
                </div>
                <div class="pc-image">
                    <img class="scale-in-ver-bottom" src="../assets/pc.svg" alt="">
                </div>
            </div>
            <div id="whoiam" style="height: 500px;">

            </div>
            <div id="projects" style="height: 500px;">

            </div>
            <div id="contacts">
                <a href="https://github.com/alessandrorumi" target="_blank"><img src="../assets/logos/github.svg" alt=""></a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rumi.alessandro21@gmail.com" target="_blank"><img src="../assets/logos/gmail.svg" alt=""></a>
                <a href="https://www.linkedin.com/in/alessandro-rumi/" target="_blank"><img src="../assets/logos/linkedin-original.svg" alt=""></a>
            </div>
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

.container {
    .introduction {
        height: 100vh;
        display: flex;

        .text {
            width: 35%;
        }

        .pc-image {
            width: 65%;

            img {
                width: 100%;
                
            }
        }
    }

    #contacts {
        img {
            width: 40px;
        }
    }
}

// ANIMAZIONI

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


 @keyframes scale-in-ver-bottom {
  0% {
    transform: scaleY(0);
    transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 0% 100%;
    opacity: 1;
  }
}
.scale-in-ver-bottom {
	animation: scale-in-ver-bottom 0.75s cubic-bezier(0.250, 0.460, 0.450, 0.940) .25s both;
}

 @keyframes scale-out-ver-top {
  0% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }
}
.scale-out-ver-top {
	animation: scale-out-ver-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

// Bottoni
button {
transition: all 0.4s ease 0s;
}

button:hover {
color: #ffffff !important;
background: rgba($color: #e5903c, $alpha: .8);
border-color: #e5903c !important;
transition: all 0.4s ease 0s;
}

// Media Query
@media screen and (max-width: 1024px) {
    .btns {
        display: flex;
        flex-direction: column;
        
        button {
            margin: 1rem 0;
        }
    }
}
</style>