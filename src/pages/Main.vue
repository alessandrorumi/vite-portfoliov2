<template>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="content">
        <div class="container d-flex flex-column justify-content-center mx-auto">

            <div class="introduction mb-5">
                <div class="top d-flex align-items-center">
                    <div class="text">
                        <Presentation/>
                        <div class="btns mt-5 d-flex">
                            <a href="#whoiam"><button class="slide-in-left">Chi sono?</button></a>
                            <a href="#projects"><button class="slide-in-left-2 mx-3">Progetti</button></a>
                            <a href="#contacts"><button class="slide-in-left-3">Contattami</button></a>
                        </div>
                    </div>
                    <div class="pc-image d-flex align-items-end">
                        <img class="tilt-in-right-1" src="../assets/pc.svg" alt="">
                    </div>
                </div>
                <div class="bottom d-flex flex-column">
                    <Logos :class="{ 'd-none': hideLogos, 'd-inline-block': !hideLogos }" />
                </div>
            </div>

            <div id="whoiam" class="py-5" style="min-height: 500px;">
                <div class="text">
                    <p>Sono nato a Brescia il 21/08/1995. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, libero harum nisi alias delectus numquam distinctio obcaecati tenetur minus optio repellendus tempore, ducimus quae. Veritatis enim itaque ad pariatur in!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a beatae aliquam voluptatibus adipisci impedit eius hic quod quaerat qui! Illum alias saepe quo vel voluptatem esse autem minus architecto.</p>
                </div>
            </div>

            <div id="projects" class="py-5">
                <MySwiper/>
            </div>

            <div id="contacts" class="d-flex my-5 w-50 mx-auto justify-content-around">
                <a class="d-flex align-items-center" href="https://github.com/alessandrorumi" target="_blank">
                    <img src="../assets/logos/github.svg" alt="Github Logo">
                    <h3 class="ms-4">GitHub</h3>
                </a>
                <a class="d-flex align-items-center" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rumi.alessandro21@gmail.com" target="_blank">
                    <img class="py-4" src="../assets/logos/gmail.svg" alt="G-Mail Logo">
                    <h3 class="ms-4">G-Mail</h3>
                </a>
                <a class="d-flex align-items-center" href="https://www.linkedin.com/in/alessandro-rumi/" target="_blank">
                    <img src="../assets/logos/linkedin-original.svg" alt="LinkedIn Logo">
                    <h3 class="ms-2">LinkedIn</h3>
                </a>
            </div>

        </div>
    </div>
</template>

<script>
import Presentation from '../components/Presentation.vue'
import Logos from '../components/Logos.vue'
import MySwiper from '../components/MySwiper.vue'

export default {
    components: {
        Presentation,
        Logos,
        MySwiper
    },
    data() {
        return {
        hideLogos: true
        };
    },
    mounted() {
    setTimeout(() => {
        this.hideLogos = false;
        }, 500);
    }
};
</script>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.container {
    .introduction {
        height: 100vh;

        .top {
            justify-content: start;
            height: 80vh;

            .text {
                width: 50%;
            }
    
            .pc-image {
                width: 50%;
    
                img {
                    width: 85%; 
                }
            }
        }

        .bottom {
            justify-content: center;
            width: 100%;
            height: 20vh;
        }
    }

    #whoiam {
        height: 100vh;
        .text {
            p {
                font-size: 1.5rem;
            }
        }
    }

    #projects {
        height: 100vh;
    }

    #contacts {
        border: 5px solid #606060;
        border-radius: 20px;
        img {
            width: 40px;
            display: block;
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

@keyframes tilt-in-right-1 {
  0% {
    transform: rotateX(-30deg) translateX(300px) skewX(30deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) translateX(0) skewX(0deg);
    opacity: 1;
  }
}
.tilt-in-right-1 {
	animation: tilt-in-right-1 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.75s both;
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

@keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(10px, 0);
  }
}
.arrow {
  animation: slide 1s ease-in-out infinite;
  margin-left: 9px;
}

// Bottoni
button {
    background: transparent;
    transition: all 0.4s ease 0s;
}

button:hover {
    color: #ffffff !important;
    background: rgba($color: #000, $alpha: .1);
    border-color: #292929 !important;
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

@media screen and (max-width: 768px) {
    .content {
        .introduction {
            .top {
                height: 100%;
                flex-direction: column;
                justify-content: center;

                .text {
                    width: 80%;
                }

                .btns {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }

            .bottom {
                justify-content: start;
                height: 100%;
            }
        }

        #contacts {
            flex-direction: column;
            align-items: center;
        }
    }
}
</style>