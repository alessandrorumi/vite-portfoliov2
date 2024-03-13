<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../styles/general.scss';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards, Autoplay],
        };
    },
};
</script>

<template>
    <div class="container">
        <swiper :effect="'cards'" :loop="true" :grabCursor="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" :modules="modules" 
        prevent-clicks 
        prevent-clicks-propagation 
        class="mySwiper">
            <swiper-slide class="boolflix ">
                <a href="https://www.youtube.com">
                    <div class="title">
                        <h3>Netflix (Responsive)</h3>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide class="whatsapp">
                <a href="https://www.youtube.com">
                    <div class="title">
                        <h3>WhatsApp</h3>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide class="spotify">
                <a href="https://www.youtube.com">
                    <div class="title">
                        <h3>Spotify</h3>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide class="dc">
                <a href="https://www.youtube.com">
                    <div class="title">
                        <h3>DC Comics</h3>
                    </div>
                </a>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.swiper {
    width: 75%;
    height: 90vh;

    .title {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .50);
        display: flex;
        align-items: center;
        justify-content: center;

        h3 {
            color: #fff;
        }
    }

    a {
        color: #fff;
        width: 100%;
        height: 100%;
        font-weight: bold;
    }

    .boolflix {
        background-image: url(../assets/swiper/boolflix.png);
        background-position: top;
        background-size: cover;
        opacity: .97;
    }

    .whatsapp {
        background-image: url(../assets/swiper/boolzapp.png);
        background-position: center;
        background-size: cover;
        opacity: .97;
    }

    .spotify {
        background-image: url(../assets/swiper/spotify.png);
        background-position: center;
        background-size: cover;
        opacity: .97;
    }

    .dc {
        background-image: url(../assets/swiper/dc.png);
        background-position: center;
        background-size: cover;
        opacity: .97;
    }

    .swiper-slide {
        border-radius: 15px;
    }
}
</style>
